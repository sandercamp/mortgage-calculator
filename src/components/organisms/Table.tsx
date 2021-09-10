import React, { useState } from 'react';
import styled from 'styled-components';

import { Table as BasicTable, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';
import { useSchedule } from '../../contexts/Schedule';
import { PaymentInterval } from '../../types';

const Container = styled.div`
    grid-area: table;
    
    overflow: auto;
    
    margin: 0 1rem 0 1rem;
`;

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

    const [page, setPage] = useState(1);
    const rowsPerPage = 5;

    if (schedule === null) {
        return null;
    }

    return (
        <Container>
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
                        Totaal afgelost
                    </TableCell>
                    <TableCell>
                        Totaal betaald
                    </TableCell>
                    <TableCell>
                        Resterende schuld
                    </TableCell>
                </TableHead>
                {
                    schedule.paymentIntervals
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(renderRow)
                }
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            count={ schedule.paymentIntervals.length }
                            page={ page }
                            rowsPerPage={ rowsPerPage }
                            onPageChange={ (event, page) => setPage(page) }
                            rowsPerPageOptions={ [] }
                        />
                    </TableRow>

                </TableFooter>
            </BasicTable>
        </Container>
    );
};

export default Table;
