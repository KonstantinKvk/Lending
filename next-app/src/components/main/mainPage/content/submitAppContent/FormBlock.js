import React, { useEffect, useState } from "react"
import { Col, ButtonToolbar, Card } from "react-bootstrap"
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import ReactTypingEffect from 'react-typing-effect'
import { MuiTelInput } from 'mui-tel-input'
import { FormControlLabel, Checkbox, Button } from '@mui/material'
import { useRouter } from "next/router";


const axios = require("axios");

function FormBlock({ screenWidth }) {

    const router = useRouter();

    const [dataValue, setDataValue] = useState({
        name: '',
        phone: '',
        text: '',
        email: '',
        checkBox: false
    })

    const handleChangeCheckbox = (event) => {
        setDataValue({
            ...dataValue,
            checkBox: event.target.checked
        });
    };

    const handleChangePhoneNumber = (newValue) => {
        setDataValue({
            ...dataValue,
            phone: newValue
        })
    }

    const changeHandler = (event) => {
        let updField = {}
        updField[event.target.name] = event.target.value
        const test = { ...dataValue, ...updField }
        setDataValue(test)
    }

    const validate = () => {

        if (dataValue.name !== '' && dataValue.phone !== ''
            && dataValue.email !== '' && dataValue.checkBox !== false) {
            return false
        } else {
            return true
        }
    }
    const sand = async () => {
        const { data } = await axios.post("/api/feedback/set", dataValue, { withCredentials: false })
        // console.log("DATA!", data)
        setDataValue({
            ...dataValue,
            name: '',
            phone: '',
            text: '',
            checkBox: false,
            email: ""
        })
    }

    return (

        <div className={screenWidth > 780 ? "d-flex flex-column align-items-start" :
            "d-flex flex-column align-items-center"}>
            <Card
                className="showWordMainMenu"
                style={{
                    background: "linear-gradient(to bottom right, #ffffffe6, #dbdbdbf2 )",
                    width: screenWidth > 780 ? "28rem" : "23rem",
                    border: "1px solid #dddddd",
                    transform: "translate(-10px, -10px)",
                    transition: "all 1s ease",
                    borderRadius: "0px",
                    animationDelay: "0s",
                    animationDuration: "0.7s",
                    animationFillMode: "both",
                    opacity: "0"
                }}>
                <Card.Body>

                    <Card.Title
                        style={{
                            textAlign: "center",
                            color: "#ed6c02",
                            fontFamily: "Montserrat-SemiBold"
                        }}>
                        <ReactTypingEffect
                            cursor={' '}
                            text={['СВЯЗАТЬСЯ С НАМИ']}
                            typingDelay={500}
                            speed={50}
                            eraseDelay={999999999} />
                    </Card.Title>

                    <Box
                        component="form"
                        sx={screenWidth > 780 ? {
                            '& > :not(style)': { m: 1, width: '45ch' },
                        } : {
                            '& > :not(style)': { m: 1, width: '35ch' },
                        }}
                        noValidate
                        autoComplete="off">

                        <TextField id="filled-basic"
                            // error
                            // helperText="Incorrect entry."
                            label={
                                <ReactTypingEffect
                                    style={{
                                        fontFamily: "Montserrat-SemiBold",
                                        color: "black"
                                    }}
                                    cursor={' '}
                                    text={['Как к Вам обращаться?']}
                                    typingDelay={500}
                                    speed={50}
                                    eraseDelay={999999999} />
                            }
                            onChange={changeHandler}
                            value={dataValue.name}
                            name="name"
                            color="warning"
                            variant="standard" />
                        <MuiTelInput
                            // label={<ReactTypingEffect
                            //     style={{
                            //         fontFamily: "Montserrat-SemiBold",
                            //         color: "black",
                            //         fontSize: "23px"
                            //     }} cursor={' '}
                            //     text={['Номер телефона']}
                            //     typingDelay={500}
                            //     speed={50}
                            //     eraseDelay={999999999} />}
                            focusOnSelectCountry
                            defaultCountry="RU"
                            color="warning"
                            variant="standard"
                            onChange={handleChangePhoneNumber}
                            value={dataValue.phone}
                            name="phone" />
                        <TextField id="filled-basic" label={
                            <ReactTypingEffect
                                style={{
                                    fontFamily: "Montserrat-SemiBold",
                                    color: "black"
                                }} cursor={' '}
                                text={['Электронная почта']}
                                typingDelay={500}
                                speed={50}
                                eraseDelay={999999999} />
                        }
                            onChange={changeHandler}
                            value={dataValue.email}
                            name="email"
                            color="warning"
                            variant="standard" />

                        <TextField
                            id="outlined-multiline-static"
                            label={
                                <ReactTypingEffect
                                    style={{
                                        fontFamily: "Montserrat-SemiBold"
                                    }} cursor={' '}
                                    text={['Комментарий']}
                                    typingDelay={500}
                                    speed={50}
                                    eraseDelay={999999999} />}
                            multiline
                            color="warning"
                            onChange={changeHandler}
                            value={dataValue.text}
                            name="text"
                            rows={4}
                            defaultValue="" />

                        <FormControlLabel
                            style={{
                                fontFamily: "Montserrat-SemiBold",
                                color: "black"
                            }}
                            control={<Checkbox
                                checked={dataValue.checkBox}
                                onChange={handleChangeCheckbox}
                                name="checkBox"
                                color="warning"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }}
                                defaultChecked={false} />}
                            label={
                                <ReactTypingEffect
                                    style={{
                                        fontFamily: "Montserrat-SemiBold",
                                        fontSize: "12px"
                                    }}
                                    cursor={' '}
                                    text={['Согласие на обработку персональных данных']}
                                    typingDelay={500}
                                    speed={20}
                                    eraseDelay={999999999} />} />
                    </Box>

                    <ButtonToolbar className="ms-1">
                        <Button
                            disabled={validate()}
                            onClick={sand}
                            color="warning">Отправить</Button>
                    </ButtonToolbar>

                </Card.Body>
            </Card>
        </div>

    );
}
export { FormBlock };
