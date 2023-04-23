import React from 'react';
import {Card, Col, Form, Image} from "react-bootstrap";
import './OrderItem.css'
import rectangle_1 from '../photo/Rectangle-green.svg';
import favorite from '../photo/favorite.svg';
import like from '../photo/All_goodr.svg';
import dude from '../photo/dude.svg';
import {useNavigate} from "react-router-dom";
import {ORDER_ROUTE} from "../utils/consts";

const OrderItem = ({order}) => {
    const navigate= useNavigate()
    return (
        <Col md={6} className={"d-flex mb-3"} onClick={() => navigate(ORDER_ROUTE + '/' + order.id)}>
            <Card className={"card"}>
                <Form className={'d-flex mt-3 mx-3'}>
                    <Image width={88} height={88} src={rectangle_1} className={"mt-3 mx-3"}/>
                    <Col>
                        <h2 className={'mt-3 text'}>Атис</h2>
                        <h2 className={'text'}>Собрать корпус</h2>
                    </Col>
                    <Image width={44} height={48} src={favorite} className={"mt-3 mx-3"}/>
                </Form>
                <Form className={'keys card-body'}>
                    <p className={'d-flex text_p'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                </Form>
                <Form className={'d-inline-flex footer'}>
                        <div className={"first"}>
                            <Image width={20} height={20} src={like} className={"icon"}/>
                            <span className={"text_span"}>Проект проверен</span>
                        </div>
                        <div className={'mx-3'}>
                            <span className={"text_span"}>Уже откликнулось: 110</span>
                            <Image width={20} height={20} src={dude} className={"icon"}/>
                        </div>
                </Form>
            </Card>
        </Col>
    );
};

export default OrderItem;