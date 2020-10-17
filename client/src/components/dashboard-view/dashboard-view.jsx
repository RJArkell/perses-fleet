import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export class DashboardView extends React.Component {
  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rank");
    localStorage.removeItem("email");
    localStorage.removeItem("commission");
    localStorage.removeItem("commendations");
    localStorage.removeItem("status");
    localStorage.removeItem("staff");
    window.open("/", "_self");
    this.setState({
      user: null,
      rank: null,
      email: null,
      commission: null,
      status: null,
      commendations: []
    });
  }

  render() {
    const { user, rank, email, commission, status, commendations } = this.props;

    return (
      <Container fluid className="pagecontainer">
        <Card className="squared bb lb rb">
          <Card.Header className="header text-center"><h3>{user}</h3></Card.Header>
          <Row noGutters={true} className="tb">
            <Col sm={12} lg={6}>
              <Card className="text-center squared fb">
                <Card.Header className="header"><h5>RANK</h5></Card.Header>
                <Card.Body>
                  <Card.Text className="my-3"><h5>{rank}</h5></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={6} className="text-center">
              <Card className="text-center squared fb">
                <Card.Header className="header"><h5>COMMENDATIONS</h5></Card.Header>
                <Card.Body>
                  <Card.Text className="my-3">
                    <div>
                      {commendations.map(c => {
                        return <img src={c} />
                      })}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4}>
              <Card className="text-center squared fb">
                <Card.Header className="header"><h5>EMAIL</h5></Card.Header>
                <Card.Body>
                  <Card.Text className="my-3"><h5>{email}</h5></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4}>
              <Card className="text-center squared fb">
                <Card.Header className="header"><h5>COMMISSION</h5></Card.Header>
                <Card.Body>
                  <Card.Text className="my-3"><h5>{commission}</h5></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4}>
              <Card className="text-center squared fb">
                <Card.Header className="header"><h5>STATUS</h5></Card.Header>
                <Card.Body>
                  <Card.Text className="my-3"><h5>{status}</h5></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div>
            <Link to={`/editprofile`}>
              <Button variant="contained" color="primary" className="button float-right squared">Update Information</Button>
            </Link>
            <Link to={`/editpassword`}>
              <Button variant="contained" color="primary" className="button float-right squared">Update Password</Button>
            </Link>
            <Button className="button float-right squared" onClick={() => this.onLoggedOut()}>Logout</Button>
          </div>
        </Card>
      </Container >
    )
  }
}