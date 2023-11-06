import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { MainBlock } from "./content/submitAppContent/FormBlock";

function SubmitApp({
    lending,
    setShowSubmitApp,
    showSubmitApp,
    showService,
    showTehno,
    showProjects,
    showAboutUs,
    showForm,
    setShowForm,
    screenWidth,
    showMobailService,
    setShowMobailService
}) {

    const commonStyles = {
        cursor: "pointer",
        fontSize: screenWidth < 980 ? "35px" : "90px",
        fontFamily: "Montserrat-SemiBold",
        transition: "all 0.3s ease",
        textDecoration: showSubmitApp.word ? "underline" : "",
        display: "inline-block",
        transform: "translateX(0%)"
    };

    const link1Styles = {
        ...commonStyles,
        color: "#f7913e",
        animation: showSubmitApp.word ? "showText 0.3s ease-in-out 1" : ""
    };

    const link2Styles = {
        ...commonStyles,
        color: showTehno.word ||
            showProjects.word ||
            showService.word ||
            showAboutUs.word ? "gray" : "#2c2c2c",
        animation: "closeText 0.2s ease-in-out 1",
        opacity: showSubmitApp.word ? "0" : "1",
        transform: screenWidth < 980 ? "translateX(0%)" :
            showSubmitApp.word ? "translateX(-95%)" : "translateX(-100%)"
    };

    const handleClick = () => {
        setShowMobailService(false)
        setShowSubmitApp({
            ...showSubmitApp,
            open: true
        })
        if (showSubmitApp.open) {
            setShowSubmitApp({
                ...showSubmitApp,
                open: false
            })
        }
        setShowForm(true)
        if (showForm == true) {
            setShowForm(false);
        }
        // Удаляем обработчик onMouseOver
    };

    useEffect(() => {
        if (showTehno.open ||
            showProjects.open ||
            showService.open ||
            showAboutUs.open) {
            setShowForm(false)
            setShowSubmitApp(false)
        }
    }, [showTehno.open,
    showProjects.open,
    showService.open,
    showAboutUs.open]);

    return (
        <div>
            <div
                style={{
                    whiteSpace: "nowrap",
                    animationDelay: "0.7s",
                    animationDuration: "1.4s",
                    animationFillMode: "both",
                    opacity: "0"
                }}
                className="font-main 
                        ms10
                        showWordMainMenu">
                {screenWidth > 980 &&
                    <a
                        style={link1Styles}>
                        Заявка
                    </a>
                }
                <a
                    style={link2Styles}
                    onMouseMove={() => setShowSubmitApp({
                        ...showSubmitApp,
                        word: true
                    })}
                    onMouseOut={showForm ? undefined : () => setShowSubmitApp({
                        ...showSubmitApp,
                        word: false
                    })}
                    onClick={handleClick}>
                    Заявка
                </a>
            </div>
        </div>

    );
}
export { SubmitApp };
