import React, {useState} from 'react';
import {Container, Navbar, Nav, Button, Offcanvas} from "react-bootstrap";

export const FinanceNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="primary" variant="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home">Financial Manager</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/goals">Goals</Nav.Link>
          <Nav.Link href="/costs">Const</Nav.Link>
          <Nav.Link href="/incomes">Incomes</Nav.Link>
          <Nav.Link href="/assets">Assets</Nav.Link>
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
