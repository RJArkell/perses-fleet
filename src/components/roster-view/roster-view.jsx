import React from "react";
import "./roster-view.scss"
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class RosterView extends React.Component {
  render() {
    return (
      <div className="roster">
        <Container fluid className="pb-5 text-center" >
          <Card className="mt-4 border border-info" style={{ backgroundColor: 'darkgrey' }}>
            <Card.Header style={{ backgroundColor: 'grey' }}><h3>Command Staff</h3></Card.Header>
            <Card style={{ backgroundColor: 'silver' }}>
              <Card.Header style={{ backgroundColor: 'grey' }}><h5>Admiral</h5></Card.Header>
              <Card.Body>
                <Card.Text>C3SK</Card.Text>
              </Card.Body>
            </Card>
            <Row noGutters={true}>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Commander</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>CursedEinherjar</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Commander</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>ZucchiniZhang</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Acting Commander</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>7R06D0R</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card>
          <Card className="mt-5 border border-info" style={{ backgroundColor: 'darkgrey' }}>
            <Card.Header style={{ backgroundColor: 'grey' }}><h3>Junior Ranks</h3></Card.Header>
            <Row noGutters={true}>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>makewiththebits</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>Bootyout</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>GravityScientist</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>TrashbagMckee</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>kingbudha</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>Tbster</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row noGutters={true}>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>slippery_pickle</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>zander825</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>Mikecrook2112</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Card>
          <Card className="mt-5 border border-info" style={{ backgroundColor: 'darkgrey' }}>
            <Card.Header style={{ backgroundColor: 'grey' }}><h3>Recruits</h3></Card.Header>
            <Row noGutters={true}>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Recruit</Card.Header>
                  <Card.Body>
                    <Card.Text>ILoveTheFedGov</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Recruit</Card.Header>
                  <Card.Body>
                    <Card.Text>bxw93</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Card>
        </Container >
      </div >
    );
  }
}

export default RosterView;