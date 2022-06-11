import { Content } from "../../components/Content/Content";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Container } from "./styles";



export function Home(){
    return(
        <>
            <Header/>

            <Container>
                <Content />
            </Container>

            <Footer/>
        </>
    )
}