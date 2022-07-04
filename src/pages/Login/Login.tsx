import { Link, Navigate, useNavigate } from "react-router-dom";
import { Container } from "./style";
import { FormEvent, useState } from "react";
import { useAuth } from "../../contexts/AuthProvider/useAuth";


export function Login(){

    const auth = useAuth();
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e:FormEvent){
        e.preventDefault();

        try{
            
            await auth.authenticate(email, password);

            history('/profile');
        }catch(error){
            console.log(error);
        }
    }

    return(
        <Container>
            <Link to="/">
                <button>Voltar</button>
            </Link>

            <form onSubmit={handleLogin}>
                <header>
                    <h1>Login</h1>
                    </header>
                <div>
                    <label>Email</label>
                    
                    <input 
                    type="text" 
                    placeholder="Digite seu e-mail...."
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    />
                    <label>Senha</label>
                    
                    <input 
                    type="password" 
                    placeholder="Senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    />

                    <input type="submit" value="Entrar"/>
                </div>
            </form>
        </Container>
    )
}