import React from "react";
import { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Job from "./Job";
import { getJob } from "../slice/jobSlice";
import { addUser } from "../slice/userSlice";

const mapStateToProps = (state) => {
  return {
    companyArray: state.job.company,
    userNameP: state.user.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    jobProp: (query) => {
      dispatch(getJob(query));
    },
    addName: (name) => {
      dispatch(addUser(name));
    },
  };
};

class SearchJobs extends Component {
  state = {
    query: "",
    input: "",
  };
  handleChange = (e) => {
    this.setState({ query: e.target.value });
    this.setState({ input: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    this.props.jobProp(this.state.query);
    this.props.addName(this.state.input);
  };

  render() {
    return (
      <Row>
        {this.props.userNameP ? (
          <Col md={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.query}
                onChange={this.handleChange}
              ></Form.Control>
            </Form>
          </Col>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <Form.Control
              value={this.state.input}
              on
              onChange={this.handleChange}
            ></Form.Control>
          </Form>
        )}

        <Col xs={12}>
          <Row>
            {this.props.companyArray.map((result) => (
              <>
                <Col md={3}>
                  <Job key={result._id} data={result} />
                </Col>
              </>
            ))}
          </Row>
        </Col>
      </Row>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchJobs);
