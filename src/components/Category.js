import React from "react";
import { Col, Row } from "react-bootstrap";
import { Roll } from "react-awesome-reveal";

function Category({ filterByCategory, AllItems, AllCategory }) {
  //to filter category
  const onfilter = (cat) => {
    filterByCategory(cat);
  };
  //
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <Roll>
          {AllCategory.length >= 1 ? (
            AllCategory.map((item) => {
              return (
                <div key={item.Category}>
                  <button
                    onClick={() => onfilter(item)}
                    className="btn-search1 mx-2"
                  >
                    {item}
                  </button>
                </div>
              );
            })
          ) : (
            <h3> لا يوجد تصنيفات</h3>
          )}
          {/* 
        <button onClick={() => onfilter("افطار")} className="btn-search1 mx-2">
          الفطار
        </button>
        <button onClick={() => onfilter("غداء")} className="btn-search1 mx-2">
          الغداء
        </button>
        <button onClick={() => onfilter("عشاء")} className="btn-search1 mx-2">
          العشاء
        </button> */}
        </Roll>
      </Col>
    </Row>
  );
}

export default Category;
