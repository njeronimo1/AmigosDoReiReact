import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { EditUser } from "../../components/EditUser";
import { api } from "../../services/api";
import { Container, ContainerBlockedAccess, ContainerHeader } from "./styles";
import { ExcluirUser } from "../../components/EditUser/ExcluirUser/excluirUser";
import { useAuth } from "../../contexts/AuthProvider/useAuth";
import { LockSimple } from "phosphor-react";

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

    const infoUser = useAuth();

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

    const auth = useAuth()
    const history = useNavigate();
    
    console.log(auth.email);
    if(!auth.email){
        return(
            <ContainerBlockedAccess>
                <LockSimple size={50} />
                <h1 style={{color:'white'}}>Você não tem acesso a essa página, faça login com sua conta no Google e continue.</h1>

                <Link to="/login"
                    style={{textDecoration:'none', color:'white'}}
                    >
                        <p>Login</p></Link>
            </ContainerBlockedAccess>
        )
    }

    function logOut(){
        auth.logout();
        history('/');
    }

    console.log(infoUser.photoURL);

    return(<div>
            <ContainerHeader>
                <p className="txt_bem_vindo">Seja bem-vindo</p>
                <div className="border"></div>
                <p className="user_name">{infoUser.displayName}</p>
                <button className="btn_sair" onClick={logOut} >Sair</button>
            </ContainerHeader>
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
        </div>           
    )
}