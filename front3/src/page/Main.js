import React, {useEffect} from 'react';
import './Main.css'
import {Col, Container, Form} from "react-bootstrap";
import OrderList from "../components/OrderList";
import {getUsers} from "../http/userAPI";

const Main = () => {
    useEffect(() => {
        getUsers().then(data => console.log(data))
    })
    return (
        <Container className={'ral'}>
            <div className={'banner'}>
                <Col>
                    <h2 className={'title'}>Тех поддержка</h2>
                    <p className={'description'}>Если Заказчик или Подрядчик столкнулся с трудностями в использований нашей web платформы, наша тех поддержка поможет вам</p>
                </Col>
                <button className={'banner-btn'}>
                    <div className={'btn-text'}>Перейти в чат</div>
                </button>
            </div>
            <Form className={"mt-2 cards"}>
                <Col className={"mt-4"} md={12}>
                    <div className={'h1'}>Актуальные заказы</div>
                    <OrderList/>
                </Col>
            </Form>
        </Container>
    );
};

export default Main;