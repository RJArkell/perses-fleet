import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class DashboardView extends React.Component {
  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rank");
    localStorage.removeItem("email");
    window.open("/", "_self");
    this.setState({
      user: null,
      rank: null,
      email: null
    });
  }

  render() {
    const { user, rank, email } = this.props;
    return (
      <Container fluid className="p-5">
        <Card>
          <Card.Header className="header text-center"><h3>Welcome {rank}</h3></Card.Header>
          <Card.Body>
            <Card.Text className="pb-2">
              <p>Username: {user}</p>
              <p>Rank: {rank}</p>
              <p>Email: {email}</p>
              <p>Commendations:</p>
            </Card.Text>
            <Link to={`/updateprofile`}>
              <Button variant="contained" color="primary" className="button">Update Information</Button>
            </Link>
            <Button className="button" onClick={() => this.onLoggedOut()}>Logout</Button>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}