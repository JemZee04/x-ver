import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Form} from "react-bootstrap";
import OrderItem from "./OrderItem";

const OrderList = observer(() => {
    const {order} = useContext(Context)
    return (
        <Form className={"d-flex flex-wrap"}>
            {order.orders.map(order =>
                <OrderItem key={order.id} order={order}/>
            )}
        </Form>
    );
});

export default OrderList;