import React, {useEffect, useState} from 'react';
import {Container, Navbar, Nav, Button, Offcanvas, Image} from "react-bootstrap";
import {ASSETS_PAGE, COSTS_PAGE, GOALS_PAGE, HOME_PAGE, INCOMES_PAGE} from "../routes";
import {fetchPersonInfo} from "../api/http-utils/person";
import {useNavigate} from "react-router-dom";

export const FinanceNavbar = () => {
  const [show, setShow] = useState(false);
  const [personInfo, setPersonInfo] = useState({});
  const navigate = useNavigate();

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
          <Nav.Link href={HOME_PAGE.path}>Home</Nav.Link>
          <Nav.Link href={INCOMES_PAGE.path}>Incomes</Nav.Link>
          <Nav.Link href={ASSETS_PAGE.path}>Assets</Nav.Link>
          <Nav.Link href={COSTS_PAGE.path}>Const</Nav.Link>
          <Nav.Link href={GOALS_PAGE.path}>Goals</Nav.Link>
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
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </Container>
    </Navbar>
  );
};
