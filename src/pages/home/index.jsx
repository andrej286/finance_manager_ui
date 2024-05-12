import React from 'react';
import { Link } from 'react-router-dom';
import { FinanceNavbar } from '../../components/finance-navbar';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import {CAPITAL_PAGE, EARNINGS_PAGE, INVEST_PAGE} from '../../routes';

const Home = () => {

  return (
    <>
      <FinanceNavbar />
      <Container className="mt-2">
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/images/money-income.jpg" />
              <Card.Body>
                <Card.Title>Earnings Calculator</Card.Title>
                <Card.Text style={{ height: '10rem' }}>
                  This is the earnings calculator
                </Card.Text>
                <Link to={EARNINGS_PAGE.path}>
                  <Button variant="primary">Go to Calculator</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/images/garage-door.jpg" />
              <Card.Body>
                <Card.Title>Capital Calculator</Card.Title>
                <Card.Text style={{ height: '10rem' }}>
                  Calculate the total capital that you will have from your assets for the next years
                </Card.Text>
                <Link to={CAPITAL_PAGE.path}>
                  <Button variant="primary">Go to Calculator</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/images/lying-arrow.jpg" />
              <Card.Body>
                <Card.Title>Invest Calculator</Card.Title>
                <Card.Text style={{ height: '10rem' }}>
                  Estimate the potential future value of your investments with our Investment Calculator! Visualize the growth of your investments with ease, exploring optimistic, realistic, and pessimistic scenarios tailored to your financial goals.</Card.Text>
                <Link to={INVEST_PAGE.path}>
                  <Button variant="primary">Go to Calculator</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
