import React from "react";
import "./home-view.scss";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export class HomeView extends React.Component {
  render() {
    return (
      <div className="home">
        <Container fluid>
          <Jumbotron className="text-center mb-5" style={{ backgroundColor: 'grey' }}>
            <h1>Perses Fleet</h1>
          </Jumbotron>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("/img/mole.png")}
              />
              <Carousel.Caption>
                <h3>Join our trading and mining expeditions</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("/img/arccorp.png")}
              />
              <Carousel.Caption>
                <h3>Keep the peace as part of our marine division</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("/img/hammerhead.png")}
              />
              <Carousel.Caption>
                <h3>Serve aboard our ships during combat operations</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Row className="mt-5">
            <Col xs={5}>
              <Card style={{ backgroundColor: 'darkgrey' }} className="">
                <Card.Header className="text-center" style={{ backgroundColor: 'grey' }}><h3>About Perses Fleet</h3></Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p>I'm giving you a night call to tell you how I feel
                    (We'll go all, all, all night long)
                    I want to drive you through the night, down the hills
                    (We'll go all, all, all night long)
                    I'm gonna tell you something you don't want to hear
                    (We'll go all, all, all night long)
                    I'm gonna show you where it's dark, but have no fear
                    (We'll go all, all, all night long)</p>
                    <p>There's something inside you
                    It's hard to explain
                    They're talking about you, boy
                    But you're still the same
                    There's something inside you
                    It's hard to explain
                    They're talking about you, boy
                    But you're still the same</p>
                    <p>I'm giving you a night call to tell you how I feel
                    (We'll go all, all, all night long)
                    I want to drive you through the night, down the hills
                    (We'll go all, all, all night long)
                    I'm gonna tell you something you don't want to hear
                    (We'll go all, all, all night long)
                    I'm gonna show you where it's dark, but have no fear
                    (We'll go all, all, all night long)</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={7}>
              <Card style={{ backgroundColor: 'darkgrey' }} className="">
                <Card.Header className="text-center" style={{ backgroundColor: 'grey' }}><h3>Latest Galactic News</h3></Card.Header>
                <Card style={{ backgroundColor: 'darkgrey' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>RSI - Yet Further News - 03.03.2020</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>Somehow even more things are broken.</Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ backgroundColor: 'darkgrey' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>Perses - News 2: Electric Boogaloo - 02.02.2020</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>Recruitment drive has begun! Join Us. Please. We need more turret slaves.</Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ backgroundColor: 'darkgrey' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>RSI - Some News - 01.01.2020</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>Everything is broken.</Card.Text>
                  </Card.Body>
                </Card>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeView;