import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import Button from "../../components/Button";
import Col from "../../components/Col";
import CenteredPanel from '../../components/CenteredPanel';
import Input from "../../components/Input";
import Row from "../../components/Row";
import { firebaseErrorUserMssg } from '../../utils/utils';

function AuthPage(props) {
  let navigate = useNavigate();
  const [error, setError] = useState(null);

  function handleAuthSubmit(e) {
    e.preventDefault();
    const authentication = getAuth();
    let email = e.target.email.value;
    let password = e.target.password.value;

    if(props.action === "register"){
      createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        sessionStorage.setItem('uid', response._tokenResponse.localId);
        navigate('/notes');
      })
      .catch(function (error) {
        // handle error
        console.log('[ERROR] On Firebase create user...', error);
        setError(firebaseErrorUserMssg(error));
      });
    }else{
      signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        sessionStorage.setItem('uid', response._tokenResponse.localId);
        navigate('/notes');
      })
      .catch(function (error) {
        // handle error
        console.log('[ERROR] On Firebase login user...', error);
        setError(firebaseErrorUserMssg(error));
      });
    }
  }

  const RenderError = () => {
    return(
      <Row style={{position: "relative"}}>
        <Col md={2} lg={2} xl={4}/>
        <Col md={8} lg={8} xl={4} centerX>
          <p style={{color: "red"}}>{error}</p>
        </Col>
      </Row>
    );
  }

  const RenderAuthOptionsBtn= () => {
    if(props.action === 'register'){
      return(
        <Button onClick={() => navigate(`/login`)}>Already have an account? Log in!</Button>
      );
    }else{
      return(
        <Button onClick={() => navigate(`/register`)}>Do not have an account? Register! For free...</Button>
      );
    }
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');
    if(authToken)
      navigate(`/`);
  }, []);

  return (
    <section className="login-page">
      <CenteredPanel backgroundColor="rgb(var(--dark-purple))">
        <Row>
          <Col md={12} lg={12} centerX><h1 style={{color:"rgb(var(--discreet-white))"}}>{props.action === 'register' ? "Register" : "Login"} </h1></Col>
        </Row>
        <Row>
          <Col md={12} lg={12} centerX><h4 style={{color:"rgb(var(--discreet-white))", margin: 0}}>Please, enter your credentials: </h4></Col>
        </Row>
        <form onSubmit={handleAuthSubmit}>
          <Row>
            <Col md={3} lg={3} xl={4}/>
            <Col md={6} lg={6} xl={4} centerX>
              <Input label="Email" name="email" type="email" required/>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3} xl={4}/>
            <Col md={6} lg={6} xl={4} centerX>
              <Input dark label="Password" name="password" type="password" required/>
            </Col>
          </Row>
          <Row style={{position: "relative"}}>
            <Col md={12} lg={12} centerX>
              <Button style={{backgroundColor:"rgb(var(--wine))"}} type="submit">Submit</Button>
            </Col>
          </Row>
          {error &&
            <RenderError />
          }
        </form>
        <Row>
          <Col md={12} lg={12} centerX>
            <RenderAuthOptionsBtn />
          </Col>
        </Row>
      </CenteredPanel>
    </section>
  );
}

export default AuthPage;