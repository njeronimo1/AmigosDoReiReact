import { Formulario } from "../Formulario/Formulario"
import { Container } from "./style"

export function Content(){
    return(
        <>
            <Container>
                <div>
                    <h1>#SouDesbravador</h1>

                    <p>O Clube de desbravadores é uma família unida em Cristo<br />
                    com o propósito de levar a mensagem do advento a toda nossa geração.<br />
                    Aqui aprendemos sobre honra, amor, respeito, sobrevivência na mata e como <br />
                    ser feliz com coisas simples.</p>
                </div>
                <Formulario/>
            </Container>
        </>
    )
}