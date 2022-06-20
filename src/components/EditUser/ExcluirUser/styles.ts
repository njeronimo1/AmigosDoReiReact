import styled from "styled-components";

export const Container = styled.div`

    header{
        h2{
            font-size: 1.3rem;
        }
    }

    main{
        button{
            border: 0.1rem solid #ccc;
            margin: 0.1rem;
            padding: 1rem;
            width: 49%;
            background-color: transparent;
            transition: 0.3s all;

            &:hover{
                background-color: #fa770f;
                color: white;
            }
        }
    }
`