  import React, { useState } from 'react';
  import clsx from 'clsx';
  import Link from '@docusaurus/Link';
  import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
  import Layout from '@theme/Layout';
  import HomepageFeatures from '@site/src/components/HomepageFeatures';
  import "./styles.css"
  import styles from './index.module.css';

  const Index = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
  
      try {
        const response = await axios.post('/api/v1/login/', {
          email,
          password,
        });
  
        // Aquí puedes manejar la respuesta exitosa y redirigir al usuario a la página correspondiente
  
        console.log('Login exitoso');
        console.log('Respuesta:', response.data);
      } catch (error) {
        // Aquí manejas los errores de inicio de sesión
        setError('Credenciales inválidas');
        console.error('Error de inicio de sesión:', error.response.data);
      }
  
      setLoading(false);
      setEmail('');
      setPassword('');
    };

    const handleLogin = (e) => {
      e.preventDefault();
      const form = document.getElementsByClassName("form-container")[0];
      const loader = document.getElementById("loader");
      loader.style.display = "inline-block";
      form.style.display = "none";
      const timer = setTimeout(() => {
        loader.style.display = "none";
        form.style.display = "inline-flex";
      }, 3000);
    };

    const handleReset = (e) => {
      e.preventDefault();
      const alert = document.getElementsByClassName("alert")[0];
      alert.style.display = "flex";
    };

    const handleToggle = (e) => {
      e.preventDefault();
      const loginView = document.querySelector("#login");
      const passView = document.querySelector("#pass");
      const btnToggleViewList = document.querySelectorAll(".toggle-btn");
      if (loginView.classList.contains("active")) {
        passView.classList.add("active");
        loginView.classList.remove("active");
      } else {
        loginView.classList.add("active");
        passView.classList.remove("active");
      }
    };

    return (
      <main>
        <div id="login" className="active">
          <div className="form-container">
            <h1 className="title">NOW !</h1>
            <form className="form" action="">
              <div className="form-grp">
                <svg height="50px" viewBox="0 0 60 60" width="50px">
                  <g id="slice" transform="translate(-700.000000, -500.000000)"/>
                  <g id="mail" transform="translate(11.000000, 18.000000)">
                    <path d="M19,15.4615385 L36.3076923,0.461538462 L1.69230769,0.461538462 L19,15.4615385 Z M14.3251765,13.8010536 L19,17.6382399 L23.6015813,13.8010536 L36.3076923,24.6923077 L1.69230769,24.6923077 L14.3251765,13.8010536 Z M0.538461538,23.5384615 L0.538461538,1.61538462 L13.2307692,12.5769231 L0.538461538,23.5384615 Z M37.4615385,23.5384615 L37.4615385,1.61538462 L24.7692308,12.5769231 L37.4615385,23.5384615 Z"/>
                  </g>
                </svg>
                <input type="text" name="" id="" placeholder="E-mail address" style={{ color: '#fff' }} />
              </div>
              <div className="form-grp">
                <svg id="password-icon" style={{ enableBackground: 'new 0 0 24 24', fill: '#fff', opacity: '0.7' }} viewBox="0 0 24 24">
                  <path d="M20,10h-4H8l0-2.8c0-2.1,1.5-4,3.6-4.2C14,2.8,16,4.7,16,7l0,0c0,0.6,0.4,1,1,1h1c0.6,0,1-0.4,1-1l0,0   c0-3.8-3-6.9-6.8-7C8.3-0.1,5,3.1,5,7v3H4c-1.1,0-2,0.9-2,2v7c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5v-7C22,10.9,21.1,10,20,10z    M13,17.7V19c0,0.5-0.5,1-1,1s-1-0.5-1-1v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2C14,16.7,13.6,17.4,13,17.7z"/>
                </svg>
                <input type="password" name="" id="" placeholder="Password" style={{ color: '#fff' }} />
              </div>
              <button id="btn-submit" type="submit" onClick={handleLogin}>Login</button>
            </form>
            <button type="button" className="link toggle-btn" href="" onClick={handleToggle}>Forgotten password ?</button>
          </div>
          <div id="loader" className="three col">
            <div className="loader" id="loader-2">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div id="pass" className="form-container">
          <div className="alert success">An e-mail has been sent to you</div>
          <form className="form form-forgot" action="">
            <div className="form-grp">
              <input type="text" name="" id="" placeholder="Your e-mail address" style={{ color: '#ffffff' }} />
              <button id="btn-reset-pass" type="submit" onClick={handleReset}>
                <svg height="512px" style={{ enableBackground: 'new 0 0 512 512', fill: 'rgb(var(--primary))', opacity: '1', margin: '0 4px' }} version="1.1" viewBox="0 0 512 512" width="512px">
                  <path d="M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0  c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4  c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z"/>
                </svg>
              </button>
            </div>
          </form>
          <button type="button" className="link toggle-btn" href="" onClick={handleToggle}>Back to login</button>
        </div>
      </main>
    );
  };

  export default Index;
