

import React, {createContext, useEffect, useState} from "react";
import { User } from "firebase/auth";
import { IAuthProvider, IContext } from "./types";
import { getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) =>{
    const [user, setUser] = useState<User>({} as User);

    useEffect(() =>{
        const user = getUserLocalStorage();

        if(user){
            setUser(user);
        }
        
    }, [])

    function savedUser(dadosUser: User){
        setUser(dadosUser);
        localStorage.setItem('u', JSON.stringify(dadosUser));
        
        console.log(dadosUser);
    }

    function logout(){
        setUser({} as User);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, savedUser, logout }}>
            {children}
        </AuthContext.Provider>
    )
}