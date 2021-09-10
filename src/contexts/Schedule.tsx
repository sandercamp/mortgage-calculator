import React, { createContext, FC, useContext, useState } from 'react';

import { AmortizationSchedule } from '../types';

type ScheduleContext = {
    schedule: AmortizationSchedule|null,
    setSchedule: Function,
};

const defaultContext = {
    schedule: null,
    setSchedule: () => {},
}

const Context = createContext<ScheduleContext>(defaultContext);

const Schedule: FC = ({ children }) => {
    const [ schedule, setSchedule ] = useState<AmortizationSchedule|null>(null);

    return (
        <Context.Provider
            value={
                {
                    schedule: schedule,
                    setSchedule: setSchedule
                }
            }
        >
            { children }
        </Context.Provider>
    );
};

export const useSchedule = () => useContext(Context);

export default Schedule;
