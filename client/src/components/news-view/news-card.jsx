import React from "react";
import Card from 'react-bootstrap/Card';

export class NewsCard extends React.Component {
  render() {
    const { n } = this.props;
    var date = new Date(n.Date);

    return (
      <Card className="my-1 mx-2 infocard">
        <Card.Header className="infoheader"><h5>{n.Headline} - {date.toDateString()}</h5></Card.Header>
        <Card.Body>
          <Card.Text>
            <p>{n.Body}</p>
            <br></br>
            <a target="_blank" href={n.Link} >{n.LinkText}</a>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}