import React from "react";
import { Card, Container } from 'react-bootstrap';
import { NewsCard } from "./news-card";

export class NewsView extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <Container fluid className="pagecontainer">
        <Card className="squared bb lb rb">
          <Card.Header className="header text-center"><h3>Fleet News</h3></Card.Header>
          {news.map(n => (
            <NewsCard key={n._id} n={n} />
          ))}
        </Card>
      </Container>
    )
  }
}