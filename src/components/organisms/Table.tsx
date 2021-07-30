import React from 'react';
import { Table as BasicTable, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useSchedule } from '../../contexts/Schedule';
import {PaymentInterval} from '../../types';

const renderRow = (interval: PaymentInterval): JSX.Element => (
    <TableRow>
        <TableCell>
            { interval.date.toFormat('LL-yyyy') }
        </TableCell>
        <TableCell>
            € { interval.principalShare }
        </TableCell>
        <TableCell>
            € { interval.interestShare }
        </TableCell>
        <TableCell>
            € { interval.shareTotal }
        </TableCell>
        <TableCell>
            € { interval.principalTotal }
        </TableCell>
        <TableCell>
            € { interval.paymentTotal }
        </TableCell>
        <TableCell>
            € { interval.principalRemainder }
        </TableCell>
    </TableRow>
);

const Table = () => {
    const { schedule } = useSchedule();

    if (schedule === null) {
        return null;
    }

    return (
        <BasicTable>
            <TableHead>
                <TableCell>
                    Datum
                </TableCell>
                <TableCell>
                    Aflossingsdeel
                </TableCell>
                <TableCell>
                    Rentedeel
                </TableCell>
                <TableCell>
                    Totaal deel
                </TableCell>
                <TableCell>
                    Totaal betaald
                </TableCell>
                <TableCell>
                    Totaal afgelost
                </TableCell>
                <TableCell>
                    Resterende schuld
                </TableCell>
            </TableHead>
            { schedule.paymentIntervals.map(renderRow) }
        </BasicTable>
    );
};

export default Table;
