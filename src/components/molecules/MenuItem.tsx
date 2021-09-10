import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.li`

`;

interface MenuItemProps {
    title: string;
    [x:string]: any;
}

const MenuItem: FC<MenuItemProps> = ({ title }) => (
    <Container>
        { title }
    </Container>
);

export default MenuItem;
