import React from 'react'
import { Avatar, Divider, List, NavBar, Space, Toast } from 'antd-mobile'
import styled from 'styled-components'
import Logo from './autodev.png'


export const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
`



export default function Header(props:any) {

    return (
        <NavWrapper>
            <Avatar  src={Logo} style={{ borderRadius: 16, width: 80, height: 80 }}  />
            <NavBar backArrow={false}>
            
                <List>
                    <List.Item
                        prefix={<Avatar src={props.avatar} style={{ borderRadius: 32 }}  />}
                        description={'DCNC Advogados'}
                        
                    >
                        {props.title ? props.title.split('@')[0] : ''}
                    </List.Item>
                </List>
                
             </NavBar>

        </NavWrapper>
    )
}
