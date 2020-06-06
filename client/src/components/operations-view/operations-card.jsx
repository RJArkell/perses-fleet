import React from "react";
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";

export class OperationsCard extends React.Component {
  render() {
    const { o } = this.props;
    const { user } = this.props;
    var date = new Date(o.Date);
    console.log(o.Crew)

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

    return (
      <Card className="my-1 mx-2 infocard">
        <Row noGutters={true}>
          <Col xs={3}>
            <Card.Img className="h-100" src={o.Address} />
          </Col>
          <Col xs={9}>
            <Card.Header className="infoheader"><h4>{o.Title}</h4></Card.Header>
            <Card.Body className="mx-4">
              <Row>
                <Card.Subtitle >
                  <h5>{date.toDateString()} - {o.Time} PST</h5>
                </Card.Subtitle>
              </Row>
              <Row className="mt-3">
                <Card.Text>
                  <p>DETAILS:  </p>
                  <div dangerouslySetInnerHTML={{ __html: o.Details }}></div>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>ASSETS:  </p>
                  <div dangerouslySetInnerHTML={{ __html: o.Assets }}></div>
                </Card.Text>
              </Row>
            </Card.Body>
          </Col>
        </Row>
        <Row className="mt-2">
          <Card.Body className="mx-4">
            <Card.Text>
              <p>CREW:</p>
              {o.Crew.map(c => {
                return <Link to={`/profile/${c}`} className="ml-2">{c}</Link>
              })}
            </Card.Text>
            <Button className="button float-right mb-2" type="submit" onClick={handleSubmit}>Join Crew</Button>
          </Card.Body>
        </Row>
      </Card>
    );
  }
}