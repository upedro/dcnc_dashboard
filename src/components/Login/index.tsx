import { Button, Col, Form, Input, message, Row } from "antd"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../auth/useAuth"



export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()


    
    useEffect(() => {
        if (auth.email) {
            console.log('Login auth effect',auth)
            navigate(-1)
        }
       
    }, [auth])
    

    async function onFinish(values:{email:string,password:string}) {
        try {
           await auth.login(values.email,values.password)
           console.log('aqui')
           navigate('/')        

           
        } catch (error) {
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
                        Entrar
                    </Button>
                </Form.Item>

            </Form>
        </Col>
        </Row>
        </>
    )

}