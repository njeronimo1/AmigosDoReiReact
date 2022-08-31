import { Directors } from "../Directors";
import { HomeLogged } from "../Home";
import { Pathfinders } from "../Pathfinders";

interface HomeDestributerProps{
    directore: string;
}


export function HomeDestributer( { directore } : HomeDestributerProps){
    
    if(directore === "Home"){
        return(
            <HomeLogged />
        )
    }else if(directore === "directors"){
        return(
            <Directors />    
        )
    }else if(directore === "pathfinders"){
        return(
            <Pathfinders />    
        )
    }

    return(
        <></>
    )
    
}