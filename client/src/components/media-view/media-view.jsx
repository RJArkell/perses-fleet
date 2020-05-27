import React from "react";
import { Card, Container, Col, Row } from 'react-bootstrap';
import { ScreenshotCard } from "./screenshot-card";

export class MediaView extends React.Component {
  render() {
    const { screenshots } = this.props;
    return (
      <Container fluid className="pagecontainer text-center">
        <Card>
          <Card.Header className="header"><h3>Screenshots</h3></Card.Header>
          <Row noGutters={true} className="m-1">
            {screenshots.map(s =>
              <Col sm={12} md={6} lg={4} className="p-1">
                <ScreenshotCard key={s._id} s={s} />
              </Col>)}
          </Row>
        </Card>
      </Container>
    )
  }
}