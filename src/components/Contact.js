import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fo4ks8t', 'template_vri1w47', form.current, 'eDx8SqaQ5B_R3ImPb')
      .then((result) => {
          console.log(result.text);
          alert("success");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='Contact' style={{alignItems:'center'}}>
      <center>
    <Card style={{ width: '28rem',color:'black'}}>
      <Card.Body>
        <Card.Title></Card.Title>
        <div className="form-container">
        <h1 style={{color:"black"}}>Contact me</h1>
        <br></br>
    <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label htmlFor="text">Message</label>
            <input type="text" className="form-control" id="message" placeholder="Enter message" />
        </div>
        <Button variant="primary" type='submit'>Send</Button>
    </form>
</div>
      </Card.Body>
    </Card>
    </center>
    </div>
  )
}

export default Contact