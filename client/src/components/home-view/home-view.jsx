import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { NewsCard } from "../news-card/news-card";

export class HomeView extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <Container fluid className="p-5">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100"
              src={require("/img/marine2.png")} />
            <Carousel.Caption>
              <h3>Explore new worlds</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img className="d-block w-100"
              src={require("/img/mining2.png")} />
            <Carousel.Caption>
              <h3>Build your fortune</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
              src={require("/img/combat2.png")} />
            <Carousel.Caption>
              <h3>Join the fight</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card className="mt-4">
          <Card.Header className="header text-center"><h3>Fleet News</h3></Card.Header>
          {news.map(n => (
            <NewsCard key={n._id} n={n} />
          ))}
        </Card>
        <Row className="mt-4">
          <Col>
            <Card className="h-100">
              <Card.Header className="header text-center"><h3>About Perses Fleet</h3></Card.Header>
              <Card.Body>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Header className="header text-center"><h3>Featured Screenshot</h3></Card.Header>
              <Card.Img className="h-100" src={require("/img/featured.png")} />
              <Card.Text className="text-center">
                Submitted by: c3sk
                </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeView;