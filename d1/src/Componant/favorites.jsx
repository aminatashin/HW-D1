import React from "react";
import { Col, Row, Alert } from "react-bootstrap";

import { useSelector } from "react-redux";

// const mapStateToProps = (state) => {
//   return {
//     favContent: state.fave.content,
//     error: state.job.error,
//   };
// };
const Favorites = () => {
  const favContent = useSelector((state) => state.fav.content);
  const error = useSelector((state) => state.job.error);
  return (
    <div>
      <Row>
        <h1>company</h1>
        {error ? (
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
export default Favorites;
