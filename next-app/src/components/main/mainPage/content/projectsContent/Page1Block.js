import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import VanillaTilt from 'vanilla-tilt';

function Page1Block() {

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
                <div className="d-flex flex-column align-items-center showWordProject">
                    <p
                        style={{
                            fontSize: "30px",
                            fontFamily: "Montserrat-Light",
                            color: "white",
                            textAlign: "center"
                        }}>PROPERTIES</p>

                    <p
                        style={{
                            fontSize: "15px",
                            fontFamily: "Montserrat-Light",
                            color: "white",
                            textAlign: "center"
                        }}>
                        Информационная платформа прямых данных о
                        строительных компаниях и их объектах,<br /> обеспечивает
                        прямое взаимодействие между застройщиком и агентом
                        в любой стране.</p>
                </div>
            </Col>
            <Col xxl={6} xl={6} className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center animProjectImage pt-5">
                    <img
                        ref={tiltRef}
                        style={{
                            cursor: "grab",
                            width: "400px",
                            boxShadow: "10px 25px 30px rgba(0, 0, 0, 0.5)"
                        }}
                        src="iberRest.png"
                    />
                </div>
            </Col>
            <Col xxl={6} xl={6} className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center animLogo pb-5">
                    <img
                        ref={tiltRef2}
                        style={{
                            cursor: "grab",
                            width: "400px",
                            boxShadow: "10px 20px 30px rgba(0, 0, 0, 0.5)"

                        }}
                        src="Kadryest.png"
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
                        }}>NOCODE</p>

                    <p
                        style={{
                            fontSize: "15px",
                            fontFamily: "Montserrat-Light",
                            color: "white",
                            textAlign: "center"
                        }}>Приложение создано для кадровой компании.
                        Является конструктором сайтов, на котором собран,
                        и опубликован сайт Кадры Есть. </p>
                </div>
            </Col>
        </Row>

    );
}

export { Page1Block };
