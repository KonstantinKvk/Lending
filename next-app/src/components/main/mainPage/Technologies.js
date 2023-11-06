import React, { useState, useEffect } from "react";
import { Col, Row, Offcanvas } from "react-bootstrap";
import { MainBlock } from "./content/tehnoContent/MainBlock";
import { FormBlock } from "./content/submitAppContent/FormBlock";

function Technologies({
    lending,
    showService,
    showTehno,
    setShowTehno,
    showProjects,
    showSubmitApp,
    showAboutUs,
    showTehnoFooter,
    setShowTehnoFooter,
    screenWidth
}) {

    const [stateOnOver, setStateOnOver] = useState(false);

    const commonStyles = {
        cursor: "pointer",
        fontSize: screenWidth < 980 ? "35px" : "90px",
        fontFamily: "Montserrat-SemiBold",
        transition: "all 0.3s ease",
        textDecoration: stateOnOver ? "underline" : "",
        display: "inline-block",
        transform: "translateX(0%)"
    };

    const link1Styles = {
        ...commonStyles,
        color: "#709ebe",
        animation: stateOnOver ? "showText 0.3s ease-in-out 1" : "",
    };

    const link2Styles = {
        ...commonStyles,
        color: showAboutUs.word ||
            showProjects.word ||
            showSubmitApp.word ||
            showService.word ? "gray" : "#2c2c2c",
        animation: "closeText 0.2s ease-in-out 1",
        opacity: stateOnOver ? "0" : "1",
        transform:
            screenWidth < 980 ? "translateX(0%)" :
                stateOnOver ? "translateX(-95%)" : "translateX(-100%)",
    };

    const handleWordOn = () => {
        setStateOnOver(true)
        setShowTehno({
            ...showTehno,
            word: true
        })
    };

    const handleWordOf = () => {
        setStateOnOver(false)
        setShowTehno({
            ...showTehno,
            word: false
        })
    };

    const handleLinkClick = () => {
        setShowTehnoFooter(true)
        setShowTehno({
            ...showTehno,
            word: false
        })
        if (showTehnoFooter) {
            setShowTehnoFooter(false)
        }
    };

    return (
        <div >
            <div
                style={{
                    whiteSpace: "nowrap",
                    animationDelay: "0.6s",
                    animationDuration: "1.5s",
                    animationFillMode: "both",
                    opacity: "0"
                }}
                className="font-main 
                        ms10
                        d-none d-lg-block
                        showWordMainMenu">
                {screenWidth > 980 &&
                    <a
                        style={link1Styles}>
                        Технологии
                    </a>
                }
                <a
                    style={link2Styles}
                    onMouseMove={showTehnoFooter ? undefined : handleWordOn}
                    onMouseOut={showTehnoFooter ? undefined : handleWordOf}
                    onClick={handleLinkClick}>
                    Технологии
                </a>
            </div>
        </div>

    );
}
export { Technologies };
