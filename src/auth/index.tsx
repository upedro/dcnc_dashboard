import React, { createContext, useEffect, useState } from "react";
import { IContext, IAuthProvider, IUser, IToken } from "./types";
import {api} from "../service/api";
import { getCurrentUser, getTokenLocalStorage, getUserLocalStorage, LoginRequest, setTokenLocalStorage, setUserLocalStorage } from "./utils";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: IAuthProvider) => {
    const [User, setUser] = useState<IUser | null>()
    const [Token, setToken] = useState<IToken | null | string>()

    useEffect(() => {
        const user = getUserLocalStorage();
        if (user){
            setUser(user)
        }
        const token = getTokenLocalStorage()

        if (token){
            setToken(token)
        }


    }, [])

    async function login(email:string,password:string) {
        console.log('aqui1')
        const response = await LoginRequest(email,password)
        if(response){
            const payload = { token: response?.token, user: response?.user}

            setUser(payload.user)
            setToken(payload.token)
            setUserLocalStorage(payload.user)
            setTokenLocalStorage(payload.token)
            
        }


    }

    async function getUser() {
        const response = await getUserLocalStorage()
        if (response){
            setUser(response)
            setUserLocalStorage(response)
        }
    }

    async function logout() {
        setUser(null)
        setUserLocalStorage(null)
        
    }

    return (
        <AuthContext.Provider value={{...User, login, logout, getUser}}>
            {children}
        </AuthContext.Provider>
    )
}