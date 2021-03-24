import React, { useState } from 'react';
import './index.css';

const Form = props => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })

  const [verifiedInput, verifyInput] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  }
  
  const emailAdress = "demo@myunisoft.fr"
  const password = "myunisoft"

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (inputs.email === emailAdress && inputs.password === password) {
      props.history.push('/home/users');
    }
  }

  return (

    <form id="form" onSubmit={onSubmitForm}>
      <h1 id="title">Connectez vous à MyUnisoft</h1>
      <div id="inputEmail">
        <label htmlFor="email" className="label">Adresse mail</label>
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          onBlur={
            () => { 
              inputs.email !== emailAdress 
                && inputs.email !== "" 
                ? verifyInput(true) : verifyInput(false) }
          }
        />
      </div>

      <div id="inputPassword">
        <label htmlFor="password" className="label">Mot de passe</label>
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          onBlur={() => { 
            inputs.password !== password 
              && inputs.password !== "" 
              ? verifyInput(true) : verifyInput(false) }}
        />
        <i className="far fa-eye-slash" id="togglePassword"></i>
      </div>

      {
        verifiedInput &&
        <h3 style={{ color: "red" }}>Bad credentials</h3>
      }

      <div id="forgotPassword">
        <a href="/reset-password">Mot de passe oublié ?</a>
      </div>
      <input type="submit" value="Se connecter" />
    </form>

  );
}

export default Form;
