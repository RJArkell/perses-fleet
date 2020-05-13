import React from "react";
import { Container, Card } from "react-bootstrap";
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
            <Card.Text>
              <p>Username: {user}</p>
              <p>Rank: {rank}</p>
              <p>Email: {email}</p>
              <p>Commendations:</p>
              <Link to={`/updateprofile`} className="menulink">Update Information</Link><br />
              <Link className="menulink" onClick={() => this.onLoggedOut()}>Logout</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}