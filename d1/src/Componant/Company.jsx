import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Job from "./Job";
const Company = () => {
  const [work, setWork] = useState([]);
  const params = useParams();
  useEffect(() => {
    getJobs();
  }, []);
  const getJobs = async () => {
    const res = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?company=" + params.companyName
    );
    //  const json = await res.json();

    // console.log(json);

    const { data } = await res.json();

    setWork(data);
  };

  return (
    <Row>
      <Col>
        {work.map((result) => (
          <Job key={result._id} data={result} />
        ))}
      </Col>
    </Row>
  );
};
export default Company;
