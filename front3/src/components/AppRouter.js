import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import auth from "../page/Auth";
import {authRoutes, publicRoutes} from "../routes";
import {MAIN_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const isAuth = true;
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth === true && authRoutes.map(({path, Component}) =>
                 <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={MAIN_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;