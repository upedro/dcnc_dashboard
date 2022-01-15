import { Button, Col, Form, Input, message, Row } from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../auth/useAuth"
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';





export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)


    
    useEffect(() => {
        if (auth.email) {
            console.log('Login auth effect',auth)
            navigate(-1)
        }
       
    }, [auth])
    
    const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />

    async function onFinish(values:{email:string,password:string}) {
        setloading(!loading)
        try {
           await auth.login(values.email,values.password)
           setloading(!loading)
           console.log('aqui')
           navigate('/')        

           
        } catch (error) {
            setloading(!loading)
            console.log(error)
            message.error('Invalid email or passoword')
        }
    }

    return (
        <>
        <Row
        justify="center"
        align="middle"

        >
    
        <Col
         span={24}
        >
            <Form
                name='basic'
                labelCol={{span:24}}
                wrapperCol={{span:24}}
                onFinish={onFinish}
            >
                <Form.Item
                label='Email'
                name='email'
                >
                    <Input/>

                </Form.Item>

                <Form.Item
                label='Senha'
                name='password'
                >
                    <Input.Password/>

                </Form.Item>

                <Form.Item  wrapperCol={{span:24 , flex:'auto'}}> 
                    <Button block type="primary" danger htmlType="submit">
                        Entrar {loading ? <Spin tip size="small" indicator={antIcon} /> : ''}
                    </Button>
                    
                </Form.Item>

            </Form>
        </Col>
        </Row>
        </>
    )

}