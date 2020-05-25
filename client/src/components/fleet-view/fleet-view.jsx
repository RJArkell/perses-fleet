import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';

export class FleetView extends React.Component {
  render() {
    return (
      <Container fluid className="pagecontainer">
        <Card>
          <Card.Header className="header text-center"><h3>Fleet</h3></Card.Header>
          <Card className="m-1 infocard">
            <Card.Header className="infoheader text-center"><h4>N.S.S. Terror</h4></Card.Header>
            <Card.Body>
              <Row className="my-3">
                <Col xs={5} className="text-center" >
                  <Card.Img className="patch" src={"https://i.ibb.co/sjtwHDb/terrorpatch.png"} />
                </Col>
                <Col xs={7} className="mt-5 pr-5">
                  <Row>
                    <Card.Text>
                      <p>MODEL:  Aegis Hammerhead</p>
                    </Card.Text>
                  </Row>
                  <Row className="mt-2">
                    <Card.Text>
                      <p>CAPTAIN:  c3sk</p>
                    </Card.Text>
                  </Row>
                  <Row className="mt-2">
                    <Card.Text>
                      <p>ROLE:  Heavy Gun Ship</p>
                    </Card.Text>
                  </Row>
                  <Row className="mt-2">
                    <Card.Text>
                      <p>DETAILS:  The Aegis Hammerhead is a light, fast patrol ship bristling with six manned quad-linked turrets for optimal anti-fighter and anti-ordnance defense. It is also suited to support larger capital ships in a fleet or act as a flagship for fighter groups.</p>
                    </Card.Text>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
            <Row noGutters={true} className="mx-1 mb-1">
              <Col className="p-1">
                <Card.Img className="h-100 holoborder" src={"https://i.ibb.co/RHj9cJq/unknown.png"} />
              </Col>
              <Col className="p-1">
                <Card.Img className="h-100 holoborder" src={"https://i.ibb.co/KFYZYNW/image.png"} />
              </Col>
            </Row>
          </Card>

          <Card className="m-1 infocard">
            <Card.Header className="infoheader text-center"><h4>N.S.S. Erebus</h4></Card.Header>
            <Card.Body>
              <Row className="my-3">
                <Col xs={7} className="mt-5 pl-5">
                  <Row>
                    <Card.Text>
                      <p>MODEL:  Anvil Carrack</p>
                    </Card.Text>
                  </Row>
                  <Row className="mt-2">
                    <Card.Text>
                      <p>CAPTAIN:  c3sk</p>
                    </Card.Text>
                  </Row>
                  <Row className="mt-2">
                    <Card.Text>
                      <p>ROLE:  Expedition</p>
                    </Card.Text>
                  </Row>
                  <Row className="mt-2">
                    <Card.Text>
                      <p>DETAILS:  The Anvil Carrack features reinforced fuel tanks for long-duration flight, an advanced jump drive, and a dedicated computer core for jump charting operations. Originally a military exclusive, the Carrack is now available for civilian use. On-board accomodations include crew medical and repair facilities, and a mapping-oriented sensor suite.</p>
                    </Card.Text>
                  </Row>
                </Col>
                <Col xs={5} className="text-center" >
                  <Card.Img className="patch" />
                </Col>
              </Row>
            </Card.Body>
            <Row noGutters={true} className="mx-1 mb-1">
              <Col className="p-1">
                <Card.Img className="h-100 holoborder" />
              </Col>
              <Col className="p-1">
                <Card.Img className="h-100 holoborder" />
              </Col>
            </Row>
          </Card>

          <Card className="m-1 infocard">
            <Card.Header className="infoheader text-center"><h4>Polaris</h4></Card.Header>
            <Card.Body>
              <Row className="my-3">
                <Col xs={5} className="text-center" >
                  <Card.Img className="patch" />
                </Col>
                <Col xs={7} className="mt-5 pr-5">
                  <Row>
                    <Card.Text>
                      <p>MODEL:  </p>
                    </Card.Text>
                  </Row>
                  <Row className="mt-2">
                    <Card.Text>
                      <p>CAPTAIN:  </p>
                    </Card.Text>
                  </Row>
                  <Row className="mt-2">
                    <Card.Text>
                      <p>ROLE:  </p>
                    </Card.Text>
                  </Row>
                  <Row className="mt-2">
                    <Card.Text>
                      <p>DETAILS:  </p>
                    </Card.Text>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
            <Row noGutters={true} className="mx-1 mb-1">
              <Col className="p-1">
                <Card.Img className="h-100 holoborder" />
              </Col>
              <Col className="p-1">
                <Card.Img className="h-100 holoborder" />
              </Col>
            </Row>
          </Card>

          <Card className="m-1 infocard">
            <Card.Header className="infoheader text-center"><h4>Idris</h4></Card.Header>
            <Card.Body>
              <Row className="my-3">
                <Col xs={7} className="mt-5 pl-5">
                  <Row>
                    <Card.Text>
                      <p>MODEL:  </p>
                    </Card.Text>
                  </Row>
                  <Row className="mt-2">
                    <Card.Text>
                      <p>CAPTAIN:  </p>
                    </Card.Text>
                  </Row>
                  <Row className="mt-2">
                    <Card.Text>
                      <p>ROLE:  </p>
                    </Card.Text>
                  </Row>
                  <Row className="mt-2">
                    <Card.Text>
                      <p>DETAILS:  </p>
                    </Card.Text>
                  </Row>
                </Col>
                <Col xs={5} className="text-center" >
                  <Card.Img className="patch" />
                </Col>
              </Row>
            </Card.Body>
            <Row noGutters={true} className="mx-1 mb-1">
              <Col className="p-1">
                <Card.Img className="h-100 holoborder" />
              </Col>
              <Col className="p-1">
                <Card.Img className="h-100 holoborder" />
              </Col>
            </Row>
          </Card>
        </Card>
      </Container>
    )
  }
}