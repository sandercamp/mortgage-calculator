import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Point } from '@nivo/line';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    background: white;
`;

const PointTooltip: FC<Point> = (point): ReactElement => (
    <Container>
        <span>{ point.serieId }</span>

        <span>Bedrag: €{ point.data.yFormatted }</span>
        <span>Datum: { point.data.xFormatted }</span>
    </Container>
);

export default PointTooltip;
