import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Job = ({ data }) => {
  return (
    <Row>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={4}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};
export default Job;
