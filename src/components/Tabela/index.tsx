import { Button, Space, Table } from 'antd';
import { Divider } from 'antd-mobile';
import React, { useState } from 'react'
import {Wrapper} from './style'


export default function Tabela(props:any) {

    const [filteredInfo, setfilteredInfo] = useState({} || null)
    const [sortedInfo, setsortedInfo] = useState({} || null)

    function handleChange (pagination:any,filters:any,sorter:any) {
        console.log('Various parameters', pagination, filters, sorter);
        setfilteredInfo(filters)
        setsortedInfo(sorter)

    }
    
    function clearFilters () {
        setfilteredInfo(null)
    }

    function clearAll () {
        setfilteredInfo(null)
        setsortedInfo(null)
    }

    function setAgeSort () {
        setsortedInfo({
            order: 'descend',
            columnKey: 'age',
        })
    }


    return (
        <>
        <Wrapper>
            <Divider>
            <Table columns={props.columns} dataSource={props.dataSource} />
            </Divider>    
        </Wrapper>

        </>
    )
}
