import React, { useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CMS from "../../CMS/cms";
import "./contact.css";
import emailjs from "@emailjs/browser";
import styled from "styled-components";



const { CONTACT_DETAILS } = CMS;

const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6q8w25h', 'template_klr860p', e.target, 'lfiVye_uYQE-3Lcbx')
    const templateParams = {
      name: { name },
      email: { email },
      mobile: { mobile },
      message: { message }
    };

    // emailjs.sendForm('service_6q8w25h', 'template_klr860p', e.target, 'lfiVye_uYQE-3Lcbx')
    //   .then(function (response) {
    //     console.log('SUCCESS!', response.status, response.text);
    //   }, function (err) {
    //     console.log('FAILED...', err);
    //   });

    window.location.reload(false);
  };

  return (
    <div className="main-page">
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" autoComplete="off" onChange={(e) => setName(e.target.value)} />
          <label>Email</label>
          <input type="email" name="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
          <label>Mobile</label>
          <input type="mobile" name="mobile" autoComplete="off" onChange={(e) => setMobile(e.target.value)} />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" autoComplete="off" onChange={(e) => setMessage(e.target.value)} />
        </form>

      </StyledContactForm>
    </div>

  );
};


const StyledContactForm = styled.div`
  width: 400px;

  form {
    background-image: url("./Image/con11.jpg");
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 90%;
    font-size: 16px;
    margin-top: -60px;
    margin-bottom: 10px;
    margin-left: 100px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: blue;
      color: white;
      border: none;
    }
  }
`

export default ContactUs;
