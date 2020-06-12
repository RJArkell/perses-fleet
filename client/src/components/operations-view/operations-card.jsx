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
        <Row noGutters={true}>
          <Col xs={4} className="h-100">
            <Card.Img className="squared" src={o.Address} />
          </Col>
          <Col xs={8}>
            <Card.Header className="infoheader"><h4>{o.Title}</h4></Card.Header>
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
        </Row>
        <Card.Header className="infoheader text-center"><h5>Crew</h5></Card.Header>
        <Card.Text>
          <Row noGutters={true} className="m-2">
            {o.Crew.map(c => {
              return <Col xl={2} sm={4} xs={12}>
                <Card className="infoheader text-center py-1 squared">
                  <Link to={`/profile/${c}`}>{c}</Link>
                </Card>
              </Col>
            })}
          </Row>
          {staff === "true" && <Button className="button float-right mr-2 mb-2" type="submit" onClick={handleShow}>Edit</Button>}
          {signedup
            ? <Button className="button float-right mr-2 mb-2" type="submit" onClick={handleDelete}>Leave Crew</Button>
            : <Button className="button float-right mr-2 mb-2" type="submit" onClick={handleSubmit}>Join Crew</Button>
          }
        </Card.Text>
      </Card >
    );
  }
}