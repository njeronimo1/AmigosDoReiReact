import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Header(){
    return(
        <>
            <Container>
                <div>
                    <h2>Clube de Desbravadores Amigos do Rei</h2>
                    <p>Amigos do Rei</p>
                </div>
                <div>

                    <Link to="/login"
                    style={{textDecoration:'none', color:'white'}}>
                        <span>Entrar</span>
                    </Link>
                    
                </div>
            </Container>
        </>
    )
}