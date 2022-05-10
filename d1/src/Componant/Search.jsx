import { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
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
      const { jobs } = await resp.json();
      this.setState({ jobs });
    }
  };

  render() {
    return (
      <Row>
        <Col md={12}>
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
            {this.state.jobs.map((jobs) => (
              <>
                <div>{jobs.title}</div>
                <div>{jobs.company_name}</div>
              </>
            ))}
          </Col>
        </Row>
      </Row>
    );
  }
}
export default SearchJobs;
