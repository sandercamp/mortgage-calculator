import React, { BaseSyntheticEvent, useState } from 'react';

import calculateSchedule from '../../utils/calculator';
import { MortgageType } from '../../types';
import Text from '../atoms/input/Text';
import { useSchedule } from "../../contexts/Schedule";

const Form = () => {
    const { setSchedule } = useSchedule();
    const [values, setValues] = useState(
        {
            mortgageType: MortgageType.Linear,
            closingDate: '2017-01-01',
            amortizationPeriod: 30,
            principal: 200000,
            interestRate: 2.93,
        }
    );

    const { mortgageType, closingDate, amortizationPeriod, principal, interestRate } = values;

    const onChange = (event: BaseSyntheticEvent) => {
        const { name, value } = event.target;

        setValues({ ...values, [name]: value });
    };

    const onSubmit = (event: BaseSyntheticEvent) => {
        event.preventDefault();

        setSchedule(
            calculateSchedule(
                mortgageType,
                interestRate,
                amortizationPeriod,
                closingDate,
                principal
            )
        );
    }

    return (
        <form onChange={ onChange } onSubmit={ onSubmit }>
            <label>
                Datum
                <Text
                    name={ 'closingDate' }
                    value={ closingDate }
                />
            </label>

            <label>
                Looptijd (jaren)
                <input
                    type={ 'number' }
                    name={ 'amortizationPeriod' }
                    value={ amortizationPeriod }
                />
            </label>

            <label>
                Hypotheekvorm
                <input
                    type={ 'radio' }
                    name={ 'mortgageType' }
                    value={ MortgageType.Linear }
                    checked={ mortgageType === MortgageType.Linear }
                />
                <label htmlFor={ 'l' }>Lineair</label>
                <input
                    type={ 'radio' }
                    name={ 'mortgageType' }
                    value={ MortgageType.Annuity }
                    checked={ mortgageType === MortgageType.Annuity }
                />
                <label htmlFor={ 'a' }>Annuïteit</label>
            </label>

            <label>
                Bedrag
                <input
                    type={ 'number' }
                    name={ 'principal' }
                    value={ principal }
                />
            </label>

            <label>
                Rente
                <input
                    type={ 'number' }
                    name={ 'interestRate' }
                    value={ interestRate }
                />
            </label>

            <input
                type={ 'submit' }
                value={ 'Berekenen' }
            />
        </form>
    );
}

export default Form;
