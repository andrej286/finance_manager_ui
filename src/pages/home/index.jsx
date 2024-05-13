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
                  Comprehensive overview of your financial growth potential. Project your savings trajectory over the next 12 months by analyzing your incomes, your starting capital and accounting for interest rates.
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
                  Forecasts your future capital value. Designed to help you visualize the growth of your assets over time based on the acquisition date and the interest rates,.</Card.Text>
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
                  Estimate the potential future value of your investments. Visualize the growth of your investments with ease, exploring optimistic, realistic, and pessimistic scenarios tailored to your financial goals.</Card.Text>
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
