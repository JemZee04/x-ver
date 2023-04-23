import React, {useState} from 'react';
import {Container, Form} from "react-bootstrap";
import './Auth.css'
import Data from "bootstrap/js/src/dom/data";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/consts";
import {login} from "../http/userAPI";

const Auth = () => {
    const [step,setStep] = useState(1);
    const [temp,setTemp] = useState(false);
    const [value, setValue] = useState("Далее");
    const navigate = useNavigate();
    function auth(value){
        console.log(value)
        console.log(step)
        if (step === 4) value = 'Регистрация'
        if (value === 'Регистрация')
            navigate(MAIN_ROUTE)
        else
            setStep(step + 1)
    }
    return (
        <Container>
            <Form className={'d-flex'}>
                <section className="beatiful">
                    <div className="logo">
                    </div>
                </section>
                <section className="authorization">
                    <h1>Регистрация</h1>
                    <span>Добро пожаловать в нашу систему документооборота</span>
                    {step ===1 &&
                    <div className="buttons-auth">
                        <button className="auth-button">Заказчик</button>
                        <button className="auth-button">Производитель</button>
                    </div>
                    }
                    <div className="inputs-auth">
                        {step === 1 &&
                        <div>
                            <div className={'row'}>
                                <label className={'col'} htmlFor="user-secondname">
                                    Фамилия
                                    <br/>
                                    <input type="text" id="user-secondname"/>
                                </label>
                                <label className={'col'} htmlFor="username">
                                    Имя
                                    <br/>
                                    <input type="text" id="username"/>
                                </label>
                            </div>
                            <div className="row">
                                <label className={'col'} htmlFor="patronymic">
                                    Отчество
                                    <br/>
                                    <input className={'big-input'} type="text" id="patronymic"/>
                                </label>
                            </div>
                            <label className={'check'} htmlFor="none-patronymic">
                                Нет отчества?
                                <input className={'mx-3 checkbox'} type="checkbox" name="" id="none-patronymic"/>
                            </label>
                        </div>
                        }
                    </div>

                    <div className="inputs-auth">
                        {step === 2 &&
                            <div>
                                <div className={'row'}>
                                    <label className={''} htmlFor="nationality">
                                        Гражданство
                                        <br/>
                                        <select className={'form-select'} name="nationality" id="nationality">
                                            <option value="enot">Енот</option>
                                            <option value="no enot">Не енот :(</option>
                                        </select>
                                    </label>
                                    <label className={''} htmlFor="face">
                                        Лицо
                                        <br/>
                                        <select className={'form-select'} name="face" id="face">
                                            <option value="fiz" onClick={()=>setTemp(false)}>Физ. лицо </option>
                                            <option value="ur" onClick={()=>setTemp(true)}>Юр. лицо</option>
                                        </select>
                                    </label>
                                    {temp === true &&
                                    <label className={'col'} htmlFor="company">
                                        <input type="text" id={"company"}/>
                                    </label>
                                    }

                                </div>
                            </div>
                        }
                        {step === 3 &&
                            <div>
                                <div className={'row'}>
                                    <label className={''} htmlFor="speciality">
                                        Сфера деятельности
                                        <br/>
                                        <select className={'form-select'} name="speciality" id="speciality">
                                            <option value="genius">Гений</option>
                                            <option value="filantrop">Филантроп</option>
                                            <option value="basket of money">Миллионер</option>
                                        </select>
                                    </label>
                                    <label className={''} htmlFor="rezume">
                                        Резюме
                                        <br/>
                                        <input type={'file'} className={'form-floating'} name="rezume" id="rezume"/>
                                    </label>
                                </div>
                            </div>

                        }
                        {step === 4 &&
                            <div>
                                <div className={'row'}>
                                    <label className={''} htmlFor="email">
                                        Email
                                        <br/>
                                        <input type={'textarea'} className={'form-control'} id={'email'}/>
                                    </label>
                                    <label className={''} htmlFor="password">
                                        Пароль
                                        <br/>
                                        <input type={'password'} className={'form-control'} id={'password'}/>
                                    </label>
                                    <label className={''} htmlFor="photo">
                                        Загрузите фотографию
                                        <br/>
                                        <input type={'file'} className={'form-floating'} id={'file'}/>
                                    </label>
                                </div>
                            </div>
                        }
                    </div>



                    <button type={"button"} className="registration-btn" onClick={()=>auth(value)} >
                        Далее
                    </button>
                </section>
            </Form>
        </Container>
    );
};

export default Auth;