import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FormEvent } from "react";
import Modal from "react-modal";
import { ContainerModal } from "./style";
import { api } from "../../services/api";


import imgClose from '../../assets/vector.svg';

Modal.setAppElement('#root');

interface EditUserProps {
    id: string | undefined;
    isOpen: boolean;
    onCloseEditUser: () => void
}

interface Usuario {
    nome: string;
    endereco: string;
    idade: string;
}


export function EditUser({id, isOpen, onCloseEditUser}:EditUserProps){
  
    
    const [usuario, setUsuario] = useState<Usuario>({
        nome: "",
        endereco: "",
        idade: ""
    });
    
    useEffect(()=>{
        api.get(`/usuarios/${id}`)
        .then(response => setUsuario(response.data));
    }, [id]);

    async function handleUserCreate(event: FormEvent){
        event.preventDefault();

        try{
            if(usuario.nome === "" || usuario.idade === "" || usuario.endereco === ""){
                toast.error("Preencha os campos necessários");
            }else{
                api.put(`/usuarios/${id}`, usuario).then(res => console.log(res));
                toast.success("Formulário enviado com sucesso!");    
            }
        }catch{
            toast.error("Falha no envio do formulário");
        }
        
        setUsuario({
            nome:"",
            endereco:"",
            idade:""
        });
        
    }


    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseEditUser}
            overlayClassName="edit_user_overlay"
            className="edit_user_content"
            >
            <button 
                type="button"
                onClick={onCloseEditUser} 
                className="react-modal-close"
            >
                <img src={imgClose} alt='Fechar' />
            </button>
            
            <ContainerModal onSubmit={handleUserCreate}>
            <header>
                <h2>Edite o usuário</h2>
            </header>
            <main>
                <input type="text" 
                placeholder="Nome completo"
                value={usuario.nome}
                onChange={event => setUsuario(prevState => ({...prevState, nome:event.target.value})) } 
                />
        
                <input type="text" 
                placeholder="Endereço"
                value={usuario.endereco}
                onChange={event => setUsuario(prevState => ({...prevState, endereco:event.target.value}))} 
                />
        
                <input type="text"
                placeholder="Idade"
                value={usuario.idade}
                onChange={event => setUsuario(prevState => ({...prevState, idade:event.target.value}))}
                />
        
                <input type="submit" value="Enviar" />
                </main>
            
                </ContainerModal>
        </Modal>
    )
}