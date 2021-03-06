import React, { BaseSyntheticEvent, useState } from 'react';
import styled from 'styled-components';

import calculateSchedule from '../../utils/calculator';
import { MortgageType } from '../../types';
import Text from '../atoms/input/Text';
import { useSchedule } from "../../contexts/Schedule";

const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;
    width: 100%;
   
    color: #eef5db;
   
    > * {
        margin: .4rem 0 .4rem;
    }
   
    input {
        margin: 0 .25rem 0;
        padding: .25rem;
        
        border: none;
        outline: none;
    }
`;

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
        <Container onChange={ onChange } onSubmit={ onSubmit }>
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
                <label htmlFor={ 'a' }>Annu??teit</label>
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
        </Container>
    );
}

export default Form;
