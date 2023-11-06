import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import VanillaTilt from 'vanilla-tilt';

function Page2Block() {

    const tiltRef = useRef(null);
    const tiltRef2 = useRef(null);

    const tiltOptions = {
        max: 10,
        reverse: true,
        perspective: 800,
        speed: 300,
        reset: false,
        glare: true,
        "max-glare": 0.5
    };

    useEffect(() => {
        VanillaTilt.init(tiltRef.current, tiltOptions);
        VanillaTilt.init(tiltRef2.current, tiltOptions);
    }, []);

    return (

        <Row className="h-100">
            <Col xxl={6} xl={6} className="d-flex flex-column justify-content-center align-items-center">
                <div
                    className="d-flex flex-column align-items-center animLogo pt-5">
                   <img
                        ref={tiltRef}
                        style={{
                            cursor: "grab",
                            width: "400px",
                            boxShadow: "10px 20px 30px rgba(0, 0, 0, 0.5)"

                        }}
                        src="order-project.png"
                    />
                </div>
            </Col>
            <Col xxl={6} xl={6} className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center showWordProject">
                    <p
                        style={{
                            fontSize: "30px",
                            fontFamily: "Montserrat-Light",
                            color: "white",
                            textAlign: "center"
                        }}>AUTOORDER</p>

                    <p
                        style={{
                            fontSize: "15px",
                            fontFamily: "Montserrat-Light",
                            color: "white",
                            textAlign: "center"
                        }}>Информационная платформа, предназначенная,<br />
                        для автотранспортных компаний..<br />
                        Позволяет организовать связь между заказчиками услуг,<br />
                        менеджментом и конечными исполнителями.</p>
                </div>
            </Col>
            <Col xxl={6} xl={6} className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center showWordProject">
                    <p
                        style={{
                            fontSize: "30px",
                            fontFamily: "Montserrat-Light",
                            color: "white",
                            textAlign: "center"
                        }}>BOARDS</p>

                    <p
                        style={{
                            fontSize: "15px",
                            fontFamily: "Montserrat-Light",
                            color: "white",
                            textAlign: "center"
                        }}>Современный планировщик задач, для<br />
                        эффективного использования времени на<br />
                        постановкук задач и отслеживания их<br />
                        исполнения.</p>
                </div>
            </Col>
            <Col xxl={6} xl={6} className="d-flex flex-column justify-content-center align-items-center">
                <div
                    className="d-flex flex-column align-items-center animProjectImage pb-5">
                  <img
                        ref={tiltRef2}
                        style={{
                            cursor: "grab",
                            width: "400px",
                            boxShadow: "10px 20px 30px rgba(0, 0, 0, 0.5)"

                        }}
                        src="boards.png"
                    />
                </div>
            </Col>
        </Row>
    );
}

export { Page2Block };
