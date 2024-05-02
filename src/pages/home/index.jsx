import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchAccessToken } from '../../api/http-utils/auth';
import { FinanceNavbar } from '../../components/finance-navbar';
import { Col, Container, Image, Row } from 'react-bootstrap';
import {EARNINGS_PAGE} from "../../routes";

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
      <Container>
        <Row>
          <Col>
            <Link to="/earnings">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZcHmTY10XPtpnvNjLC089VLGo5lU6WlMBg&s"
                rounded
              />
              This is the earnings calculator
            </Link>
          </Col>
          <Col>
            <Link to={EARNINGS_PAGE.path}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZcHmTY10XPtpnvNjLC089VLGo5lU6WlMBg&s"
                rounded
              />
            </Link>
            This can be the capital calculator(calculates the assets of a given year, accumulating)
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/page3">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZcHmTY10XPtpnvNjLC089VLGo5lU6WlMBg&s"
                rounded
              />
            </Link>
            This can be the invest calculator, similar to the earning calculator, bit will be given some ivnesting options and you cal calculate the capital you will have if you invest this much now in this fund or option
          </Col>
          <Col>
            <Link to="/page4">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZcHmTY10XPtpnvNjLC089VLGo5lU6WlMBg&s"
                rounded
              />
            </Link>
            TODO
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;