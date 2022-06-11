import { Container } from "./styles";

export function Header(){
    return(
        <>
            <Container>
                <div>
                    <h2>Clube de Desbravadores Amigos do Rei</h2>
                    <p>Amigos do Rei</p>
                </div>
                <div>
                    <a href="#" >Sobre</a>
                    <a href="#" >Cadastro</a>
                </div>
            </Container>
        </>
    )
}