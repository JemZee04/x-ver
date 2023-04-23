import Admin from "./page/Admin";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, ORDER_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Main from "./page/Main";
import Auth from "./page/Auth";
import Login from "./page/Login"
import OrderPage from "./page/OrderPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ORDER_ROUTE + '/:id',
        Component: OrderPage
    },
]