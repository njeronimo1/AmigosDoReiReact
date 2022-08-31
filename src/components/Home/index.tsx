import { Container } from "./styles";




export function HomeLogged(){
    return(
        <>
            <Container>
                <div className="container_home">
                    <div className="container_home_esquerda">
                        <div className="shape_box_home_esq">
                            <h1>Avisos importantes</h1>
                            <h1>Avisos importantes</h1>
                            <h1>Avisos importantes</h1>
                            <h1>Avisos importantes</h1>
                            <h1>Avisos importantes</h1>
                            <h1>Avisos importantes</h1>
                            <h1>Avisos importantes</h1>
                            <h1>Avisos importantes</h1>
                            <h1>Avisos importantes</h1>
                        </div>
                        
                    </div>
                    <div className="container_home_direita">
                        <div className="shape_box_home nrm_desbravadores_home">
                            <h1>Desbravadores</h1>
                            <h2>30</h2>
                        </div>
                        <div className="shape_box_home nrm_desbravadores_home">
                            <h1>Diretoria</h1>
                            <h2>12</h2>
                        </div>
                        <div className="shape_box_home nrm_desbravadores_home">
                            <h1>Membros ativos</h1>
                            <p>Últimas 2 reuniões | com diretoria</p>
                            <h2>20</h2>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}