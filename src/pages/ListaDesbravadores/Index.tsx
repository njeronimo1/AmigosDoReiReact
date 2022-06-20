import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { EditUser } from "../../components/EditUser";
import { api } from "../../services/api";
import { Container } from "./styles";
import { ExcluirUser } from "../../components/EditUser/ExcluirUser/excluirUser";

interface Desbravadores {
    nome: string;
    endereco: string;
    idade: string;
    id: string;
}

export function ListaDesbravadores(){

    const { id } = useParams();
    const [usuarios, setUsuarios] = useState<Desbravadores[]>([]);

    const [isEditUser, setEditUser] = useState(false);
    const [isExcluirUser, setExcluirUser] = useState(false);

    function onOpenEditUser(){
      setEditUser(true);
    }
  
    function onCloseEditUser(){
      setEditUser(false);
      
      api.get('/usuarios')
        .then(response => setUsuarios(response.data));
    }
    function onOpenExcluirUser(){
        setExcluirUser(true);
      }
    
      function onCloseExcluirUser(){
        setExcluirUser(false);

        api.get('/usuarios')
        .then(response => setUsuarios(response.data));
      }

    useEffect(()=>{
        api.get('/usuarios')
        .then(response => setUsuarios(response.data));
    }, []);

    return(
            <Container>
                <div>
                    <Link to="/"
                    style={{textDecoration:'none', color:'white'}}
                    >
                        <p>Voltar</p></Link>
                    
                    <h1>Lista de Desbravadores - Amigos do Rei</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Idade</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuarios => {
                            return (
                                <tr key={usuarios.id}>
                                    <td>{usuarios.nome}</td>
                                    <td>{usuarios.endereco}</td>
                                    <td>{usuarios.idade}</td>
                                    <td>
                                        <Link to={`/desbravadores/${usuarios.id}`}>
                                            <button 
                                            onClick={onOpenEditUser}
                                            >
                                                Editar
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                    
                                        <Link to={`/desbravadores/${usuarios.id}`}>
                                            <button 
                                            onClick={onOpenExcluirUser}
                                            >
                                                Excluir
                                            </button> 
                                        </Link>
                                        
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <EditUser id={id} isOpen={isEditUser} onCloseEditUser={onCloseEditUser}/>  
                <ExcluirUser id={id} isOpenExcluirUser={isExcluirUser} onCloseExcluirUser={onCloseExcluirUser} />  

            </Container>
            
    )
}