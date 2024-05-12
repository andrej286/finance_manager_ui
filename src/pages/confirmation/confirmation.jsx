import React, { useEffect } from 'react';
import {useLocation, useNavigate } from "react-router-dom";
import {fetchAccessToken} from "../../api/http-utils/auth";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    if (localStorage.getItem('accessToken')) {
      return;
    } else if (code) {
      fetchAccessToken(code).then((response) => {
        const token = response.token;
        localStorage.setItem('accessToken', token);
        navigate('/home');
      });
    }
  }, [location.search]);


  return (<div>TEST</div>);
}

export default Confirmation;