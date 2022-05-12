import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    favContent: state.fave.content,
  };
};
const Favorites = ({ favContent }) => {
  return (
    <Row>
      <h1>ho0oy</h1>
      <Button>
        <Link to={"/"}>Search</Link>
      </Button>
      <Col md={4}>
        <ul>
          {favContent.map((data) => (
            <li>{data.company_name}</li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};
export default connect(mapStateToProps)(Favorites);
