import React, { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ServiceModal() {

    return (

        <div className="d-flex flex-column align-items-center showWordMainMenu"
            style={{
                transform: "translate(-10px, -10px)",
                transition: "all 1s ease",
                borderRadius: "0px",
                animationDelay: "0s",
                animationDuration: "0.7s",
                animationFillMode: "both",
                opacity: "0",
            }}>
            <Accordion className=""
            >
                <AccordionSummary
                    style={{
                        background: "linear-gradient(to bottom right, rgba(66, 213, 253, 0.95), rgba(19, 70, 84, 0.90))",

                    }}
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        <div
                            className="d-flex align-items-center"
                        >
                            <img
                                style={{ width: "45px" }}
                                src={
                                    "icons8-сайт-100.png"
                                } />
                            <div className="ms-3 me-4"
                                style={{
                                    fontSize: "25px",
                                    fontFamily: "Montserrat-Light",
                                    color: "white",
                                }}>
                                <p
                                // className="showServises"
                                >Создание сайтов</p>
                            </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    style={{
                        background: "linear-gradient(to bottom right, rgba(66, 213, 253, 0.95), rgba(19, 70, 84, 0.90))",
                    }}>
                    <Typography>
                        <div
                            className="d-flex align-items-center"
                        >
                            <img
                                style={{ width: "45px" }}
                                src={
                                    "icons8-смартфон-100.png"
                                } />
                            <div className="ms-3 me-4"
                                style={{
                                    fontSize: "25px",
                                    fontFamily: "Montserrat-Light",
                                    color: "white",
                                }}>
                                <p
                                // className="showServises"
                                >Мобильная разработка</p>
                            </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    style={{
                        background: "linear-gradient(to bottom right, rgba(66, 213, 253, 0.95), rgba(19, 70, 84, 0.90))",
                    }}>
                    <Typography>
                        <div
                            className="d-flex align-items-center"
                        >
                            <img
                                style={{ width: "45px" }}
                                src={
                                    "icons8-ручка-100.png"
                                } />
                            <div className="ms-3 me-4"
                                style={{
                                    fontSize: "25px",
                                    fontFamily: "Montserrat-Light",
                                    color: "white",
                                }}>
                                <p
                                // className="showServises"
                                >UX/UI дизайн</p>
                            </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                    style={{
                        background: "linear-gradient(to bottom right, rgba(66, 213, 253, 0.95), rgba(19, 70, 84, 0.90))",
                    }} >
                    <Typography>
                        <div
                            className="d-flex align-items-center"
                        >
                            <img
                                style={{ width: "45px" }}
                                src={
                                    "icons8-маркетинг-96.png"
                                } />
                            <div className="ms-3 me-4"
                                style={{
                                    fontSize: "25px",
                                    fontFamily: "Montserrat-Light",
                                    color: "white",
                                }}>
                                <p
                                // className="showServises"
                                >Интернет-маркетинг</p>
                            </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export { ServiceModal };
