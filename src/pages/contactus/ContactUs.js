import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! Check the console for data.");
  };

  return (
    <Container>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <FormGroup>
            <Col md={6}>
              <Label for="name">Name:</Label>
            </Col>
            <Col md={6}>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
            <Col md={6}>
              <Label for="email">Email:</Label>
            </Col>
            <Col md={6}>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
            <Col md={6}>
              <Label for="message">Message:</Label>
            </Col>
            <Col md={6}>
              <Input
                type="textarea"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
        </Row>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default ContactUs;
