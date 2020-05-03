import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class DashboardView extends React.Component {
  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.open("/", "_self");
    this.setState({
      user: null
    });
  }

  render() {
    const { user, rank } = this.props;
    return (
      <Container fluid className="p-5">
        <Card>
          <Card.Header className="header text-center"><h3>Welcome {rank}</h3></Card.Header>
          <Card.Body>
            <Card.Text>
              <Link className="menulink" onClick={() => this.onLoggedOut()}>Logout</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}