import React from "react";
import { Col, Container, Row } from "reactstrap";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";
const CollectionPreview = ({ title, items }) => (
  <div>
    <Container>
      <h1 className="title">{title.toUpperCase()}</h1>
      <Row>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <Col md={3}><CollectionItem key={id} {...otherItemProps} /></Col>
        ))}
      </Row>
      
    </Container>

    
  </div>
);
export default CollectionPreview;
