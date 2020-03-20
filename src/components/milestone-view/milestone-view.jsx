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
        <Container fluid className="px-5 text-center" >
          <Card className="text-center mt-4 mb-5 mx-5 border border-info" style={{ backgroundColor: 'grey' }}>
            <Card.Header ><h3>Current Objective</h3></Card.Header>
            <Row className="no-gutters">
              <Col>
                <Card className="h-100" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>2nd DRAKE Caterpillar</h5></Card.Header>
                  <Card.Body >
                    <Card.Text>We are currently working towards buying a second Caterpillar to increase our trading capacity.</Card.Text>
                    <ProgressBar striped variant="info" animated now={65} />
                    <Card.Text>3 000 000 / 4 700 000 aUEC</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100" style={{ backgroundColor: 'silver' }}>
                  <Card.Img src={require("/img/milestone1.png")} />
                </Card>
              </Col>
            </Row>
          </Card>
          <Card className="text-center mx-5 border border-info" style={{ backgroundColor: 'darkgrey' }}>
            <Card.Header style={{ backgroundColor: 'grey' }}><h3>Completed Objectives</h3></Card.Header>
            <Row>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>1st DRAKE Caterpillar</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>We have obtained our first Caterpillar to begin ramping up our trade operations.</Card.Text>
                    <ProgressBar striped variant="success" now={100} />
                    <Card.Text>4 700 000 / 4 700 000 aUEC</Card.Text>
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