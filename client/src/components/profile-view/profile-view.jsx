import React from "react";
import { Container, Card } from "react-bootstrap";

export class ProfileView extends React.Component {
  render() {
    const { u } = this.props;
    return (
      <Container className="profile" >
        <Card>
          <Card.Header className="header text-center"><h3>{u.Rank} {u.Username}</h3></Card.Header>
          <Card.Body>
            <Card.Text>
              <p>STATUS:  {u.Status}</p>
              <p>COMMISSION:  {u.Commission}</p>
              <p>COMMENDATIONS:  </p>
              {u.Commendations.map(c => {
                return <img src={c} />
              })}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}