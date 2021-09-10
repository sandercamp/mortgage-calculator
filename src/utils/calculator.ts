import { DateTime, Interval } from 'luxon';

import { AmortizationSchedule, MortgageType, PaymentInterval } from '../types';

const createAmortizationInterval = (closingDate: string, amortizationPeriod: number): Interval => {
    const start = DateTime.fromFormat(closingDate, 'yyyy-L-dd');
    const end = start.plus({ years: amortizationPeriod });

    return Interval.fromDateTimes(start, end);
};

const createSchedule = (
    principal: number,
    interestRate: number,
    amortizationPeriod: number,
    closingDate: string
): AmortizationSchedule => {
    const { start, end } = createAmortizationInterval(closingDate, amortizationPeriod);

    return {
        amortizationPeriod: amortizationPeriod,
        interestRate: interestRate,
        closingDate: start,
        maturityDate: end,
        principal: principal,
        interest: 0,
        total: 0,
        paymentIntervals: [],
        addPaymentInterval: function(paymentInterval: PaymentInterval) {
            this.paymentIntervals.push(paymentInterval);

            this.interest += paymentInterval.interestShare;
            this.total += paymentInterval.paymentTotal;

            this.total = round(this.total);
        },
    };
};

const round = (amount: number): number => Math.round(amount * 100) / 100;

const calculateSchedule = (
    mortgageType: MortgageType,
    interestRate: number,
    amortizationPeriod: number,
    closingDate: string,
    principal: number
): AmortizationSchedule => {
    const schedule = createSchedule(principal, interestRate, amortizationPeriod, closingDate);
    const monthlyInterest = (interestRate / 100) / 12;

    let principalRemainder = principal;
    let principalTotal = 0;
    let paymentDate = schedule.closingDate;

    while (paymentDate < schedule.maturityDate) {
        const annuity = principal * monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -(amortizationPeriod * 12)));
        const interestShare = ((principalRemainder / 100) * interestRate) / 12;
        const principalShare = mortgageType === MortgageType.Linear
            ? principal / (amortizationPeriod * 12)
            : annuity - interestShare; // MortgageType.Annuity

        principalRemainder -= principalShare;
        principalTotal += principalShare;

        schedule.addPaymentInterval(
            {
                date: paymentDate,
                principalShare: round(principalShare),
                interestShare: round(interestShare),
                shareTotal: round(interestShare + principalShare),
                paymentTotal: round(schedule.interest + principalTotal),
                interestTotal: schedule.interest,
                principalRemainder: Math.abs(round(principalRemainder)),
                principalTotal: round(principalTotal),
            }
        );

        paymentDate = paymentDate.plus({ months: 1 });
    }

    return schedule;
};

export default calculateSchedule;
