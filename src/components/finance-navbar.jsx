import React, {useState} from 'react';
import {Container, Navbar, Nav, Button, Offcanvas, Image} from "react-bootstrap";
import {ASSETS_PAGE, COSTS_PAGE, GOALS_PAGE, HOME_PAGE, INCOMES_PAGE} from "../routes";

export const FinanceNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="primary" variant="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href={HOME_PAGE.path}>
          Financial Manager
          <Image src="/images/piggy-bank.png" width="50" fluid />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href={HOME_PAGE.path}>Home</Nav.Link>
          <Nav.Link href={GOALS_PAGE.path}>Goals</Nav.Link>
          <Nav.Link href={COSTS_PAGE.path}>Const</Nav.Link>
          <Nav.Link href={INCOMES_PAGE.path}>Incomes</Nav.Link>
          <Nav.Link href={ASSETS_PAGE.path}>Assets</Nav.Link>
        </Nav>
        <>
          <Button variant="primary" onClick={handleShow} className="me-2">
            User icon here
          </Button>
          <Offcanvas show={show} onHide={handleClose} placement={"end"} name={"end"}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>User info here</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Additional user info here(monthly earnings, current asset value ...)
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </Container>
    </Navbar>
  );
};
