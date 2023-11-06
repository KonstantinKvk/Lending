import React, { useState, useEffect } from "react";
import { Col, Nav } from "react-bootstrap";

function AboutUs({
    lending,
    showService,
    showAboutUs,
    setShowAboutUs,
    showTehno,
    showProjects,
    showSubmitApp,
    screenWidth
}) {
 
    const commonStyles = {
        cursor: "pointer",
        fontSize: screenWidth < 980 ? "35px" : "90px",
        fontFamily: "Montserrat-SemiBold",
        transition: "all 0.3s ease",
        textDecoration: showAboutUs.word ? "underline" : "",
        display: "inline-block",
        transform: "translateX(0%)",
    };

    const link1Styles = {
        ...commonStyles,
        color: "#1a1a1a",
        animation: showAboutUs.word ? "showText 0.3s ease-in-out 1" : "",
    };

    const link2Styles = {
        ...commonStyles,
        color: showTehno.word ||
            showProjects.word ||
            showSubmitApp.word ||
            showService.word ? "gray" : "#2c2c2c",
        animation: "closeText 0.2s ease-in-out 1",
        opacity: showAboutUs.word ? "0" : "1",
        transform: screenWidth < 980 ? "translateX(0%)" :
            showAboutUs.word ? "translateX(-92%)" : "translateX(-100%)",
    };

    const handleLinkClick = () => {
        setShowAboutUs({
            ...showAboutUs,
            open: true
        })
        if (showAboutUs.open) {
            setShowAboutUs({
                ...showAboutUs,
                open: false
            })
        }
    };

    useEffect(() => {
        if (showTehno.open ||
            showProjects.open ||
            showSubmitApp.open ||
            showService.open) {
            setShowAboutUs({
                ...showAboutUs,
                open: false,
                word: false
            })
        }
    }, [showTehno.open,
    showProjects.open,
    showSubmitApp.open,
    showService.open]);

    return (
        <div>
            <div
                style={{
                    whiteSpace: "nowrap",
                    animationDelay: "0.8s",
                    animationDuration: "1.3s",
                    animationFillMode: "both",
                    opacity: "0"
                }}
                className="font-main 
                        ms10
                        showWordMainMenu">
                {screenWidth > 980 &&
                    <a
                        style={link1Styles}>
                        О нас
                    </a>
                }
                <a href="#about"
                    style={link2Styles}
                    onMouseMove={() => setShowAboutUs({
                        ...showAboutUs,
                        word: true
                    })}
                    onMouseOut={() => setShowAboutUs({
                        ...showAboutUs,
                        word: false
                    })}
                    onClick={handleLinkClick}>
                    О нас
                </a>
            </div>
        </div>

    );
}
export { AboutUs };
