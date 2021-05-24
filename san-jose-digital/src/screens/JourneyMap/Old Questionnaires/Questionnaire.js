import React, { useReducer } from 'react';
import {
  NavLink
} from 'react-router-dom';

function Questionnaire() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: ""
  }
  
  const [formValues, setFormValues] = useReducer(
    (curVals, newVals) => ({ ...curVals, ...newVals }), 
    initialValues
  ) 

  const {name, email, phone, address} = formValues

  const formReducer = (state, {type, payload}) => {
    switch (type) {
      case "name":
        return {...state, name: payload}
    }
  }

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormValues({ [name]: value })
  }

  return (
    <container>
      <header> QUESTIONNAIRE </header>
      <p>Fill out the following questionnaire to learn more about our grantee
      organizations.</p>
      <form className="form">
        <label htmlFor="name">
          Name:
           <input type="text" id="name" name="name" value={name} onChange={handleFormChange}></input>
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" value={email} onChange={handleFormChange}></input>
        </label>
        <label htmlFor="phone">
          Phone:
          <input type="phone" id="phone" name="phone" value={phone} onChange={handleFormChange}></input>
        </label>
        <label htmlFor="address">
          Address:
          <input type="textarea" id="address" name="address" value={address} onChange={handleFormChange}></input>
        </label> 
        <div>
          <NavLink to='./questionnaire2'>NEXT</NavLink>
        </div>
      </form>

    </container>
  )
};

export default Questionnaire;
// function Questionnaire() 
/*const Questionnaire = () => {
  return (
      <container>
        <header> QUESTIONNAIRE </header>
        <p>
          Fill out the following questionnaire to get matched with grantee
          organization(s).
        </p>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName"> Name : </label>
            <input type="text" id="firstName" name="firstName"></input>
          </div>
          <div className="form-control">
            <label htmlFor="email"> E-Mail : </label>
            <input type="email" id="email" name="email"></input>
          </div>
          <div className="form-control">
            <label htmlFor="phone"> Phone : </label>
            <input type="number" id="phone" name="phone"></input>
          </div>
          <div className="form-control">
            <label htmlFor="adress"> Adress : </label>
            <input type="textarea" id="adress" name="adress"></input>
          </div>
          <div className="form-control">
            <label htmlFor="zip"> Zip Code : </label>
            <input type="number" id="zip" name="zip"></input>
          </div>
          <div className="form-control">
            <label htmlFor="contact"> IDENTITY I am filling this on behalf of : </label>
            <br />
            <input type="radio" id="contact" name="contact" value="self" />
            <label for="contact">Myself</label>
            <br />
            <input type="radio" id="someone" name="contact" value="someone" />
            <label for="someone">
              Someone else (please specify)
              <input type="text" id="someone" name="contact"></input>
            </label>
          </div>npm 
          <div className="form-control">
            <label htmlFor="contact"> What is your primary language : </label>
            <br />
            <input type="radio" id="english" name="language" value="english" />
            <label for="english">English</label>
            <br />
            <input type="radio" id="spanish" name="language" value="spanish" />
            <label for="spanish">Spanish</label>
            <br />
            <input
              type="radio"
              id="vietnamese"
              name="language"
              value="vietnamese"
            />
            <label for="vietnamese">Vietnamese</label>
            <br />
            <input type="radio" id="other1" name="language" value="other1" />
            <label for="other">
              Other (please eloborate)
              <input type="text" id="other" name="contact"></input>
            </label>
          </div>
        <div>
          <NavLink to='./questionnaire2'>NEXT</NavLink>
        </div>
        </form>
    </container>
  );
}

export default Questionnaire;*/