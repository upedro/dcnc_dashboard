import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Card as CardMobile, Toast, Button } from 'antd-mobile'
import React from 'react'
import {CardWrapper} from './style'


export default function CardStatistic(props:any) {
  const Tab = props => <div>{props.children}</div>
    return (
        <CardWrapper >
 
            <Card>
              <Statistic
                title={props.title}
                value={props.value}
                precision={props.precision}
                valueStyle={{ color: `${props.color}`}}
                prefix={<Tab>{props.icon}</Tab>}
                suffix={props.suffix}
              />
            </Card>
  
      </CardWrapper>
    )
}

