import React, { FC } from 'react';
import styled from 'styled-components';

const Page: FC<JSX.IntrinsicElements['div']> = ({ children, ...props }) => (
    <div { ...props }>
        { children }
    </div>
);

export default styled(Page)`
    display: grid;
        
    grid-template-columns: min-content 2fr;
    grid-template-rows: 10vh 45vh 45vh;
    grid-template-areas:
        "sidebar menu"
        "sidebar chart"
        "sidebar table";
        
    transition: 1s;
`;
