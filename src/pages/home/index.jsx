import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import {CAPITAL_PAGE, EARNINGS_PAGE, INVEST_PAGE} from '../../routes';
import {useTranslation} from "react-i18next";

const Home = () => {
  const {t} = useTranslation();

  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/images/money-income.jpg" />
              <Card.Body>
                <Card.Title>{t("calculator.earnings.title")}</Card.Title>
                <Card.Text style={{ height: '13rem' }}>
                  {t("calculator.earnings.description")}
                </Card.Text>
                <Link to={EARNINGS_PAGE.path}>
                  <Button variant="primary">{t("calculator.button")}</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/images/garage-door.jpg" />
              <Card.Body>
                <Card.Title>{t("calculator.capital.title")}</Card.Title>
                <Card.Text style={{ height: '13rem' }}>
                  {t("calculator.capital.description")}
                </Card.Text>
                <Link to={CAPITAL_PAGE.path}>
                  <Button variant="primary">{t("calculator.button")}</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/images/lying-arrow.jpg" />
              <Card.Body>
                <Card.Title>{t("calculator.invest.title")}</Card.Title>
                <Card.Text style={{ height: '13rem' }}>
                  {t("calculator.invest.description")}
                </Card.Text>
                <Link to={INVEST_PAGE.path}>
                  <Button variant="primary">{t("calculator.button")}</Button>
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
