import React from 'react';
import {Container, Navbar, Nav, Badge} from "react-bootstrap";

export const FinanceNavbar = () => {
  console.log('placeholder');

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
      </Container>
    </Navbar>
  );
};
