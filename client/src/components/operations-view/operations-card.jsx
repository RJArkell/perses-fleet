import React from "react";
import { Card, Col, Row, Button } from 'react-bootstrap';
import axios from "axios";

export class OperationsCard extends React.Component {
  render() {
    const { o } = this.props;
    const { user } = this.props;
    var date = new Date(o.Date);

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
      <Card className="m-1 infocard">
        <Row noGutters={true}>
          <Col xs={3}>
            <Card.Img className="h-100" src={o.Address} />
          </Col>
          <Col xs={9}>
            <Card.Header className="infoheader"><h4>{o.Title}</h4></Card.Header>
            <Card.Body className="mx-4">
              <Row>
                <Card.Subtitle >
                  <h5>{date.toDateString()} - {o.Time}</h5>
                </Card.Subtitle>
              </Row>
              <Row className="pt-2">
                <Card.Text>
                  <p>Details: {o.Details}</p>
                </Card.Text>
              </Row>
              <Row className="pt-2">
                <Card.Text>
                  <p>Assets: {o.Assets}</p>
                </Card.Text>
              </Row>
              <Row className="pt-2">
                <Card.Text>
                  <p>Crew: {o.Crew}</p>
                </Card.Text>
              </Row>
              <Button className="button float-right mb-2" type="submit" onClick={handleSubmit}>Join Event</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }
}