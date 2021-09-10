import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Point } from '@nivo/line';
import { DateTime } from 'luxon';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    
    border: 1px solid black;
    border-radius: .25rem;
    
    padding: .75rem;
    
    background: white;
    
    font-size: .75rem;
`;

const Title = styled.div`    
    margin: 0 0 .5rem 0;
    
    font-size: .9rem;
    font-weight: bold;
`;

const PointTooltip: FC<Point & JSX.IntrinsicElements['div']> = (point): ReactElement => {
    const date = DateTime.fromJSDate(new Date(point.data.xFormatted)).toFormat('LL-yyyy');
    const value = point.data.yFormatted;

    return (
        <Container>
            <Title>{ point.serieId }</Title>
            <span><b>{ date } :</b> €{ value }</span>
        </Container>
    );
}

export default PointTooltip;
