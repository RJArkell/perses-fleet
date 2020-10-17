import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

export class ProfileView extends React.Component {
  render() {
    const { u } = this.props;

    return (
      <Container className="profile" >
        <Card className="fb">
          <Card.Header className="header text-center"><h3>{u.Username}</h3></Card.Header>
          <Row noGutters={true} className="tb bb">
            <Col sm={12} lg={6}>
              <Card className="text-center squared">
                <Card.Header className="header"><h5>RANK</h5></Card.Header>
                <Card.Body>
                  <Card.Text className="my-3"><h5>{u.Rank}</h5></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={6}>
              <Card className="text-center squared">
                <Card.Header className="header"><h5>COMMENDATIONS</h5></Card.Header>
                <Card.Body>
                  <Card.Text className="my-3">
                    <div>
                      {u.Commendations.map(c => {
                        return <img src={c} />
                      })}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4}>
              <Card className="text-center squared">
                <Card.Header className="header"><h5>EMAIL</h5></Card.Header>
                <Card.Body>
                  <Card.Text className="my-3">{u.Email}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4}>
              <Card className="text-center squared">
                <Card.Header className="header"><h5>COMMISSION</h5></Card.Header>
                <Card.Body>
                  <Card.Text className="my-3"><h5>{u.Commission}</h5></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4}>
              <Card className="text-center squared">
                <Card.Header className="header"><h5>STATUS</h5></Card.Header>
                <Card.Body>
                  <Card.Text className="my-3"><h5>{u.Status}</h5></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    )
  }
}