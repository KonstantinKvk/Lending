import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { MainBlock } from "./content/projectsContent/MainBlock";

function Projects({
    lending,
    showService,
    showTehno,
    showProjects,
    setShowProjects,
    showSubmitApp,
    showAboutUs,
    screenWidth
}) {

    const commonStyles = {
        cursor: "pointer",
        fontSize: screenWidth < 980 ? "35px" : "90px",
        fontFamily: "Montserrat-SemiBold",
        transition: "all 0.3s ease",
        textDecoration: showProjects.word ? "underline" : "",
        display: "inline-block",
        transform: "translateX(0%)",
    };

    const link1Styles = {
        ...commonStyles,
        color: "#1d538d",
        animation: showProjects.word ? "showText 0.3s ease-in-out 1" : "",
    };

    const link2Styles = {
        ...commonStyles,
        color: showTehno.word ||
            showAboutUs.word ||
            showSubmitApp.word ||
            showService.word ? "gray" : "#2c2c2c",
        animation: "closeText 0.2s ease-in-out 1",
        opacity: showProjects.word ? "0" : "1",
        transform: screenWidth < 980 ? "translateX(0%)" :
            showProjects.word ? "translateX(-95%)" : "translateX(-100%)",
    };

    const handleLinkClick = () => {
        setShowProjects({
            ...showProjects,
            open: true
        })
        if (showProjects.open) {
            setShowProjects({
                ...showProjects,
                open: false
            })
        }
    };

    useEffect(() => {
        if (showTehno.open ||
            showAboutUs.open ||
            showService.open ||
            showSubmitApp.open) {
            setShowProjects({
                ...showProjects,
                open: false,
                word: false
            })
        }
    }, [showTehno.open,
    showAboutUs.open,
    showService.open,
    showSubmitApp.open]);

    return (
        <div>
            <div
                style={{
                    whiteSpace: "nowrap",
                    animationDelay: "0.5s",
                    animationDuration: "1.6s",
                    animationFillMode: "both",
                    opacity: "0"
                }}
                className="font-main 
                        ms10
                        showWordMainMenu">
                <div>
                    {screenWidth > 980 &&
                        <a
                            style={link1Styles}>
                            Проекты
                        </a>
                    }
                    <a href={screenWidth < 980 ? "#projects" : null}
                        style={link2Styles}
                        onMouseMove={screenWidth < 980 ? undefined : () => setShowProjects({
                            ...showProjects,
                            word: true
                        })}
                        onMouseOut={showProjects.open ? undefined : () => setShowProjects({
                            ...showProjects,
                            word: false
                        })}
                        onClick={screenWidth < 980 ? undefined : handleLinkClick}>
                        Проекты
                    </a>
                </div>
            </div>
            <MainBlock showProjects={showProjects} />
        </div>

    );
}
export { Projects };
