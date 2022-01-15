import React from 'react'
import { Avatar, Divider, List, NavBar, Space, Toast } from 'antd-mobile'
import styled from 'styled-components'


export const NavWrapper = styled.div`
    padding: 1rem;
`



export default function Header(props:any) {

    return (
        <NavWrapper>
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
