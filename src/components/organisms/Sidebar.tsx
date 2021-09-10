import React, {FC, useState} from 'react';
import styled from 'styled-components';

import CollapseButton from '../atoms/buttons/Collapse';

const Sidebar: FC<JSX.IntrinsicElements['div']> = ({ className, children, ...props }) => {
    const [ collapsed, setCollapsed ] = useState(false);

    return (
        <div
            className={ `${ className } ${ collapsed ? 'collapsed' : 'expanded' }` }
            { ...props }
        >
            <div>
                { children }
            </div>
            <CollapseButton onClick={ () => setCollapsed(!collapsed) }/>
        </div>
    );
}

export default styled(Sidebar)`
    grid-area: sidebar;
    
    position: relative;
    overflow: hidden;
    
    min-height: 100%;
    
    display:     flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
    background-color: #264653;
    color:            white;

    & > button:last-child {
        position: absolute;
        bottom: 0;
    
        border: none; 
        
        
        width: 20rem;
        height: 2.5rem;
        
        background: #7a9e9f;
        
        z-index: 3;
        
        transition: all 1s, transform 1s, width .5s, height .5s;
    }

    & > :first-child {
        width: 20rem;
        opacity: 1;
        transition: all 1s 1s;
        margin: auto;
        
        z-index: 2;
    }

    &.collapsed {
        width: 2rem;

        & > div:first-child {
            position: absolute;
            opacity 0;
            
            transition: all 1s;
        }
        
        & > button:last-child {
            bottom: 50%;
            margin: 0 0 -4rem 0;
        
            width: 2rem;
            height: 8rem;
            
            transition: all 1s, width 1s 1s, height 1s 1s, bottom 1s 1s, margin 1s 1s;
            
            svg {
                transform: rotate(180deg);
                transition: transform .5s 2s;
            }
        }
        
        transition: all 1s;
    }
    
    &.expanded {
        width: 20rem;
        
        transition: all 1s 1s;
        
        
        & > button:last-child {
            transition: all 1s, height 1s;
            
            svg {
                transition: transform .5s 2s;
            }
        }
    }
   
`;
