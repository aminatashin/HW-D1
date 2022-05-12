import React from "react";
import { Col, Row, Alert } from "react-bootstrap";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    favContent: state.fave.content,
    errorProp: state.job.error,
  };
};
const Favorites = ({ favContent, errorProp }) => {
  return (
    <div>
      <Row>
        <h1>company</h1>
        {errorProp ? (
          <Alert>Fetch Error</Alert>
        ) : (
          // <Button>
          //   <Link to={"/"}>Search</Link>
          // </Button>
          <Col md={4}>
            <ul>
              {favContent.map((data) => (
                <li>{data.company_name}</li>
              ))}
            </ul>
          </Col>
        )}
      </Row>
    </div>
  );
};
export default connect(mapStateToProps)(Favorites);
