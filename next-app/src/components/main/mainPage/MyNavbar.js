import React, { useState, useEffect } from "react";
import { Nav, Navbar, ButtonToolbar, Button } from "react-bootstrap";
// import { ModalNav } from "./modals/ModalNav";
import ReactTypingEffect from 'react-typing-effect'

export default function MyNavbar({
  lending,
  showService,
  showTehno,
  showProjects,
  showAboutUs,
  showSubmitApp,
  showForm,
  screenWidth
}) {

  const [show, setShow] = useState(false);

  const logoStyle = {
    cursor: "pointer",
    width: screenWidth < 980 ? "70px" :
      show ? "100px" : "100px",
  };

  const logoFileName = showService.word ? "icon portfolioGray.png" :
    showTehno.word ? "icon portfolioGray.png" :
      showProjects.word ? "icon portfolioGray.png" :
        showSubmitApp.word ? "icon portfolioGray.png" :
          showAboutUs.word ? "icon portfolioGray.png" :
            show ? "icon portfolioTree.png" : "icon portfolioMain.png"

  const logoImg =
    <img
      style={logoStyle}
      onMouseOut={() => setShow(false)}
      onMouseMove={() => setShow(true)}
      className="logo-style animLogo"
      src={logoFileName}
    />

  return (

    <Navbar expand="lg" className="pe-2 ps-2 mb-5"
      style={{ "backgroundColor": "#0xffffff", "height": "15vh" }}
      id="info"
    >
      <Navbar.Brand href='/'
        className="ms5"
      >
        {logoImg}
      </Navbar.Brand>

      <Navbar.Collapse className="justify-content-end">

        {showForm &&
          <Nav>
            <a
              className="me-5" href={`tel: ${"+79025664103"}`}>
              <ReactTypingEffect
                style={{
                  fontFamily: "Montserrat-SemiBold",
                  fontSize: "17px",
                  color: "#ed6c02"
                }}
                cursor={' '}
                text={['+ 7 (902) 566 41 03']}
                typingDelay={1700}
                speed={50}
                eraseDelay={999999999} />
            </a>

          </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}