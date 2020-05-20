import React from "react";
import { Card, Col, Row, Button } from 'react-bootstrap';

export class OperationsCard extends React.Component {
  render() {
    const { o } = this.props;
    return (
      <Card className="m-1 infocard">
        <Row>
          <Col xs={3}>
            <p>jadshfjkhg</p>
          </Col>
          <Col xs={9}>
            <Card.Header className="infoheader"><h5>{o.Title}</h5></Card.Header>
            <Card.Body>
              <Row>
                <Card.Subtitle>
                  {o.Date}{o.Time}
                </Card.Subtitle>
              </Row>
              <Row>
                <Card.Text>
                  <p>Details: {o.Details}</p>
                </Card.Text>
              </Row>
              <Row>
                <Card.Text>
                </Card.Text>
              </Row>
              <Row>
                <Card.Text>
                  <p>Assets: {o.Assets}</p>
                </Card.Text>
              </Row>
              <Row>
                <Button className="button align-right" type="submit">Join Event</Button>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }
}