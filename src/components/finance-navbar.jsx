import React, { useEffect, useState} from 'react';
import {Container, Navbar, Nav, Button, Offcanvas, Image} from "react-bootstrap";
import {ASSETS_PAGE, COSTS_PAGE, GOALS_PAGE, HOME_PAGE, INCOMES_PAGE} from "../routes";
import {fetchPersonInfo} from "../api/http-utils/person";
import {useNavigate} from "react-router-dom";
import { useTranslation} from "react-i18next";

export const FinanceNavbar = ({locale, handleChange}) => {
  const [show, setShow] = useState(false);
  const [personInfo, setPersonInfo] = useState({});
  const navigate = useNavigate();
  const {t} = useTranslation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogOut = () => {
    localStorage.removeItem('accessToken')
    navigate('/');
  }

  const fetchAndSetPersonInfo = async () => {
    const data = await fetchPersonInfo();
    setPersonInfo(data);
  };

  useEffect(() => {
    fetchAndSetPersonInfo();
  }, []);

  return (
    <Navbar bg="primary" variant="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href={HOME_PAGE.path}>
          Financial Manager
          <Image src="/images/piggy-bank.png" width="50" fluid />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href={HOME_PAGE.path}>{t("header.home")}</Nav.Link>
          <Nav.Link href={INCOMES_PAGE.path}>{t("header.incomes")}</Nav.Link>
          <Nav.Link href={ASSETS_PAGE.path}>{t("header.assets")}</Nav.Link>
          <Nav.Link href={COSTS_PAGE.path}>{t("header.costs")}</Nav.Link>
          <Nav.Link href={GOALS_PAGE.path}>{t("header.goals")}</Nav.Link>
        </Nav>
        <>
          <Button variant="primary" onClick={handleShow} className="me-2">
            <Image src="/images/user.svg" width="30" fluid className="bg-white" roundedCircle />
          </Button>
          <Offcanvas show={show} onHide={handleClose} placement={"end"} name={"end"}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>User info</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>{personInfo.name}</div>
              <div>{personInfo.email}</div>
              <br/>
              <Button className="fs-6 align-middle" variant="danger" onClick={handleLogOut}>Log Out</Button>
              <Button className="fs-6 align-middle" variant="danger" onClick={() => console.log("mk")}>MK</Button>
              <Button className="fs-6 align-middle" variant="danger" onClick={() => console.log("en")}>EN</Button>
              <select value={locale} onChange={handleChange}>
                <option value="en">English</option>
                <option value="mk">Macedonian</option>
              </select>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </Container>
    </Navbar>
  );
};
