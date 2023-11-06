import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import { AboutUs } from "./AboutUs";
import { Technologies } from "./Technologies";
import { Projects } from "./Projects";
// import axios from 'axios'
import { Service } from "./Service";
import { Galery } from "./Galery";
import { SubmitApp } from "./SubmitApp";
import { FormBlock } from "./content/submitAppContent/FormBlock";
import GLOBE from 'vanta/dist/vanta.globe.min'
import { MainBlock } from "./content/tehnoContent/MainBlock";
import { Footer } from "./Footer";
import { BiCaretUpCircle } from 'react-icons/bi'
import { ServiceModal } from "./content/serviceContent/ServiceModal";

function MainPage({ lending }) {

  const [showForm, setShowForm] = useState(false);
  const [showTehnoFooter, setShowTehnoFooter] = useState(false)
  const [showMobailService, setShowMobailService] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [screenWidth, setScreenWidth] = useState(undefined)
  const [showService, setShowService] = useState({
    open: false,
    word: false
  });
  const [showTehno, setShowTehno] = useState({
    // open: false,
    word: false
  });
  const [showProjects, setShowProjects] = useState({
    open: false,
    word: false
  });
  const [showAboutUs, setShowAboutUs] = useState({
    open: false,
    word: false
  });
  const [showSubmitApp, setShowSubmitApp] = useState({
    open: false,
    word: false
  });
  const [vantaEffect, setVantaEffect] = useState(false)
  const vantaRef = useRef(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.screen.availWidth)
    }
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x616161,
        color2: 0x709ebe,
        size: 1,
        backgroundColor: 0xfafafa
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }

  }, [vantaEffect])

  useEffect(() => {

    const handleScroll = () => {
      if (window.pageYOffset > 650) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('fixed-button');
      if (button) {
        if (window.pageYOffset > button.offsetTop) {
          button.classList.add('fixed');
        } else {
          button.classList.remove('fixed');
        }
      }
    }
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <div style={{
        height: "100vh",
        animation: "showText 2.5s ease-in-out 1"
      }} ref={vantaRef}>
        <MyNavbar
          lending={lending}
          screenWidth={screenWidth}
          showForm={showForm}
          showTehnoFooter={showTehnoFooter}
          showService={showService}
          showTehno={showTehno}
          showProjects={showProjects}
          showSubmitApp={showSubmitApp}
          showAboutUs={showAboutUs} />
        <Row className="mb-5">
          <Col xxl={6} xl={6} lg={6}>
            <Service
              showForm={showForm}
              setShowForm={setShowForm}
              showMobailService={showMobailService}
              setShowMobailService={setShowMobailService}
              screenWidth={screenWidth}
              showService={showService}
              setShowService={setShowService}
              showTehno={showTehno}
              showProjects={showProjects}
              showSubmitApp={showSubmitApp}
              showAboutUs={showAboutUs} />
            <Projects
              screenWidth={screenWidth}
              lending={lending}
              showService={showService}
              showTehno={showTehno}
              showProjects={showProjects}
              setShowProjects={setShowProjects}
              showSubmitApp={showSubmitApp}
              showAboutUs={showAboutUs} />
            <Technologies
              screenWidth={screenWidth}
              lending={lending}
              showTehnoFooter={showTehnoFooter}
              setShowTehnoFooter={setShowTehnoFooter}
              showForm={showForm}
              showService={showService}
              showTehno={showTehno}
              setShowTehno={setShowTehno}
              showProjects={showProjects}
              showSubmitApp={showSubmitApp}
              showAboutUs={showAboutUs} />
            <SubmitApp
              screenWidth={screenWidth}
              showService={showService}
              showMobailService={showMobailService}
              setShowMobailService={setShowMobailService}
              showForm={showForm}
              setShowForm={setShowForm}
              showTehno={showTehno}
              showProjects={showProjects}
              setShowSubmitApp={setShowSubmitApp}
              showSubmitApp={showSubmitApp}
              showAboutUs={showAboutUs}
            />
            <AboutUs
              screenWidth={screenWidth}
              lending={lending}
              showService={showService}
              setShowAboutUs={setShowAboutUs}
              showTehno={showTehno}
              showProjects={showProjects}
              showSubmitApp={showSubmitApp}
              showAboutUs={showAboutUs} />
          </Col>
          {showForm &&
            <Col xxl={6} xl={6} lg={6}>
              <FormBlock screenWidth={screenWidth}
              />
            </Col>
          }
          {showMobailService &&
            <Col xxl={6} xl={6} lg={6}>
              <ServiceModal
                screenWidth={screenWidth}
                showService={showService} />
            </Col>
          }

          {showTehnoFooter &&
            <Col xxl={12} xl={12} lg={12}>
              {/*  блок технологий строка */}
              <MainBlock />
            </Col>
          }

        </Row>
        <div className="text-end fixed">
          {showButton && (
            <Button
              id="fixed-button"
              variant="outline-light"
              className="btn-nvg font-tender-second"
              href="#info">
              <BiCaretUpCircle className="icon-up-style" />
            </Button>
          )}
        </div>
      </div >
      <div className="ms-5 mt-3"
        style={{
          fontSize: "15px",
          fontFamily: "Montserrat-SemiBold",
          color: "black"
        }}
      >Галерея
      </div>

      <Row className="pt-5">

        <Col xxl={12} xl={12} lg={12}>
          <Galery />
        </Col>3
        <Col xxl={12} xl={12} lg={12}>
          <Footer />
        </Col>
      </Row>
    </>
  );
}
export { MainPage };