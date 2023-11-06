import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";

function DesignBlock({
    createSite,
    setCreateSite,
    mobDev,
    design,
    setDesign,
    marketing,
    screenWidth
}) {

    const [stateButtton, setStateButtton] = useState({
        accordion: false
    })

    const handleClickDesign = () => {
        setStateButtton({
            ...stateButtton,
            accordion: true
        })
        setDesign({
            ...design,
            accordionOpen: true
        })
        if (stateButtton.accordion) {
            setStateButtton({
                ...stateButtton,
                accordion: false
            })
            setDesign({
                ...design,
                accordionOpen: false
            })
        }
    }

    return (

        <div id="free"
            style={{
                // animationDelay: "0.9s",
                cursor: "pointer"
            }}
            className="w-100 blinkOption3"
            onMouseMove={() =>
                setDesign({
                    ...design,
                    bgBlackBox: true
                })}
            onMouseOut={() =>
                setDesign({
                    ...design,
                    bgBlackBox: false
                })
            }
            onClick={handleClickDesign}>
            <div
                className="pt-3 pb-3 ps-2"
                style={design.background} >
                <div className="d-flex align-items-center"
                    style={{
                        animation: design.bgBlackBox ?
                            "showTextService 1s ease-in-out 1" : "",
                    }}>
                    <img
                        style={{ width: "60px" }}
                        src={createSite.accordionOpen ||
                            mobDev.accordionOpen || marketing.accordionOpen ?
                            "icons8-ручка-100e0e0e0.png"
                            :
                            "icons8-ручка-100.png"
                        }
                    />
                    <div
                        className="ms-3"
                        style={{
                            cursor: "pointer",
                            fontSize: "35px",
                            fontFamily: "Montserrat-Light",
                            color: createSite.accordionOpen ||
                                mobDev.accordionOpen || marketing.accordionOpen ?
                                "#d3d3d3" : "white",
                            animation: stateButtton.accordion ? "scroll-from-left-click 0.3s ease-in-out 1" : ""
                        }}>
                        UX/UI дизайн
                    </div>
                </div>
            </div>
            {stateButtton.accordion ?
                <div
                    className="d-flex justify-content-start accordionBody ms-2">
                    <Toast
                        style={{
                            backgroundColor: "#f1f1f1bf",
                            borderRadius: "10px",
                            boxShadow: "0px 25px 20px rgba(0, 0, 0, 0.5)"
                        }}>
                        <Toast.Body>
                            <p style={{
                                color: "black",
                                marginLeft: "5px",
                                fontSize: "15px",
                                fontFamily: "Montserrat-Light"
                            }}>
                                <span style={{ fontWeight: "bold" }}>•</span> Создание сайта для компании<br />
                                <span style={{ fontWeight: "bold" }}>•</span> Разработка МФО<br />
                                <span style={{ fontWeight: "bold" }}>•</span> Создание интернет магазина<br />
                                <span style={{ fontWeight: "bold" }}>•</span> Разработка маркетплейсов
                            </p>
                        </Toast.Body>
                    </Toast>
                </div>
                : null}
        </div>
    );
}

export { DesignBlock };
