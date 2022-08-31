import { useAuth } from "../../contexts/AuthProvider/useAuth"

import home from '../../assets/home.png';
import directors from '../../assets/directors.png';
import pathfinders from '../../assets/pathfinders.png';
import { Container } from "./styles";
import { HomeDestributer } from "../../components/HomeDestributer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




export function HomePage (){
    
    const [directore, setDirectore] = useState("Home");
    const auth = useAuth()
    const history = useNavigate();
    
    console.log(auth.email);
    if(!auth.email){
        return(
            <h1 style={{color:'white'}}>Você não tem acesso a essa página, faça login com sua conta no Google e continue.</h1>
        )
    }

    function logOut(){
        auth.logout();
        history('/');
    }

    return(
        <>
            <Container>
                <button type="button" onClick={logOut}>LogOut</button>
                <div>
                    <button onClick={() => setDirectore("Home")} 
                    style={
                        directore === "Home" ? {backgroundColor:"rgba(246, 117, 13, 0.3)"}
                    : {backgroundColor:'transparent'}}>
                        <img src={home} alt="Clique para ir a home"></img>
                    </button>

                    <button onClick={() => setDirectore("directors")} 
                    style={
                        directore === "directors" ? {backgroundColor:"rgba(246, 117, 13, 0.3)"}
                    : {backgroundColor:'transparent'}}>
                        <img src={directors} alt="Clique para ir a directors"></img>
                    </button>

                    <button onClick={() => setDirectore("pathfinders")}
                    style={
                        directore === "pathfinders" ? {backgroundColor:"rgba(246, 117, 13, 0.3)"}
                    : {backgroundColor:'transparent'}}>
                        <img src={pathfinders} alt="Clique para ir a pathfinders" ></img>
                    </button>
                </div>
            </Container>

            <HomeDestributer directore = { directore } /> 

        </>
    )

    
}