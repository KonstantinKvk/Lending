import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { MainBlock } from "./content/serviceContent/MainBlock";

function Service({
    lending,
    showService,
    setShowService,
    showTehno,
    showProjects,
    showSubmitApp,
    showAboutUs,
    screenWidth,
    showMobailService,
    setShowMobailService,
    showForm,
    setShowForm
}) {

    const commonStyles = {
        cursor: "pointer",
        fontSize: screenWidth < 980 ? "35px" : "90px",
        fontFamily: "Montserrat-SemiBold",
        transition: "all 0.3s ease",
        textDecoration: showService.word ? "underline" : "",
        display: "inline-block",
        transform: "translateX(0%)"
    };

    const link1Styles = {
        ...commonStyles,
        color: "rgba(66, 213, 253, 1)",
        animation: showService.word ? "showText 0.3s ease-in-out 1" : ""
    };

    const link2Styles = {
        ...commonStyles,
        color:
            showTehno.word ||
                showProjects.word ||
                showSubmitApp.word ||
                showAboutUs.word ? "gray" : "#2c2c2c",
        animation: "closeText 0.2s ease-in-out 1",
        opacity: showService.word ? "0" : "1",
        transform: screenWidth < 980 ? "translateX(0%)" :
            showService.word ? "translateX(-95%)" : "translateX(-100%)"
    };

    const handleClick = () => {
        setShowService({
            ...showService,
            open: true
        })
        if (showService.open) {
            setShowService({
                ...showService,
                open: false
            })
        }
    };

    const handleClickMobail = () => {
        setShowMobailService(true)
        setShowForm(false)
        if (showMobailService) {
            setShowMobailService(false)
        }
    };

    useEffect(() => {
        if (showTehno.open ||
            showProjects.open ||
            showSubmitApp.open ||
            showAboutUs.open) {
            setShowService({
                ...showService,
                open: false,
                word: false
            })
        }
    }, [showTehno.open,
    showProjects.open,
    showSubmitApp.open,
    showAboutUs.open]);

    return (
        <div>
            <div
                style={{
                    whiteSpace: "nowrap",
                    animationDelay: "0.3s",
                    animationDuration: "1.8s",
                    animationFillMode: "both",
                    opacity: "0"
                }}
                className="font-main
            ms10
            showWordMainMenu">
                {screenWidth > 980 &&
                    <a
                        style={link1Styles}>
                        Услуги
                    </a>
                }
                <a
                    style={link2Styles}
                    onMouseMove={screenWidth < 980 ? undefined : () => setShowService({
                        ...showService,
                        word: true
                    })}
                    onMouseOut={showService.open ? undefined : () => setShowService({
                        ...showService,
                        word: false
                    })}
                    onClick={screenWidth < 980 ? handleClickMobail : handleClick}>
                    Услуги
                </a>
            </div>
            <MainBlock showService={showService} />
        </div >
    );
}
export { Service };
