import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from 'vanilla-tilt';

function NocodeContent() {
    const [isTilted, setIsTilted] = useState(false);
    const [tiltAngle, setTiltAngle] = useState(15);
    const tiltRef = useRef(null);

    const handleTilt = () => {
        setIsTilted(!isTilted);
        setTiltAngle(isTilted ? 15 : 10);
    }

    useEffect(() => {
        VanillaTilt.init(tiltRef.current, {
            max: tiltAngle,
            speed: 300,
            glare: true,
            reverse: true,
            "max-glare": 0.5
        });
    }, [tiltAngle]); // dependency of effect hook

    return (
        <div
            onMouseEnter={handleTilt}
            onMouseLeave={handleTilt}
            style={{
                position: "relative",
                height: "400px",
                width: "300px",
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)",
                background: "linear-gradient(to bottom right, white, black, purple)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat-SemiBold",
                transformStyle: "preserve-3d",
                transform: "perspective(1000px)"
            }}
            ref={tiltRef}
        >
            <h5 style={{ fontSize: "30px" }}>NOCODE</h5>
            {isTilted &&
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        height: "375px",
                        width: "275px",
                        transform: "translate(-50%, -50%) translateZ(60px)",
                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                        padding: "20px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <p style={{
                        color: "black",
                        fontSize: "15px",
                        fontFamily: "Montserrat-Light",
                        margin: "0",
                        textAlign: "center",
                        marginTop: "auto",
                        marginBottom: "0"
                    }}>
                        <span style={{
                            color: "red",
                            fontFamily: "Montserrat-SemiBold"
                        }}>ТЕХНОЛОГИИ
                        </span>
                        <br />
                        NextJS <br />
                        MongoDB <br />
                        NodeJS <br />
                        React <br />
                    </p>
                </div>
            }
        </div>
    );
}

export { NocodeContent };
