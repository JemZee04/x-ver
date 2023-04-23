import {makeAutoObservable} from "mobx";

export default class OrderStore{
    constructor() {
        this._orders = [
            {id:1, title: 'Заказ', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', price: 100, deadLine: 'Месяц', docs: 'doc_1, doc_2, doc_3' },
            {id:2, title: 'Заказ', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', price: 100, deadLine: 'Месяц', docs: 'doc_1, doc_2, doc_3' },
            {id:3, title: 'Заказ', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', price: 100, deadLine: 'Месяц', docs: 'doc_1, doc_2, doc_3' },
            {id:4, title: 'Заказ', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', price: 100, deadLine: 'Месяц', docs: 'doc_1, doc_2, doc_3' },
            {id:5, title: 'Заказ', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', price: 100, deadLine: 'Месяц', docs: 'doc_1, doc_2, doc_3' },
            {id:6, title: 'Заказ', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', price: 100, deadLine: 'Месяц', docs: 'doc_1, doc_2, doc_3' },
            {id:7, title: 'Заказ', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', price: 100, deadLine: 'Месяц', docs: 'doc_1, doc_2, doc_3' },
            {id:8, title: 'Заказ', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', price: 100, deadLine: 'Месяц', docs: 'doc_1, doc_2, doc_3' },
            {id:9, title: 'Заказ', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', price: 100, deadLine: 'Месяц', docs: 'doc_1, doc_2, doc_3' },

        ]
        makeAutoObservable(this)
    }

    setOrders(orders){
        this._orders = orders
    }

    get orders() {
        return this._orders
    }

}