import React from "react"
import {Form, Inner, Outer, Personal} from "./style"
import {MainBackground, MainButton, MainDescription, MainTitle, Wrapper} from "../../styles/style"
import background from "../../assets/images/contact-back.jpg"

const Contact = props => {

    const onChangeName = e =>
        props.changeName(e.target.value)

    const onChangePhoneNumber = e =>
        props.changePhoneNumber(e.target.value)

    const onChangeEmail = e =>
        props.changeEmail(e.target.value)

    const addUserData = e => {
        e.preventDefault()
        props.addUser()
    }


    return (
        <Outer>
            <MainBackground gradientInversion>
                <img src={background} alt=""/>
            </MainBackground>
            <Wrapper>
                <Inner>
                    <MainTitle>{props.title}</MainTitle>
                    <MainDescription>{props.description}</MainDescription>
                    <Form>
                        <input value={props.userData.name}
                               type="text" placeholder="Ваше имя"
                               onChange={onChangeName}
                        />
                        <input value={props.userData.phoneNumber}
                               type="tel" placeholder="Телефон"
                               onChange={onChangePhoneNumber}
                        />
                        <input value={props.userData.email}
                               type="email" placeholder="E-mail"
                               onChange={onChangeEmail}
                        />
                        <MainButton onClick={addUserData}>
                            <span>Отправить</span>
                        </MainButton>
                    </Form>
                    <Personal>
                        Я даю своё <a href="/">согласие</a> на обработку моих персональных данных.
                    </Personal>
                </Inner>
            </Wrapper>
        </Outer>
    )

}

export default Contact