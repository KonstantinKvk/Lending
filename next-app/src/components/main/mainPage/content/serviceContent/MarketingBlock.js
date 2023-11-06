import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";

function MarketingBlock({
    createSite,
    setCreateSite,
    mobDev,
    design,
    marketing,
    setMarketing,
    screenWidth
}) {

    const [stateButtton, setStateButtton] = useState({
        accordion: false
    })

    const handleClickMarketing = () => {
        setStateButtton({
            ...stateButtton,
            accordion: true
        })
        setMarketing({
            ...marketing,
            accordionOpen: true
        })
        if (stateButtton.accordion) {
            setStateButtton({
                ...stateButtton,
                accordion: false
            })
            setMarketing({
                ...marketing,
                accordionOpen: false
            })
        }
    }

    return (
        <div id="four"
            style={{
                cursor: "pointer"
            }}
            className="w-100 blinkOption4"
            onMouseMove={() => setMarketing({
                ...marketing,
                bgBlackBox: true
            })}
            onMouseOut={() =>
                setMarketing({
                    ...marketing,
                    bgBlackBox: false
                })
            }
            onClick={handleClickMarketing}>

            <div
                className="pt-3 pb-3 ps-2"
                style={marketing.background}>
                <div className="d-flex align-items-center"
                    style={{
                        animation: marketing.bgBlackBox ? "showTextService 1s ease-in-out 1" : "",
                    }}>
                    <img
                        style={{ width: "60px" }}
                        src={createSite.accordionOpen ||
                            mobDev.accordionOpen ||
                            design.accordionOpen ?
                            "icons8-маркетинг-96e0e0e0.png"
                            :
                            "icons8-маркетинг-96.png"}
                    />
                    <div
                        className="ms-3"
                        style={{
                            fontSize: "35px",
                            fontFamily: "Montserrat-Light",
                            color: createSite.accordionOpen ||
                                mobDev.accordionOpen ||
                                design.accordionOpen ?
                                "#d3d3d3" : "white",
                            animation: stateButtton.accordion ? "scroll-from-left-click 0.3s ease-in-out 1" : ""
                        }}>
                        Интернет-маркетинг
                    </div>
                </div>
            </div>
            {stateButtton.accordion ?
                <div
                    className="d-flex justify-content-start accordionBody mb-3 ms-2">
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

export { MarketingBlock };
