import React from "react";
import Card from 'react-bootstrap/Card';

export class UserCard extends React.Component {
  render() {
    const { u } = this.props;

    return (
      <Card className="m-1 infocard">
        <Card.Header className="infoheader"><h5>{u.Rank}</h5></Card.Header>
        <Card.Body>
          <Card.Text>{u.Username}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}