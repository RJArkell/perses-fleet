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
        <Container fluid className="pb-5 text-center" >
          <Card className="mt-4 mx-5 border border-info" style={{ backgroundColor: 'grey' }}>
            <Card.Header className="border border-dark"><h3>Current Objective</h3></Card.Header>
            <Row noGutters={true}>
              <Col>
                <Card className="h-100 border border-dark" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>2nd DRAKE Caterpillar</h5></Card.Header>
                  <Card.Body >
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
                <Card className="h-100 border border-dark" style={{ backgroundColor: 'silver' }}>
                  <Card.Img src={require("/img/milestone1.png")} />
                </Card>
              </Col>
            </Row>
          </Card>
          <Card className="border border-info mt-4" style={{ backgroundColor: 'darkgrey' }}>
            <Card.Header className="border border-dark" style={{ backgroundColor: 'grey' }}><h3>Completed Objectives</h3></Card.Header>
            <Row noGutters={true}>
              <Col>
                <Card className="border border-dark" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>1st DRAKE Caterpillar</h5></Card.Header>
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