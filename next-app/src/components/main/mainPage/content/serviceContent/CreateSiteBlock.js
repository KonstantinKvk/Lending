import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";


function CreateSiteBlock({
    createSite,
    setCreateSite,
    design,
    mobDev,
    marketing,
    screenWidth
}) {

    const [stateButtton, setStateButtton] = useState({
        accordion: false,
        // stateMouseOver: false
    })

    const handleClickCreate = () => {
        setStateButtton({
            ...stateButtton,
            accordion: true
        })
        setCreateSite({
            ...createSite,
            accordionOpen: true
        })
        if (stateButtton.accordion) {
            setStateButtton({
                ...stateButtton,
                accordion: false
            })
            setCreateSite({
                ...createSite,
                accordionOpen: false
            })
        }
    }

    return (

        <div id="one"
            style={{
                cursor: "pointer",
            }}
            className="w-100 blinkOption"
            onMouseMove={() => setCreateSite({
                ...createSite,
                bgBlackBox: true
            })}
            onMouseOut={() => setCreateSite({
                ...createSite,
                bgBlackBox: false
            })
            }
            onClick={handleClickCreate}>
            <div
                className="pt-3 pb-3 ps-2"
                style={createSite.background}>
                <div
                    className="d-flex align-items-center"
                    style={{
                        animation: createSite.bgBlackBox ?
                            "showTextService 1s ease-in-out 1"
                            : ""
                    }}
                >
                    <img
                        style={{ width: "60px" }}
                        src={mobDev.accordionOpen
                            || design.accordionOpen || marketing.accordionOpen ?
                            "icons8-сайт-100e0e0e0.png"
                            :
                            "icons8-сайт-100.png"
                        } />
                    <div className="ms-3 me-4"
                        style={{
                            fontSize: "35px",
                            fontFamily: "Montserrat-Light",
                            color: mobDev.accordionOpen
                                || design.accordionOpen || marketing.accordionOpen ?
                                "#d3d3d3" : "white",
                            animation: stateButtton.accordion ? "scroll-from-left-click 0.3s ease-in-out 1" : ""

                        }}>
                        <p
                        // className="showServises"
                        >Создание сайтов</p>
                    </div>
                </div>
            </div>
            {
                stateButtton.accordion ? (
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
                ) : null
            }
        </div >
    );
}

export { CreateSiteBlock };
