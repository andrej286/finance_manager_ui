import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchAccessToken } from '../../api/http-utils/auth';
import { FinanceNavbar } from '../../components/finance-navbar';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import {CAPITAL_PAGE, EARNINGS_PAGE, INVEST_PAGE} from '../../routes';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    if (localStorage.getItem('accessToken')) {
      return;
    } else if (code) {
      fetchAccessToken(code).then((response) => {
        const token = response.token;
        localStorage.setItem('accessToken', token);
      });
    }
  }, [location.search]);

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
                  This can be the invest calculator, similar to the earning calculator, but will be given some investing options and you can calculate the capital you will have if you invest this much now in this fund or option
                </Card.Text>
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
