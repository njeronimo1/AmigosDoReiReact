import { Container } from "./style";


export function Formulario(){
    return (
        <>
            <Container>
                <header>
                    <h2>Entre para o clube !</h2>
                </header>
                <main>
                    <input type="text" placeholder="Nome completo" />
                    <input type="text" placeholder="Endereço" />
                    <input type="text" placeholder="Idade" />
                    <input type="submit" value="Enviar" />
                </main>
            </Container>
        </>
    )
}