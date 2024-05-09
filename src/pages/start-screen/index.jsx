import React, { useEffect, useState } from 'react';
import { Image, Button } from 'react-bootstrap';
import { fetchAuthUrl } from '../../api/http-utils/auth';

const StartScreen = () => {
  const [authUrl, setAuthUrl] = useState();

  const fetchAndSetAuthUrl = async () => {
    const data = await fetchAuthUrl();
    setAuthUrl(data.authURL);
  };

  useEffect(() => {
    fetchAndSetAuthUrl();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-primary text-white p-3">
      <Image src="/images/piggy-bank.png" fluid />
      <h1 className="my-4">Welcome to the Financial Manager</h1>
      <p className="mb-5" style={{fontSize: '20px'}}>Manage your finances and track your expenses with ease</p>
      <a href={authUrl}>
        <Button className="bg-white text-dark d-inline-flex align-items-center">
          <Image src="/images/google.svg" width="20" fluid className="me-2" />
          Log in with Google
        </Button>
      </a>
    </div>
  );
};

export default StartScreen;
