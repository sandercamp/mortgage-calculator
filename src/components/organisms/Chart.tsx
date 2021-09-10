import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { ResponsiveLine, Serie, Datum } from '@nivo/line';

import { useSchedule } from '../../contexts/Schedule';
import { AmortizationSchedule } from "../../types";

import PointTooltip from '../molecules/PointTooltip';

const Container = styled.div`
    grid-area: chart;
`;

const mapSchedule = (schedule: AmortizationSchedule): Array<Serie> => {
    const dateFormat = 'yyyy-LL';

    return [
        {
            id: 'Aflossing',
            color: '#b8d8d8',
            data : schedule.paymentIntervals.map(
                (interval): Datum => (
                    { x: interval.date.toFormat(dateFormat), y: interval.principalShare }
                )
            ),
        },
        {
            id: 'Rente',
            color: '#eef5db',
            data : schedule.paymentIntervals.map(
                (interval): Datum => (
                    { x: interval.date.toFormat(dateFormat), y: interval.interestShare }
                )
            ),
        },
    ];
}

const Chart: FC = () => {
    const { schedule } = useSchedule();

    if (schedule === null) {
        return null;
    }

    const data = mapSchedule(schedule);

    return (
        <Container>
            <ResponsiveLine
                data={ data }
                colors={ series => series.color }
                enableArea={ true }
                areaOpacity={ 1 }
                enableGridX={ false }
                enableGridY={ false }
                enablePoints={ false }
                margin={ { top: 50, right: 110, bottom: 50, left: 60 } }
                tooltip={ ({ point }) => <PointTooltip { ...point } /> }
                xScale={
                    {
                        type: 'time',
                        format: '%Y-%m',
                        precision: 'month',
                    }}
                yScale={
                    {
                        type: 'linear',
                        min: 0,
                        max: 1500,
                        stacked: true,
                        reverse: false
                    }
                }
                axisBottom={
                    {
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Test',
                        legendOffset: 36,
                        legendPosition: 'middle',
                        format: '%m-%Y'
                    }
                }
                axisLeft={
                    {
                        format: value => `€${ value }`
                    }
                }
                pointSize={ 10 }
                pointColor={ { theme: 'background' } }
                pointBorderWidth={ 2 }
                pointBorderColor={ { from: 'serieColor' } }
                pointLabelYOffset={ -12 }
                useMesh={ true }
                legends={ [
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ] }
            />
        </Container>
    );
};

export default Chart;
