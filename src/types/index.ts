import { DateTime } from 'luxon';

export type PaymentInterval = {
    date: DateTime;
    principalShare: number;
    interestShare: number;
    shareTotal: number;
    paymentTotal: number;
    principalRemainder: number;
    principalTotal: number;
    interestTotal: number;
}

export type AmortizationSchedule = {
    amortizationPeriod: number;
    interestRate: number;
    closingDate: DateTime;
    maturityDate: DateTime;
    principal: number;
    interest: number;
    total: number;
    paymentIntervals: PaymentInterval[];
    addPaymentInterval: Function;
}

export enum MortgageType {
    Linear = 'Linear',
    Annuity = 'Annuity',
}
