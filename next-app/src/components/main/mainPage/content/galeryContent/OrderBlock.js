import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from 'vanilla-tilt';

function OrderBlock() {
    const [isTilted, setIsTilted] = useState(false);
    const [tiltAngle, setTiltAngle] = useState(10);
    const tiltRef = useRef(null);

    const handleTilt = () => {
        setIsTilted(!isTilted);
        setTiltAngle(isTilted ? 10 : 10);
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
            data-tilt data-tilt-axis="x"
            onMouseEnter={handleTilt}
            onMouseLeave={handleTilt}
            style={{
                cursor: "pointer",
                position: "relative",
                height: "400px",
                width: "300px",
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)",
                background: "linear-gradient(to bottom right, rgb(17 76 136 / 95%), rgb(17 76 136 / 90%), #0d3660), url('bgOrder.png')",
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
            ref={tiltRef}>
            <h5 style={{ fontSize: "30px" }}>ORDER</h5>
            {isTilted &&
                <div
                    className="blinkCardGallery"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        height: "375px",
                        width: "275px",
                        transform: "translate(-50%, -50%) translateZ(60px)",
                        backgroundColor: "rgba(255, 255, 255, 0.55)",
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
                        Интеграция с 1C <br />
                    </p>
                </div>
            }
        </div>
    );
}

export { OrderBlock };
