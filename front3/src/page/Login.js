import React, {useState} from 'react';
import {Button, Container, Form, Image} from "react-bootstrap";
import './Login.css'
import photo from '../photo/login-photo.jpg'
import {login} from "../http/userAPI";

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const click = async () => {
        const response = await login(email,password);
        console.log(response)
    }

    return (
        <Container>
            <div className={'d-flex'}>
                <section className={''}>
                    <Image src={photo} className={'photo'}></Image>
                </section>
                <section className={'sect'}>
                    <h1 className={'title'}>Авторизация</h1>
                    <span className={'description'}>Добро пожаловать в нашу систему документооборота</span>
                    <Form className={'d-flex flex-column label'}>
                        <span>Email</span>
                        <Form.Control
                            className="mt-2"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <span>Пароль</span>
                        <Form.Control
                            className="mt-2"
                            value={password}
                            type = 'password'
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button className={"mt-3 align-self-start log"}
                            onClick={click}
                        >
                            Войти
                        </Button>
                    </Form>
                </section>
                
            </div>
        </Container>
    );
};

export default Login;