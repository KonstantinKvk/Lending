import React, { useEffect, useState } from "react";
import { Col, Row, Offcanvas } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import ReactTypingEffect from 'react-typing-effect'

function MainBlock({ showTehno }) {

    return (
        <Row>
            <Col xxl={12} xl={12}>
                <div
                    className="mt-3"
                    style={{
                        cursor: "wait",
                        overflow: "hidden",
                        fontSize: "35px",
                        fontFamily: "Montserrat-SemiBold",
                        color: "#709ebe",
                        borderRadius: "10px",
                        animation: "showText 0.3s ease-in-out 1"
                    }}>
                    <Marquee
                        text="Ваш текст здесь"
                        direction="left"
                        gradient={true}
                        speed={55}
                        pauseOnHover={true}>
                        <p style={{ marginRight: "100px" }}>GitLab</p>
                        <p style={{ marginRight: "100px" }}>JavaScript</p>
                        <p style={{ marginRight: "100px" }}>Next.js</p>
                        <p style={{ marginRight: "100px" }}>Node.js</p>
                        <p style={{ marginRight: "100px" }}>Mongoose</p>
                        <p style={{ marginRight: "100px" }}>React</p>
                        <p style={{ marginRight: "100px" }}>Bootstrap</p>
                        <p style={{ marginRight: "100px" }}>PostgreSQL</p>
                        <p style={{ marginRight: "100px" }}>MySQL</p>
                        <p style={{ marginRight: "100px" }}>Unity</p>
                        <p style={{ marginRight: "100px" }}>OpenStreetMap</p>
                        <p style={{ marginRight: "100px" }}>Kotlin</p>
                        <p style={{ marginRight: "100px" }}>Openlayers</p>
                        <p style={{ marginRight: "100px" }}>IOS</p>
                        <p style={{ marginRight: "100px" }}>Android</p>
                        <p style={{ marginRight: "100px" }}>C Sharp</p>
                        <p style={{ marginRight: "100px" }}>Swift</p>
                        <p style={{ marginRight: "100px" }}>Google APIs</p>
                        <p style={{ marginRight: "100px" }}>Git</p>
                        <p style={{ marginRight: "100px" }}>PHP</p>
                        <p style={{ marginRight: "100px" }}>RabbitMQ</p>

                    </Marquee>
                </div>

            </Col>
        </Row>
    );
}

export { MainBlock };
