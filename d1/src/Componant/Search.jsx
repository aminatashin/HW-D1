import React from "react";
import { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Job from "./Job";

class SearchJobs extends Component {
  state = {
    query: "",
    jobs: [],
  };
  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?search=" + this.state.query
    );
    if (resp.ok) {
      const { data } = await resp.json();
      this.setState({ jobs: data });
    }
  };

  render() {
    return (
      <Row>
        <Col md={6}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Control
              type="search"
              value={this.state.query}
              onChange={this.handleChange}
            ></Form.Control>
          </Form>
        </Col>
        <Row>
          <Col md={3}>
            {this.state.jobs.map((result) => (
              <>
                <Job key={result._id} data={result} />
              </>
            ))}
          </Col>
        </Row>
      </Row>
    );
  }
}
export default SearchJobs;
