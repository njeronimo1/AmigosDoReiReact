import { useAuth } from "../../../contexts/AuthProvider/useAuth"


export function ProtectedLayout (){
    
    const auth = useAuth()
    
    if(!auth.email){
        return(
            <h1 style={{color:'white'}}>You don't have access</h1>
        )
    }

    return(
        <h1>Oi</h1>
    )

    
}