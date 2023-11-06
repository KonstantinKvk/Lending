import React, { useState } from "react";
import {
    Form, ButtonToolbar,
    Button, Row, Col, Card, Container, Alert
} from "react-bootstrap"
import Link from 'next/link';
import axios from "axios"
import { useRouter } from 'next/router'
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../lib/session";

export const getServerSideProps = withIronSessionSsr(async function ({
    req,
    res
}) {
    if (req.session.user) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }

    return {
        props: {}
    }
},
    sessionOptions)

const Login = () => {

    const router = useRouter()

    const [formValue, setFormValue] = useState({
        login: null,
        password: null
    });

    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(event) {
        event.preventDefault()

        const data = {
            login: event.target.login.value,
            password: event.target.password.value
        }

        try {
            const { status } = await axios.post('/api/auth/login', data, { withCredentials: true })
            console.log(data, status)

            switch (status) {
                case 200:
                    router.push('/admin')
                    break
                case 205:
                    setErrorMsg("Ваша учетная запись не активна! Обратитесь к системному администратору")
                    break
                case 204:
                    setErrorMsg("не верный логин/пароль")
                    break
                case 233:
                    setErrorMsg("не активен, обратитесь к администатору")
                    break
                default:
                    setErrorMsg("не известная ошибка, попробуйте позже")
                    break

            }
        } catch (error) {
            setErrorMsg("не известная ошибка, попробуйте позже");
        }
    }

    const changeHandler = (event) => {
        let updField = {}
        updField[event.target.name] = event.target.value
        const test = { ...formValue, ...updField }
        setFormValue(test)
    }

    return (
        <Container fluid>
            <Row className="vh-100 d-flex align-items-center justify-content-center">
                <Col md={6} lg={4}>
                    <Card className='shadow'>
                        <Card.Header>
                            <Card.Title className='text-monospace text-center mt-2'><span className='order-text'>tendercenter</span></Card.Title>
                        </Card.Header>
                        <Card.Body >
                            <Form className="text-center ps-2 pe-2" onSubmit={handleSubmit}>
                                <Row>
                                    <Col md>
                                        <Form.Group className="mb-2">
                                            <Form.Label> email</Form.Label>
                                            <Form.Control
                                                onChange={changeHandler}
                                                name="login" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Пароль</Form.Label>
                                            <Form.Control
                                                type="password"
                                                onChange={changeHandler}
                                                name="password" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row >
                                    <ButtonToolbar className="nav justify-content-center">
                                        <Button variant="outline-secondary "
                                            className="mb-2 w-50"
                                            type="submit">
                                            Войти
                                        </Button>
                                    </ButtonToolbar>
                                </Row>
                            </Form >
                        </Card.Body>
                        <Card.Footer>
                            {errorMsg ? <Alert key="danger" variant="danger">{errorMsg}</Alert> : ''}
                            {/* <Link href="/registration" passHref>
                                <a className="nav justify-content-center">регистрация</a>
                            </Link> */}
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login