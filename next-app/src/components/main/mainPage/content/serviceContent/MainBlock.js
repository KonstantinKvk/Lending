import React, { useEffect, useState } from "react";
import { Col, Row, Offcanvas } from "react-bootstrap";
import { MarketingBlock } from "./MarketingBlock";
import { DesignBlock } from "./DesignBlock";
import { MobDevBlock } from "./MobDevBlock";
import { CreateSiteBlock } from "./CreateSiteBlock";

function MainBlock({ showService }) {

    const [createSite, setCreateSite] = useState({
        accordionOpen: false,
        bgBlackBox: false,
        background: {
            backgroundColor: "transparent",
            transition: "background-color 0.2s ease",
            borderRadius: "10px",
            borderRadius: "10px"
        }
    });

    const [mobDev, setMobDev] = useState({
        accordionOpen: false,
        bgBlackBox: false,
        background: {
            backgroundColor: "transparent",
            transition: "background-color 0.2s ease",
            borderRadius: "10px"
        }
    });

    const [design, setDesign] = useState({
        accordionOpen: false,
        bgBlackBox: false,
        background: {
            backgroundColor: "transparent",
            transition: "background-color 0.2s ease",
            borderRadius: "10px"
        }
    });

    const [marketing, setMarketing] = useState({
        accordionOpen: false,
        bgBlackBox: false,
        background: {
            backgroundColor: "transparent",
            transition: "background-color 0.2s ease",
            borderRadius: "10px"
        }
    });

    return (
        <Offcanvas
            backdrop={false}
            placement="end"
            show={showService.open}
            style={{
                overflow: "hidden",
                background: "linear-gradient(to bottom right, rgba(66, 213, 253, 0.95), rgba(19, 70, 84, 0.90))",
                border: "0px",
                // animation: "showBg 0.3s ease-in-out 1"
            }}
            className="d-none d-lg-block h-100"
        >
            <Row className="h-100">
                <Col xxl={12} xl={12} className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-column align-items-start ps-4">
                        {/* BLOCK CREATE */}
                        <CreateSiteBlock
                            createSite={createSite}
                            setCreateSite={setCreateSite}
                            mobDev={mobDev}
                            design={design}
                            marketing={marketing} />
                        {/* BLOCK MOBDEV */}
                        <MobDevBlock
                            createSite={createSite}
                            setCreateSite={setCreateSite}
                            mobDev={mobDev}
                            setMobDev={setMobDev}
                            design={design}
                            marketing={marketing} />

                        {/* BLOCK DESIGN */}
                        <DesignBlock
                            createSite={createSite}
                            setCreateSite={setCreateSite}
                            mobDev={mobDev}
                            design={design}
                            setDesign={setDesign}
                            marketing={marketing} />

                        {/* BLOCK MARKETING */}
                        <MarketingBlock
                            createSite={createSite}
                            setCreateSite={setCreateSite}
                            mobDev={mobDev}
                            design={design}
                            marketing={marketing}
                            setMarketing={setMarketing} />

                    </div>
                </Col>
            </Row>
        </Offcanvas>
    );
}

export { MainBlock };
