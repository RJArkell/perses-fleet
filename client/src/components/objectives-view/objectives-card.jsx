import React from "react";
import { Row, Col, Card, ProgressBar } from 'react-bootstrap';

export class ObjectivesCard extends React.Component {
  render() {
    const { o } = this.props;
    const bar = (o.Progress / o.Goal) * 100;
    console.log(bar)

    return (
      <Card className="m-1 infocard">
        <Row noGutters={true}>
          <Col xs={9}>
            <Card.Header className="infoheader"><h4>{o.Title}</h4></Card.Header>
            <Card.Body className="mx-4">
              <Row>
                <Card.Text>
                  <p>Details: {o.Details}</p>
                </Card.Text>
              </Row>
              <Row className="pt-3">
                <ProgressBar striped variant="info" className="w-100" animated now={bar} />
              </Row>
              <Row className="pt-2 justify-content-center">
                <Card.Text>
                  <p>{o.Progress} / {o.Goal} aUEC</p>
                </Card.Text>
              </Row>
            </Card.Body>
          </Col>
          <Col xs={3}>
            <Card.Img className="h-100" src={o.Address} />
          </Col>
        </Row>
      </Card>
    );
  }
}