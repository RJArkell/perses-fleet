import React from "react";
import { Container, Carousel, Row, Col, Card } from "react-bootstrap";
import { NewsCard } from "../news-view/news-card";

export class HomeView extends React.Component {
  render() {
    const { news, screenshots } = this.props;

    return (
      <Container fluid className="pagecontainer">
        <Card className="bb lb rb">
          <Carousel className="mb-2 bb">
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

          <Card className="squared tb">
            <Card.Header className="header text-center"><h3>Recent News</h3></Card.Header>
            {news.slice(0, 3).map(n => (
              <NewsCard key={n._id} n={n} />
            ))}
          </Card>

          <Row noGutters={true} className="h-100">
            <Col className="h-100">
              {screenshots.slice(0, 1).map(s => (
                <Card className="h-100 squared rb tb mr-1" >
                  <Card.Header className="header text-center"><h3>Featured Screenshot</h3></Card.Header>
                  <Card.Img className="squared tb" src={s.Address} />
                </Card>
              ))}
            </Col>

            <Col className="h-100">
              <Card className="h-100 squared tb lb ml-1">
                <Card.Header className="header text-center"><h3>About Perses Fleet</h3></Card.Header>
                <Card.Body className="tb 30vh">
                  <Card.Text>
                    <p>Awaiting orders, Admiral.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}