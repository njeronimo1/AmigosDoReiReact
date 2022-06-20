import styled from "styled-components";

export const ContainerModal = styled.form`
    width: 100%;
    main{
        display: flex;
        flex-direction: column;

        input[type="text"]{
            margin: 0.3rem 0 0.3rem 0;
            padding: 0.6rem;
            border-radius: 0.2rem;
            border: none;
            background-color: rgb(240,240,240);
        }

        input[type="submit"]{
            width: 100%;
            cursor: pointer;
            padding: 0.6rem;
            border: none;
            background-color: #fa770f;
            color: white;
            margin: 0.7rem 0 0.7rem 0;
        }
    }

`