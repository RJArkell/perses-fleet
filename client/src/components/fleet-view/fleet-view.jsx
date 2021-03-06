import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';

export class FleetView extends React.Component {
  render() {
    return (
      <Container fluid className="pagecontainer">
        <Card className="squared bb lb rb">
          <Card.Header className="header text-center"><h3>N.S.S. Terror</h3></Card.Header>
          <Row noGutters={true} className="py-4 tb bb">
            <Col xs={5} className="text-center p-1" >
              <Card.Img className="patch" src={"https://i.ibb.co/wLyKcgC/terrorpatch.png"} />
            </Col>
            <Col xs={7} className="pt-4 pr-5">
              <Row>
                <Card.Text>
                  <p>MODEL:  Aegis Hammerhead</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>CAPTAIN:  Admiral Malkovich</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>ROLE:  Heavy Gun Ship</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>STATUS:  Active</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>DETAILS:  The Aegis Hammerhead is a light, fast patrol ship bristling with six manned quad-linked turrets for optimal anti-fighter and anti-ordnance defense. It is also suited to support larger capital ships in a fleet or act as a flagship for fighter groups.</p>
                </Card.Text>
              </Row>
            </Col>
          </Row>
          <Row noGutters={true} className="my-2">
            <Col className="mr-1">
              <Card.Img className="h-100 tb rb bb squared" src={"https://i.ibb.co/0ZHYhkt/unknown.png"} />
            </Col>
            <Col className="ml-1">
              <Card.Img className="h-100 tb lb bb squared" src={"https://i.ibb.co/X2TxYqV/image.png"} />
            </Col>
          </Row>
        </Card>

        <Card className="squared bb lb rb">
          <Card.Header className="header text-center"><h3>N.S.S. Erebus</h3></Card.Header>
          <Row noGutters={true} className="py-4 tb bb">
            <Col xs={7} className="pt-4 pl-5">
              <Row>
                <Card.Text>
                  <p>MODEL:  Anvil Carrack</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>CAPTAIN:  Admiral Malkovich</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>ROLE:  Expedition</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>STATUS:  Active</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>DETAILS:  The Anvil Carrack features reinforced fuel tanks for long-duration flight, an advanced jump drive, and a dedicated computer core for jump charting operations. Originally a military exclusive, the Carrack is now available for civilian use. On-board accomodations include crew medical and repair facilities, and a mapping-oriented sensor suite.</p>
                </Card.Text>
              </Row>
            </Col>
            <Col xs={5} className="text-center p-1"  >
              <Card.Img className="patch" />
            </Col>
          </Row>
          <Row noGutters={true} className="my-2">
            <Col className="mr-1">
              <Card.Img className="h-100 tb rb bb squared" src={"https://i.ibb.co/WGLQp51/unknown-1.png"} />
            </Col>
            <Col className="ml-1">
              <Card.Img className="h-100 tb lb bb squared" src={"https://i.ibb.co/zRyMyRT/unknown-2.png"} />
            </Col>
          </Row>
        </Card>

        <Card className="squared bb lb rb">
          <Card.Header className="header text-center"><h3>Polaris</h3></Card.Header>
          <Row noGutters={true} className="py-4 tb bb">
            <Col xs={5} className="text-center p-1" >
              <Card.Img className="patch" />
            </Col>
            <Col xs={7} className="pt-4 pr-5">
              <Row>
                <Card.Text>
                  <p>MODEL:  RSI Polaris</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>CAPTAIN:  N/A</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>ROLE:  Corvette</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>STATUS:  In Production</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>DETAILS:  The RSI Polaris is a ship in the concept stage and will be filling the void between larger capital sized ships and non-capital ships that had been created when the original Idris grew in size significantly during production. At the length of around 155 meters the Polaris will be a Corvette. It has been mentioned that it will have a military focus.</p>
                </Card.Text>
              </Row>
            </Col>
          </Row>
          <Row noGutters={true} className="my-2">
            <Col className="mr-1">
              <Card.Img className="h-100 tb rb bb squared" />
            </Col>
            <Col className="ml-1">
              <Card.Img className="h-100 tb lb bb squared" />
            </Col>
          </Row>
        </Card>

        <Card className="squared bb lb rb">
          <Card.Header className="header text-center"><h3>Idris</h3></Card.Header>
          <Row noGutters={true} className="py-4 tb bb">
            <Col xs={7} className="pt-4 pl-5">
              <Row>
                <Card.Text>
                  <p>MODEL:  Aegis Idris-K</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>CAPTAIN:  N/A</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>ROLE:  Frigate</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>STATUS:  In Production</p>
                </Card.Text>
              </Row>
              <Row className="mt-2">
                <Card.Text>
                  <p>DETAILS:  The Aegis Idris-K is an aftermarket special edition of the Idris-P that features additional equipments tailored to dealing with the swarm threat of carrier-type ships. Compared to the Idris-P, Idris-K has an additional size 10 laser beam, four point defense turrets that replaced the remote turrets, and a missile turret that replaced a manned turret.</p>
                </Card.Text>
              </Row>
            </Col>
            <Col xs={5} className="text-center p-1" >
              <Card.Img className="patch" />
            </Col>
          </Row>
          <Row noGutters={true} className="my-2">
            <Col className="mr-1">
              <Card.Img className="h-100 tb rb bb squared" />
            </Col>
            <Col className="ml-1">
              <Card.Img className="h-100 tb lb bb squared" />
            </Col>
          </Row>
        </Card>
      </Container>
    )
  }
}