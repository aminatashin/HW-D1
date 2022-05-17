import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJob } from "../slice/jobSlice";

const SearchJobs = () => {
  const [query, setQuery] = useState("");

  const addJob = useSelector((state) => state.job.company);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJob(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Link to="/favourites" className="btn btn-primary">
            Favourites
          </Link>
        </Col>
        <Col xs={10} className="mx-auto d-flex align-items-center">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {addJob.map((result) => (
            <Job key={result._id} data={result} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchJobs;

// import React, { useState } from "react";

// import { Form, Col, Row } from "react-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import Job from "./Job";
// import { getJob } from "../slice/jobSlice";

// // const mapStateToProps = (state) => {
// //   return {
// //     companyArray: state.job.company,
// //     userNameP: state.user.userName,
// //   };
// // };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     jobProp: (query) => {
// //       dispatch(getJob(query));
// //     },
// //     addName: (name) => {
// //       dispatch(addUser(name));
// //     },
// //   };
// // };

// const SearchJobs = () => {
//   const [query, setQuery] = useState("");
//   const companyArray = useSelector((state) => state.job.company);

//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     dispatch(getJob(query));
//   };

//   return (
//     <>
//       <Row>
//         <Col md={6}>
//           <Form onSubmit={handleSubmit}>
//             <Form.Control
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             ></Form.Control>
//           </Form>

//           <Col md={4}>
//             {companyArray.map((result) => (
//               <Job key={result._id} data={result} />
//             ))}
//           </Col>
//         </Col>
//       </Row>
//     </>
//   );
// };
// export default SearchJobs;
