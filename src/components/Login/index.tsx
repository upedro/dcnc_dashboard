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
        style={{
            height: '100vh'
        }}
        >
    
    

        <Col
         span={12}
        >
            <Form
                name='basic'
                labelCol={{span:8}}
                wrapperCol={{span:16}}
                onFinish={onFinish}
            >
                <Form.Item
                label='Email'
                name='email'
                >
                    <Input/>

                </Form.Item>

                <Form.Item
                label='Password'
                name='password'
                >
                    <Input.Password/>

                </Form.Item>

                <Form.Item wrapperCol={{offset:8, span:16}}> 
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </Col>
        </Row>
        </>
    )

}