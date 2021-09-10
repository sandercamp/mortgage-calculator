import React, {FC} from 'react';
import styled from 'styled-components';
import MenuItem from '../molecules/MenuItem';

const Container = styled.nav`
    grid-area: menu;
    
    width: 100%;
        
    color: white;
        
    background-color: #7a9e9f;
    
    
    transition: 1s;
`;

const MenuItems = styled.ol`
    display: flex;
    align-items: center;
    
    padding: 0 1rem 0 1rem;
    
    list-style: none;
`;

const Menu: FC = ({ children }) => {
    return (
        <Container>
            <MenuItems>
                <MenuItem title={ 'Test1'} />
                <MenuItem title={ 'Test2'} />
                <MenuItem title={ 'Test3'} />
            </MenuItems>
        </Container>
    )
};

export default Menu;
