

import styled from 'styled-components';

export const Container = styled.header`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blackprimary);

    div{
        display: flex;
        width: 25%;
        height: 50px;
        align-items: center;
        justify-content: center;
        

        button{
            background-color: transparent;
            border: none;
            width: 100%;
            height: 100%;
            
            &:hover{
                background-color: var(--orangehover);
                cursor: pointer;
            }
        }
    }

`