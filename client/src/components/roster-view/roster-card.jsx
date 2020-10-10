import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export class RosterCard extends React.Component {
  render() {
    const { u } = this.props;

    return (
      <Card className="h-100 infocard squared">
        <Card.Header className="infoheader"><h5>{u.Rank}</h5></Card.Header>
        <Card.Body>
          <Card.Text>
            <p><Link className="textlink" to={`/profile/${u.Username}`}>{u.Username}</Link></p>
            {u.Commendations.map(c => {
              return <img src={c} />
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}