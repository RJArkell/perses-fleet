import React from "react";
import Card from 'react-bootstrap/Card';

export class NewsCard extends React.Component {
  render() {
    const { n } = this.props;

    return (
      <Card className="m-1 infocard">
        <Card.Header className="infoheader"><h5>{n.Title}</h5></Card.Header>
        <Card.Body>
          <Card.Text><p>{n.Body}</p></Card.Text>
        </Card.Body>
      </Card>
    );
  }
}