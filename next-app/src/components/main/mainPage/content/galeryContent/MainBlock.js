import React, { useEffect, useState } from "react";
import { Col, Row, Offcanvas } from "react-bootstrap";
import { AccountingBlock } from "./AccountingBlock";
import { BoardsBlock } from "./BoardsBlock";
import { OrderBlock } from "./OrderBlock";
import { PropertiesBlock } from "./PropertiesBlock";
import { KadryEstBlock } from "./KadryEstBlock";
import { NocodeContent } from "./NocodeContent";

function MainBlock() {

    return (
        <div id="projects"
            style={{
                backgroundColor: "white",
                animation: "showBg 2.1s ease-in-out 1",
                overflow: "hidden"
            }}>
            <Row className="pt-2
            d-flex justify-content-center align-items-center">
                <Col xxl={3} xl={3} lg={12} md={12} xs={12}
                    className="d-flex justify-content-center align-items-center mb-3">
                    <PropertiesBlock />
                </Col>

                <Col xxl={3} xl={3} lg={12} md={12} xs={12}
                    className="d-flex justify-content-center align-items-center mb-3">
                    <BoardsBlock />
                </Col>

                <Col xxl={3} xl={3} lg={12} md={12} xs={12}
                    className="d-flex justify-content-center align-items-center mb-3">
                    <OrderBlock />
                </Col>

                <Col xxl={3} xl={3} lg={12} md={12} xs={12} 
                className="d-flex justify-content-center align-items-center">
                    <KadryEstBlock />
                </Col>



            </Row >

            {/* <Row className="">
            <Col xxl={3} xl={3}
                    className="d-flex justify-content-center align-items-center mt-5">
                    <AccountingBlock />
                </Col>


                <Col xxl={3} xl={3} className="d-flex justify-content-center align-items-center mt-5">
                    <NocodeContent />
                </Col>

            </Row > */}
        </div>
    );
}

export { MainBlock };
