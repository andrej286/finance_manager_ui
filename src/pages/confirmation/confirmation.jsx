import React, { useEffect } from 'react';
import {useLocation, useNavigate } from "react-router-dom";
import {fetchAccessToken} from "../../api/http-utils/auth";
import {checkInPerson} from "../../api/http-utils/person";

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
      }).finally(async () => {
        await checkInPerson().then(response => console.log(response));
        navigate('/home');
      });
    }
  }, [location.search, navigate]);

  return (<div> </div>);
}

export default Confirmation;