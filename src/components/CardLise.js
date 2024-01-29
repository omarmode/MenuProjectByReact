import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { lists } from "../Data";

const CardLise = ({ itemsData }) => {
  return (
    <Row>
      <Fade direction="up">
        {itemsData.length >= 1 ? (
          itemsData.map((item) => {
            return (
              <Col key={item.id} sm="12" className="items mb-3">
                <Card className="d-flex flex-row">
                  <Card.Img
                    variant="top"
                    style={{ width: "252px" }}
                    className="img-item"
                    src={item.img}
                  />
                  <Card.Body>
                    <Card.Title className="justify-content-between d-flex">
                      <div className="item-title">{item.title}</div>
                      <div className="item-p">{item.price}</div>
                    </Card.Title>
                    <Card.Text>
                      <div className="item-des py-2">{item.des}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">no </h3>
        )}
      </Fade>
    </Row>
  );
};

export default CardLise;
