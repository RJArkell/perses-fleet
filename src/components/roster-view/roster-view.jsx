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
        <Container fluid className="text-center mt-4 px-5 vh-100 ">
          <Card className="text-center mx-5 border border-info" style={{ backgroundColor: 'darkgrey' }}>
            <Card.Header style={{ backgroundColor: 'grey' }}><h3>Organization Roster</h3></Card.Header>
            <Card className="m-5" style={{ backgroundColor: 'silver' }}>
              <Card.Header style={{ backgroundColor: 'grey' }}>Admiral</Card.Header>
              <Card.Body>
                <Card.Text>C3SK</Card.Text>
              </Card.Body>
            </Card>
            <Row>
              <Col>
                <Card className="mx-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Commander</Card.Header>
                  <Card.Body>
                    <Card.Text>CursedEinherjar</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="mx-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Commander</Card.Header>
                  <Card.Body>
                    <Card.Text>ZucchiniZhang</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="mx-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Acting Commander</Card.Header>
                  <Card.Body>
                    <Card.Text>7R06D0R</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Ensign</Card.Header>
                  <Card.Body>
                    <Card.Text>makewiththebits</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Ensign</Card.Header>
                  <Card.Body>
                    <Card.Text>Bootyout</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Ensign</Card.Header>
                  <Card.Body>
                    <Card.Text>GravityScientist</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Ensign</Card.Header>
                  <Card.Body>
                    <Card.Text>TrashbagMckee</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Ensign</Card.Header>
                  <Card.Body>
                    <Card.Text>kingbudha</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Ensign</Card.Header>
                  <Card.Body>
                    <Card.Text>Tbster</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Ensign</Card.Header>
                  <Card.Body>
                    <Card.Text>slippery_pickle</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Ensign</Card.Header>
                  <Card.Body>
                    <Card.Text>zander825</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Ensign</Card.Header>
                  <Card.Body>
                    <Card.Text>Mikecrook2112</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Recruit</Card.Header>
                  <Card.Body>
                    <Card.Text>ILoveTheFedGov</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Recruit</Card.Header>
                  <Card.Body>
                    <Card.Text>bxw93</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-5" style={{ backgroundColor: 'silver' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}>Recruit</Card.Header>
                  <Card.Body>
                    <Card.Text>Placeholder</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

export default RosterView;