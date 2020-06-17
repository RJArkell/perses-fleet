import React from "react";
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";

export class OperationsCard extends React.Component {
  render() {
    const { o, user } = this.props;
    const signedup = o.Crew.some((list) => list === user);
    const date = new Date(o.Date);
    const staff = localStorage.getItem("staff")

    const handleClose = (e) => {
      this.setState({
        show: true
      });
    };

    const handleShow = (e) => {
      this.setState({
        show: true
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(`https://perses-fleet.herokuapp.com/api/operations/${o._id}/crew/${user}`, {
        Username: user,
      })
        .then(res => {
          const data = res.data;
          console.log(data);
          alert("You have been signed up");
          window.open("/operations", "_self");
        })
        .catch(e => {
          alert("error signing up for operation");
          console.log(e);
        });
    };

    const handleDelete = (e) => {
      e.preventDefault();
      axios.delete(`https://perses-fleet.herokuapp.com/api/operations/${o._id}/crew/${user}`, {
        Username: user,
      })
        .then(res => {
          const data = res.data;
          console.log(data);
          alert("You have been removed from the crew");
          window.open("/operations", "_self");
        })
        .catch(e => {
          alert("error resigning from operation");
          console.log(e);
        });
    }

    return (
      <Card className="my-1 mx-2 infocard squared">
        <Card.Header className="infoheader">
          <Row noGutters={true}>
            <Col xs={9}>
              <h4>{o.Title}</h4>
            </Col>
            <Col xs={3}>
              {signedup
                ? <Button className="button float-right" type="submit" onClick={handleDelete}>Leave Crew</Button>
                : <Button className="button float-right" type="submit" onClick={handleSubmit}>Join Crew</Button>
              }
              {staff === "true" && <Button className="button mr-2 float-right" type="submit" onClick={handleShow}>Edit</Button>}
            </Col>
          </Row>
        </Card.Header>
        <Row noGutters={true}>
          <Col xs={4} className="h-100">
            <Card.Img className="squared" src={o.Address} />
          </Col>
          <Col xs={6}>
            <Card.Body className="mx-4">
              <Row>
                <Card.Text >
                  <h6>{date.toDateString()} - {o.Time} PST</h6>
                </Card.Text>
              </Row>
              <Row className="pt-2">
                <Card.Text>
                  <p>ASSETS:  </p>
                  <div className="pl-2" dangerouslySetInnerHTML={{ __html: o.Assets }}></div>
                </Card.Text>
              </Row>
              <Row>
                <Card.Text>
                  <p>DETAILS:  </p>
                  <div className="pl-2" dangerouslySetInnerHTML={{ __html: o.Details }}></div>
                </Card.Text>
              </Row>
            </Card.Body>
          </Col>
          <Col xs={2}>
            <Card.Header className="infoheader text-center"><h5>Crew</h5></Card.Header>
            <Card.Text>
              <Row noGutters={true} className="mb-2">
                {o.Crew.map(c => {
                  return <Col xs={12}>
                    <Card className="infoheader text-center py-1 squared">
                      <Link to={`/profile/${c}`}>{c}</Link>
                    </Card>
                  </Col>
                })}
              </Row>
            </Card.Text>
          </Col>
        </Row>
      </Card >
    );
  }
}