
import React from "react";
import { useRouter } from 'next/router'

import { Button, Col, Container, Row } from "react-bootstrap";

export default function FourOhFour() {

    const page = "404"
    const router = useRouter()

    return <>
    notfound
        {/* <Container className="w-100">
            <Row>
                <Col>
                    404 - страница не существует!
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-secondary" onClick={() => { router.push("/") }}>
                        Назад
                    </Button>
                </Col>
            </Row>
        </Container> */}

    </>
}
