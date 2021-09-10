import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowBackIosNew } from '@mui/icons-material';

const Collapse: FC<JSX.IntrinsicElements['button']> = ({ ...rest }) => (
    <button { ...rest }>
        <ArrowBackIosNew/>
    </button>
);

export default styled(Collapse)`
    svg {
        fill: white;
    }

    &:hover {
        cursor: pointer;
        opacity: .6;
    }
`;