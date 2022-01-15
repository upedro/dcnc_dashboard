import { Row } from 'antd'
import React from 'react'
import CardStatistic from '../../components/Cards'

function Dados() {
    return (
        <div>
            <Row gutter={16}>        
                <CardStatistic
                span={24}
                title='Downloads de laudos realizados'
                value='700'
                suffix='Downloads'
                up={false}
                color='green'
                precision={0}
                />

                <CardStatistic
                span={24}
                title='Uploads de laudos realizados'
                value='564'
                suffix='Uploads'
                up={true}
                color='blue'
                precision={0}
                />
            </Row>
        </div>
    )
}

export default Dados
