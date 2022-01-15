import React from 'react'
import { CapsuleTabs } from 'antd-mobile'
import Dashboard from '../Dashboard'
import Header from '../../components/NavBar'
import { useAuth } from '../../auth/useAuth'
import './index.css'

export default function Home() {

    const auth = useAuth()

    console.log('Cheguei na tela home')

    return (
        <>
        <Header title={auth.email} avatar={auth?.avatar}/>
        <CapsuleTabs >
          <CapsuleTabs.Tab className='tabs' title='Robô: Laudos de monitoramento' key='fruits'>
            <Dashboard/>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='Robô vazio' key='vegetables'>
            Aguardando Robô
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='Robô vazio' key='animals'>
            Aguardando Robô
          </CapsuleTabs.Tab>
        </CapsuleTabs>
       </>
    )
}
