import React, { useEffect, useState } from "react";
import { Col, Row, Offcanvas, Carousel } from "react-bootstrap";
import { Page1Block } from "./Page1Block";
import { Page2Block } from "./Page2Block";

function MainBlock({ showProjects }) {

    return (
        <Offcanvas
            backdrop={false} 
            placement="end"
            show={showProjects.open}
            style={{
                overflow: "hidden",
                background: "linear-gradient(to bottom right, #142334fa, #002c70f2)",
                border: "0px",
                // animation: "showBg 0.3s ease-in-out 1"
            }}
            className="d-none d-lg-block h-100">

            <Row className="h-100">
                <Col xxl={12} xl={12}>
                    <Carousel
                        slide={true}
                        controls={false}
                        className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <Carousel.Item
                            interval={90000}>
                            <Page1Block />
                        </Carousel.Item>
                        <Carousel.Item
                            interval={90000}>
                            <Page2Block />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            
        </Offcanvas >
    );
}

export { MainBlock };
