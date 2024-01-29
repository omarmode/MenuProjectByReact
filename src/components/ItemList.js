import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import { lists } from "../Data";
import { items } from "../Datalist";

const ItemList = () => {
  return (
    <Row>
      {items.length ? (
        items.map((e) => {
          return (
            <Col sm="12" className="items mb-3">
              <Card className="d-flex flex-row">
                <Card.Img
                  variant="top"
                  style={{ width: "252px" }}
                  className="img-item"
                  src={e.imgURl}
                />
                <Card.Body>
                  <Card.Title className="justify-content-between d-flex">
                    <div className="item-title">{e.title}</div>
                    <div className="item-p">{e.price}</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="item-des py-2">{e.des}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد اصناف </h3>
      )}
    </Row>
  );
};
export default ItemList;
