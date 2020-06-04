import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { NewsCard } from "../news-view/news-card";

export class HomeView extends React.Component {
  render() {
    const { news, screenshots } = this.props;

    return (
      <Container fluid className="pagecontainer">
        <Carousel className="holoborder mb-2">
          <Carousel.Item>
            <img className="d-block w-100"
              src={"https://i.ibb.co/x5BmxtH/marine2.png"} />
            <Carousel.Caption>
              <h3>Explore new worlds</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img className="d-block w-100"
              src={"https://i.ibb.co/LZHDFwn/mining2.png"} />
            <Carousel.Caption>
              <h3>Build your fortune</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
              src={"https://i.ibb.co/1XW0kVh/combat2.png"} />
            <Carousel.Caption>
              <h3>Join the fight</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Card className="mb-2 pb-1">
          <Card.Header className="header text-center mb-1"><h3>Recent News</h3></Card.Header>
          {news.slice(0, 5).map(n => (
            <NewsCard key={n._id} n={n} />
          ))}
        </Card>

        <Row noGutters={true} className="mt-1">
          <Col className="h-100 mr-1">
            {screenshots.slice(0, 1).map(s => (
              <Card className="h-100 card" >
                <Card.Header className="header text-center"><h3>Featured Screenshot</h3></Card.Header>
                <Card.Img className="" src={s.Address} />
                <Card.Text className="text-center">
                  Submitted by: {s.User}
                </Card.Text>
              </Card>
            ))}
          </Col>
          <Col className="h-100 ml-1">
            <Card className="h-100 card">
              <Card.Header className="header text-center"><h3>About Perses Fleet</h3></Card.Header>
              <Card.Body>
                <Card.Text>
                  Text
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}