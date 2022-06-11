import styled from "styled-components";

export const Container = styled.form`

    background-color: white;
    color: black;
    padding: 1rem;
    border-radius: 1rem;
    margin-top: 1.5rem;
    width: 25%;

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

    @media(max-width:500px) {
        width: 90%;
        margin: 2%;
    }
`