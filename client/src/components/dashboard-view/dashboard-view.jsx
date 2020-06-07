import React from "react";
import { Container, Card, Button } from "react-bootstrap";
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
        <Card>
          <Card.Header className="header text-center"><h3>Welcome {rank}</h3></Card.Header>
          <Card.Body className="pl-5">
            <Card.Text className="pb-2">
              <p className="mb-2">HANDLE:   {user}</p>
              <p className="mb-2">RANK:   {rank}</p>
              <p className="mb-2">EMAIL:    {email}</p>
              <p className="mb-2">COMMISSION:   {commission}</p>
              <p className="mb-2">STATUS:   {status}</p>
              <p className="mb-2">COMMENDATIONS:</p>
              <div className="ml-5 mb-2">
                {commendations.map(c => {
                  return <img src={c} />
                })}
              </div>
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