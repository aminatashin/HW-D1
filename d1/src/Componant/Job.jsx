import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFav } from "../slice/favSlice";

// const mapDispatchToProps = (disptach) => {
//
//   return {
//     addFavProp: ({ data }) => {
//       disptach(addToFav(data));
//     },
//   };
// };

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Row>
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={4}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>

          <Button onClick={() => dispatch(addToFav({ data }))}>Favorite</Button>
        </Col>
      </Row>
      <Button className="btn">
        <Link to={"/favorites"}>Go Favoriets</Link>
      </Button>
    </div>
  );
};
export default Job;
