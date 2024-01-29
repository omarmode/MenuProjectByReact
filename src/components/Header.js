import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Row>
      <Col sm="12" className="justify-content-center text-center">
        <h2 className="title">قائمة الطعام</h2>
        <div className="justify-content-center d-flex">
          <p className="conrentHeader  "></p>
        </div>
      </Col>
    </Row>
  );
}

export default Header;
