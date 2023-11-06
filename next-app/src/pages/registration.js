import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../lib/session";
import PhoneInput from 'react-phone-input-2'
import {
  Form,
  ButtonToolbar,
  Button,
  Alert,
  Row,
  Col,
  Card,
  Container,
} from "react-bootstrap";

const axios = require("axios");

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  if (req.session.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
},
  sessionOptions);

function RegPage() {

  const [validated, setValidated] = useState(false);
  const validation = (e) => e.target.value = input.replace(/[A-Za-z]/g, '');
  const [statusForm, setStatusForm] = useState(false);

  const [checkEmail, setCheckEmail] = useState({
    status: false,
    email: "",
  });
  const [checkPhone, setCheckPhone] = useState({
    status: false,
    phonework: "",
  });

  const [formValue, setFormValue] = useState({
    login: "",
    password: "",
    phone: null,
    phonework: null,
    // avatar: {
    //   src: "",
    //   width: "",
    //   height: "",
    // },
    settings: {
      toolbar: false,
      theme: ""
    },
    email: "",
    surname: "",
    name: "",
    middlename: "",
    personalData: false
  });

  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (formValue.email) {
      setCheckEmail(validateEmail(formValue.email));
    }
  }, [formValue.email]);

  useEffect(() => {
    if (formValue.phonework) {
      setCheckPhone(validatePhoneWork(formValue.phonework));
    }
  }, [formValue.phonework]);


  useEffect(() => {
    console.log("formValue", formValue)
  }, [formValue]);

  useEffect(() => {
    if (
      checkEmail.status === true &&
      checkPhone.status === true
    ) {
      console.log("Прошла проверка!");
      setStatusForm(true);
    } else {
      setStatusForm(false);
    }
  }, [checkEmail, checkPhone]);

  function validateEmail(emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return { status: true, email: emailAdress };
    } else {
      return { status: false, email: emailAdress };
    }
  }

  function validatePhoneWork(phone) {
    let PhoneCheck =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (phone.match(PhoneCheck)) {
      return { status: true, phonework: phone };
    } else {
      return { status: false, phonework: phone };
    }
  }

  const changeHandler = (event) => {
    let updField = {};
    updField[event.target.name] = event.target.value;
    const test = { ...formValue, ...updField };
    setFormValue(test);
  };

  const handlerPersonalData = (event) => {
    let tmp = { ...formValue }
    tmp.personalData = event.target.checked
    setFormValue(tmp)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      event.preventDefault();
      try {
        const { status } = await axios.post("/api/auth/register", formValue)
        // .then(function (response) {
        //   router.push("");
        // })
        switch (status) {
          case 201:
            router.push('/alert')
            break
          case 206:
            setErrorMsg("Пользователь с такой почтой уже существует!")
            break
        }
      } catch (error) {
        setErrorMsg("не известная ошибка, попробуйте позже");
      }


    }

    setValidated(true);
  };

  return (
    <Container fluid >
      <Row className="vh-100 d-flex align-items-center justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow">
            <Card.Header>
              <Card.Title className="text-monospace text-center mt-2">
                <span className="order-text">Регистрация</span>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group className="mb-2" as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control
                      required
                      onChange={changeHandler}
                      name="surname"
                      value={formValue.surname}
                      type="text"
                      placeholder="..."
                    />
                    <Form.Control.Feedback type="invalid">
                      Обязательное поле
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Заполнено</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-2" as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                      required
                      onChange={changeHandler}
                      name="name"
                      value={formValue.name}
                      type="text"
                      placeholder="..."
                    />
                    <Form.Control.Feedback type="invalid">
                      Обязательное поле
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Заполнено</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control
                      required
                      onChange={changeHandler}
                      name="middlename"
                      value={formValue.middlename}
                      type="text"
                      placeholder="..."
                    />
                    <Form.Control.Feedback type="invalid">
                      Обязательное поле
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Заполнено</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom06">
                    <Form.Label>Рабочая почта</Form.Label>
                    <Form.Control
                      onChange={changeHandler}
                      name="email"
                      type="text"
                      placeholder="@"
                      required />
                    <Form.Control.Feedback type="invalid">
                      Обязательное поле
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-2" >
                  <Form.Group as={Col} md="auto" controlId="validationCustom05">
                    <Form.Label>Рабочий телефон</Form.Label>
                    <PhoneInput
                      required
                      country={'ru'}
                      name="phonework"
                      value={formValue.phonework}
                      onChange={phonework => setFormValue({ ...formValue, phonework: phonework })}
                    />
                    <Form.Control.Feedback type="invalid">
                      Обязательное поле
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3 nav justify-content-center">
                  <Form.Check
                    required
                    onChange={handlerPersonalData}
                    checked={formValue.personalData}
                    label="Согласие на обработку персональных данных"
                    feedback=""
                    feedbackType="invalid"
                  />
                </Form.Group>

                <ButtonToolbar className="nav justify-content-center">
                  {statusForm ? (
                    <>
                      <Button
                        variant="outline-secondary "
                        className="mb-2 w-50"
                        type="submit"
                      // onClick={handleSubmitBtn}
                      >
                        Регистрация
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline-secondary "
                        className="mb-2 w-50"
                        type="submit"
                        // onClick={handleSubmitBtn}
                        disabled
                      >
                        Регистрация
                      </Button>
                    </>
                  )}
                </ButtonToolbar>
                {errorMsg ? <Alert key="danger" variant="danger">{errorMsg}</Alert> : ''}

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RegPage;
