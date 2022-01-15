import React from 'react'
import { Login } from '../../components/Login'
import { LoginWrapper, WrapperLogo } from './style'
import { Image} from 'antd-mobile'

export default function LoginScreen() {
    return (
        <LoginWrapper>
            <WrapperLogo>

            <Image  
            width={164}
            height={164}
            style={{ borderRadius: 8 }}           
            src='https://i.ibb.co/Hh414pB/AUTO-DEV-2.png' />
            </WrapperLogo>

            <Login/>
            
        </LoginWrapper>
    )
}
