import Modal from "react-modal";
import { toast } from 'react-toastify';
import imgClose from '../../../assets/vector.svg';
import { api } from '../../../services/api';
import { Container } from './styles';


Modal.setAppElement('#root');

interface ExcluirUserProps{
    id: string | undefined;
    isOpenExcluirUser: boolean;
    onCloseExcluirUser: () => void;
}


export function ExcluirUser({ id, isOpenExcluirUser, onCloseExcluirUser }:ExcluirUserProps) {

    async function handleUserCreate(){
        api.delete(`/usuarios/${id}`).then(res => console.log(res));
        toast.success("Usuário excluido com sucesso!");    
    }


    return(
        <Modal
        isOpen={isOpenExcluirUser}
        onRequestClose={onCloseExcluirUser}
        overlayClassName="edit_user_overlay"
        className="edit_user_content"
        >
        <button 
            type="button"
            onClick={onCloseExcluirUser} 
            className="react-modal-close"
        >
                <img src={imgClose} alt='Fechar' />
            </button>
            <Container>
                <header>
                    <h2>Você deseja realmente excluir este usuário?</h2>
                </header>
                <main>
                    <button onClick={handleUserCreate}>Sim</button>
                    <button onClick={onCloseExcluirUser}>Cancelar</button>
                </main>
            </Container>
        </Modal>
        
    )
}