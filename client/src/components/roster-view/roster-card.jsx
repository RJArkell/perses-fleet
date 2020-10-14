import React from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export class RosterCard extends React.Component {
  render() {
    const { u } = this.props;

    return (
      <Link to={`/profile/${u.Username}`}>
        <Card className="h-100 infocard rostercard squared">
          <Card.Header className="rosterheader"><h5>{u.Rank}</h5></Card.Header>
          <Card.Body>
            <Card.Text>
              <p>{u.Username}</p>
              {u.Commendations.map(c => {
                return <img src={c} />
              })}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  }
}