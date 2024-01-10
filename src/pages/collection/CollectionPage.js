import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./CollectionPage.scss";
import SHOP_DATA from "./shop.data";
const CollectionPage = () => {
  let { collectionName } = useParams();
  const list = SHOP_DATA.find((obj) => obj.routeName === collectionName);
  return (
    <div>
      <Container>
      <h1 className="title">{list.title.toUpperCase()}</h1>
        <Row>
        {list.items.map(({ id, ...otherItemProps }) => (
          <Col md={3}><CollectionItem key={id} {...otherItemProps} /></Col>
          ))}
        </Row>
      </Container>
      <div className="collection-preview">
        
      </div>
      
    </div>
  );
};
export default CollectionPage;
