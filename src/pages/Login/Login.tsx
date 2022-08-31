import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";
import { useEffect, useState } from "react";
import {GoogleLogo} from 'phosphor-react';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../../services/firebaseAuth';
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

export function Login(){

    const authLogin = useAuth();
    const history = useNavigate();

    function handleGoogleLogin(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then((result)=>{
            authLogin.savedUser(result.user);
            history('/desbravadores');
        }).catch((error)=>{
            toast.error(error);
        });
    }

    const user = authLogin.email;
    console.log(user);

    return(
        <Container>
            <Link to="/">
                <button className="btn_voltar">Voltar</button>
            </Link>

            <div className="formulario_login">

            <h1>Faça login com sua conta no Google</h1>
            

                <button 
                type="button"
                onClick={handleGoogleLogin} value="Entrar"
                className="btn_entrar_with_google"
                >
                    <GoogleLogo size={35} />
                </button>
            </div>
        </Container>
    )
}