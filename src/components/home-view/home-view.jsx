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
        <Container fluid className="pb-5">
          <Jumbotron className="text-center border border-info" style={{ backgroundColor: 'grey' }}>
            <h1>Perses Fleet</h1>
          </Jumbotron>
          <Row className="mt-4">
            <Col xs={5}>
              <Card style={{ backgroundColor: 'darkgrey' }} className="border border-info">
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
              <Card style={{ backgroundColor: 'darkgrey' }} className="border border-info mt-4">
                <Card.Header className="text-center" style={{ backgroundColor: 'grey' }}><h3>Screenshot of the Week</h3></Card.Header>
                <Card.Img src={require("/img/featured.png")} />
                <Card.Text className="text-center">
                  Submitted by: C3SK
                </Card.Text>
              </Card>
            </Col>
            <Col xs={7}>
              <Carousel className="border border-info">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("/img/marine.png")}
                  />
                  <Carousel.Caption>
                    <h3>Explore new worlds</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={require("/img/mining.png")}
                  />
                  <Carousel.Caption>
                    <h3>Build your fortune</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("/img/combat.png")}
                  />
                  <Carousel.Caption>
                    <h3>Join the fight</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <Card style={{ backgroundColor: 'darkgrey' }} className="border border-info mt-4">
                <Card.Header className="text-center" style={{ backgroundColor: 'grey' }}><h3>Latest Galactic News</h3></Card.Header>
                <Card style={{ backgroundColor: 'darkgrey' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>CIG - Roadmap Roundup - 20.03.2020</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <p>This week's Roadmap Roundup is now up. Updated features include Klescher Automated Prison, Prison Missions, and New Babbage Landing Zone Interiors.</p>
                      <a href="https://robertsspaceindustries.com/spectrum/community/SC/forum/3/thread/roadmap-roundup-march-20th-2020" target="blank">Read the thread</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ backgroundColor: 'darkgrey' }}>
                  <Card.Header style={{ backgroundColor: 'grey' }}><h5>CIG - New Inside Star Citizen Video - 18.03.2020</h5></Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <p>Inside Star Citizen: Personal Systems - You want UI updates? You want another sprint report?
                      Well, friends, you're in luck. We have both, in this week's episode.</p>
                      <a href="https://www.youtube.com/watch?v=qSZiOxyVGmI&feature=emb_title" target="blank">Check out the video</a>
                    </Card.Text>
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