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
        <Container fluid className="p-5 text-center" >
          <Card>
            <Card.Header className="header"><h3>Command Staff</h3></Card.Header>
            <Card className="m-1 infocard h-100">
              <Card.Header className="infoheader"><h5>Admiral</h5></Card.Header>
              <Card.Body>
                <Card.Text>C3SK</Card.Text>
              </Card.Body>
            </Card>
            <Row noGutters={true}>
              <Col>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader"><h5>Commander</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>CursedEinherjar</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader"><h5>Commander</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>ZucchiniZhang</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader"><h5>Acting Commander</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>7R06D0R</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card>

          <Card className="mt-4">
            <Card.Header className="header border border-dark"><h3>Junior Ranks</h3></Card.Header>
            <Row noGutters={true}>
              <Col xl={2} md={3}>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader"><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>makewiththebits</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} md={3}>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader"><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>Bootyout</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} md={3}>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader"><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>GravityScientist</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} md={3}>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader"><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>TrashbagMckee</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} md={3}>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader"><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>kingbudha</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} md={3}>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader"><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>Tbster</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} md={3}>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader"><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>slippery_pickle</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} md={3}>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader"><h5>Ensign</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>zander825</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} md={3}>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader"><h5>Ensign</h5></Card.Header>
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

          <Card className="mt-4">
            <Card.Header className="header"><h3>Recruits</h3></Card.Header>
            <Row noGutters={true}>
              <Col xl={2} md={3}>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader">Recruit</Card.Header>
                  <Card.Body>
                    <Card.Text>ILoveTheFedGov</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} md={3}>
                <Card className="m-1 infocard h-100">
                  <Card.Header className="infoheader">Recruit</Card.Header>
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