import { useState, FormEvent } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function Formulario(){

    const [nome, setNome]         = useState("");
    const [endereco, setEndereco] = useState("");
    const [idade, setIdade]       = useState("");

    async function handleUserCreate(event: FormEvent){
        event.preventDefault();

        const data = {
            nome, 
            endereco, 
            idade
        }

        api.post('/cadastro', data).then(res => console.log(res));

        setNome('');
        setEndereco('');
        setIdade('');
    }

    return (
        <>
            <Container onSubmit={handleUserCreate}>
                <header>
                    <h2>Entre para o clube !</h2>
                </header>
                <main>
                    <input type="text" 
                    placeholder="Nome completo"
                    value={nome}
                    onChange={event => setNome(event.target.value)} 
                    />
                    
                    <input type="text" 
                    placeholder="Endereço"
                    value={endereco}
                    onChange={event => setEndereco(event.target.value)} 
                    />
                    
                    <input type="text"
                    placeholder="Idade"
                    onChange={event => setIdade(event.target.value)}
                    />
                    
                    <input type="submit" value="Enviar" />
                </main>
            </Container>
        </>
    )
}