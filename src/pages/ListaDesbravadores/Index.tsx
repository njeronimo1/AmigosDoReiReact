import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Desbravadores {
    nome: string;
    endereco: string;
    idade: string;
    id: string;
}

export function ListaDesbravadores(){

    const [usuarios, setUsuarios] = useState<Desbravadores[]>([]);

    useEffect(()=>{
        api.get('/usuarios')
        .then(response => setUsuarios(response.data));

    }, []);

    console.log(usuarios);

    return(
            <Container>
                <div>
                    <Link to="/"
                    style={{textDecoration:'none', color:'white'}}
                    >Voltar</Link>
                    
                    <h1>Lista de Desbravadores - Amigos do Rei</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Idade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuarios => {
                            return (
                                <tr key={usuarios.id}>
                                    <td>{usuarios.nome}</td>
                                    <td>{usuarios.endereco}</td>
                                    <td>{usuarios.idade}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Container>
    )
}