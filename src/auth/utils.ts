import { message } from "antd";
import {api} from "../service/api";
import { IToken, IUser } from "./types";

export async function LoginRequest (email:string, password:string) {
    console.log('entrei na LoginRequest')
    try {
        const request = await api.post('auth',{email,password})
        setTokenLocalStorage(request.data.token)
        const auth = await api.get('auth',{headers:{'Authorization':request.data.token}})

        return {token:request.data.token , user: auth.data}

    } catch (error) {
        message.error('Erro na autenticação: Confira suas credenciais.')
        return null
    }
}



export async function getCurrentUser() {
    const userStr = localStorage.getItem("dcnc_user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }


  export function setUserLocalStorage(user: IUser | null){
      localStorage.setItem("dcnc_user",JSON.stringify(user))
  }


  export function setTokenLocalStorage(token: IToken | null){
      localStorage.setItem("dcnc_token",token as string)
  }

  export function getUserLocalStorage(){
    const json = localStorage.getItem("dcnc_user")

    if(!json){
        return null
    }

    const user = JSON.parse(json)

    return user ?? null;
}

export function getTokenLocalStorage(){
    const json = localStorage.getItem("dcnc_token")

    if(!json){
        return null
    }

    const token = json

    return token ?? null;
}