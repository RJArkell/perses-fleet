import React from "react";
import "./milestone-view.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class MilestoneView extends React.Component {
  render() {
    return (
      <div className="milestones">
        <Container fluid className="p-5 text-center" >
          <Card className="mx-5">
            <Card.Header className="header"><h3>Current Objective</h3></Card.Header>
            <Row noGutters={true} className="m-1">
              <Col>
                <Card className="h-100 infocard">
                  <Card.Header className="header"><h5>2nd DRAKE Caterpillar</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>We are currently working towards buying a second Caterpillar to increase our trading capacity.</Card.Text>
                    <ProgressBar striped variant="info" animated now={65} />
                    <Card.Text>
                      <p>3 000 000 / 4 700 000 aUEC</p>
                      <p><h5>Top Contributors:</h5></p>
                      <p>C3SK</p>
                      <p>CursedEinherjar</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img src={require("/img/milestone1.png")} />
                </Card>
              </Col>
            </Row>
          </Card>
          <Card className="mt-5">
            <Card.Header className="header"><h3>Completed Objectives</h3></Card.Header>
            <Row noGutters={true}>
              <Col>
                <Card className="m-1 infocard">
                  <Card.Header className="header"><h5>1st DRAKE Caterpillar</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>We have obtained our first Caterpillar to begin ramping up our trade operations.</Card.Text>
                    <ProgressBar striped variant="success" now={100} />
                    <Card.Text>
                      <p>4 700 000 / 4 700 000 aUEC</p>
                      <p>Top Contributor: C3SK</p>
                    </Card.Text>
                    <Card.Img src={require("/img/milestone1.png")} />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

export default MilestoneView;