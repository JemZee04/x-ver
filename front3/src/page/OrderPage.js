import React, {useContext, useState} from 'react';
import './OrderPage.css'
import {Container} from "react-bootstrap";
import OrderItem from "../components/OrderItem";

const OrderPage = () => {
    const [order,setOrder] = useState()
    return (
        <section className={'main'}>
            <OrderItem key={order.id} order = {order}/>
        </section>
    );
};

export default OrderPage;