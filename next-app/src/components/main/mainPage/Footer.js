import React, { useState } from "react"
import { Row, Col, Button, Modal } from "react-bootstrap";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

function Footer({ lending }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row
                className="d-flex flex-column justify-content-center align-items-center mb-1"
                style={{
                    "backgroundColor": "#709ebe",
                    height: "35vh"
                }}>
                <Col xxl={4} xl={4} lg={12} md={12} xs={12}>
                    <div className="d-flex flex-column align-items-center">
                        <p id="about"
                            style={{
                                textAlign: "center",
                                fontSize: "25px",
                                fontFamily: "Montserrat-SemiBold",
                                color: "white"
                            }}>Espello</p>
                        <div
                            className="d-flex flex-column mt-3"
                            style={{
                                textAlign: "center",
                                fontSize: "15px",
                                fontFamily: "Montserrat-SemiBold",
                                color: "white"
                            }}>
                            <p className="mb-3"> Наша компания - команда веб-разработчиков,
                                которая специализируется на создании веб-приложений
                                для бизнеса и бизнес-сообществ.</p>
                            <p>Мы предлагаем индивидуальный подход к каждому клиенту
                                и создаем для них уникальные и адаптивные веб-приложения.
                                Мы заинтересованы в долгосрочных отношениях
                                с нашими клиентами и стремимся к их успеху.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{
                "backgroundColor": "white",
                height: "15vh"
            }}>
                <Col xxl={4} xl={4} lg={12} md={12} xs={12} className="d-flex flex-column justify-content-center align-items-center">

                    <div className="text-end" onClick={handleShow} style={{
                        "cursor": "pointer",
                        fontSize: "15px",
                        fontFamily: "Montserrat-SemiBold",
                        color: "black"
                    }}>
                        Политика <span style={{ color: "#709ebe" }}>Конфиденциальности</span>
                    </div>
                </Col>
                <Row>
                    <Col xxl={8} xl={8} lg={12} md={12} xs={12} className="d-flex flex-column justify-content-center align-items-center">
                        <div className="d-none d-md-block">
                            <div
                                className="d-flex align-items-start"
                                style={{
                                    fontSize: "15px",
                                    fontFamily: "Montserrat-SemiBold",
                                    color: "black"
                                }}>
                                <span>ПН-ПТ: работаем</span>
                                <span className="ms-3 me-3">СБ-ВС: думаем</span>
                                <span className="me-3">|</span>
                                <a href={`tel: ${"+79025664103"}`}>
                                    <span style={{ color: "black" }}>+ 7 (902) 566 41 03</span>
                                </a>
                                <span className="ms-3">|</span>
                                <a href={`mailto: ${"espello@mail.com"}`}>
                                    <span style={{ color: "black" }} className="ms-3">espello@mail.com</span>
                                </a>
                                <span className="ms-3">|</span>
                                <div style={{
                                    fontSize: "15px",
                                    fontFamily: "Montserrat-Light",
                                    color: "black"
                                }}>
                                    <span className="ms-3"><FaTelegramPlane /></span>
                                    <span className="ms-3"><FaWhatsapp /></span>
                                    {/* <span className="ms-3"
                                style={{
                                    textAlign: "center",
                                    fontSize: "15px",
                                    fontFamily: "Montserrat-SemiBold"
                                }}>Разработчики
                            </span> */}
                                </div>
                            </div>
                        </div>

                        <div className="d-md-none"
                            style={{ height: "15vh" }}>
                            <div
                                className="d-flex flex-column align-items-center"
                                style={{
                                    fontSize: "15px",
                                    fontFamily: "Montserrat-SemiBold",
                                    color: "black"
                                }}>
                                <span>ПН-ПТ: работаем</span>
                                <span>СБ-ВС: думаем</span>
                                <a href={`tel: ${"+79025664103"}`}>
                                    <span style={{ color: "black" }}>+ 7 (902) 566 41 03</span>
                                </a>
                                <a href={`mailto: ${"espello@mail.com"}`}>
                                    <span style={{ color: "black" }}>espello@mail.com</span>
                                </a>
                                <div style={{
                                    fontSize: "15px",
                                    fontFamily: "Montserrat-Light",
                                    color: "black"
                                }}>

                                    <span><FaTelegramPlane /></span>
                                    <span className="ms-3"><FaWhatsapp /></span>
                                    {/* <span className="ms-3"
                                style={{
                                    textAlign: "center",
                                    fontSize: "15px",
                                    fontFamily: "Montserrat-SemiBold"
                                }}>Разработчики
                            </span> */}
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Политика Конфиденциальности</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div dangerouslySetInnerHTML={{
                            __html: lending?.footer?.police
                        }}></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="" onClick={handleClose}>
                            Закрыть
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </>
    )
}
export { Footer };
