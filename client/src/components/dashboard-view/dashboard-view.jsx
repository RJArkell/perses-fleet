import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class DashboardView extends React.Component {
  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rank");
    localStorage.removeItem("email");
    localStorage.removeItem("commendations");
    window.open("/", "_self");
    this.setState({
      userdata: null,
      user: null,
      rank: null,
      email: null
    });
  }

  render() {
    console.log(commendations)
    const { user, rank, email, commendations } = this.props;
    return (
      <Container fluid className="pagecontainer">
        <Card>
          <Card.Header className="header text-center"><h3>Welcome {rank}</h3></Card.Header>
          <Card.Body>
            <Card.Text className="pb-2">
              <p className="mb-2">HANDLE: {user}</p>
              <p className="mb-2">RANK: {rank}</p>
              <p className="mb-2">EMAIL: {email}</p>
              <p className="mb-2">COMMISSION:</p>
              <p className="mb-2">STATUS:</p>
              <p className="mb-2">COMMENDATIONS: </p>

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