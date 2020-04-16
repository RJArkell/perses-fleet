import React from "react";
import "./home-view.scss";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export class HomeView extends React.Component {
  render() {
    return (
      <div className="home">
        <Container fluid className="p-5">
          <Carousel className="vh-30">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("/img/marine2.png")}
              />
              <Carousel.Caption>
                <h3>Explore new worlds</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={require("/img/mining2.png")}
              />
              <Carousel.Caption>
                <h3>Build your fortune</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("/img/combat2.png")}
              />
              <Carousel.Caption>
                <h3>Join the fight</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Card className="mt-4">
            <Card.Header className="header text-center"><h3>Fleet News</h3></Card.Header>
            <Card className="m-1 infocard">
              <Card.Header className="infoheader"><h5>CIG - Star Citizen: Pillar Talk Video - 06.04.2020</h5></Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>Join Chris Roberts, Sean Tracy, Paul Reindell, and Eric Kieron Davis as they discuss the new content and tech debuting in Star Citizen Alpha 3.9.</p>
                  <a href="https://www.youtube.com/watch?v=tcMtPKSe2g4&feature=emb_title" target="blank">Watch the video</a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-1 infocard">
              <Card.Header className="infoheader"><h5>CIG - Roadmap Roundup - 03.04.2020</h5></Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>This week's Roadmap Roundup is now up. Includes updates on GrimHEX and upcoming ships as well as new info on Space Station Refinery Decks.</p>
                  <a href="https://robertsspaceindustries.com/spectrum/community/SC/forum/3/thread/roadmap-roundup-april-3rd-2020" target="blank">Read the thread</a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-1 infocard">
              <Card.Header className="infoheader"><h5>CIG - Roadmap Roundup - 27.03.2020</h5></Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>This week's Roadmap Roundup is now up. Changes to the roadmap include delays for Ship-to-Ship Docking and Ship-to-Station Docking, Security Systems,
                      and Space Station Cargo Decks.</p>
                  <a href="https://robertsspaceindustries.com/spectrum/community/SC/forum/3/thread/roadmap-roundup-march-27th-2020" target="blank">Read the thread</a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-1 infocard">
              <Card.Header className="infoheader"><h5>CIG - Roadmap Roundup - 20.03.2020</h5></Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>This week's Roadmap Roundup is now up. Updated features include Klescher Automated Prison, Prison Missions, and New Babbage Landing Zone Interiors.</p>
                  <a href="https://robertsspaceindustries.com/spectrum/community/SC/forum/3/thread/roadmap-roundup-march-20th-2020" target="blank">Read the thread</a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-1 infocard">
              <Card.Header className="infoheader"><h5>CIG - New Inside Star Citizen Video - 18.03.2020</h5></Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>Inside Star Citizen: Personal Systems - You want UI updates? You want another sprint report?
                      Well, friends, you're in luck. We have both, in this week's episode.</p>
                  <a href="https://www.youtube.com/watch?v=qSZiOxyVGmI&feature=emb_title" target="blank">Watch the video</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card>
          <Row className="mt-4">
            <Col xs={4}>
              <Card className="h-100">
                <Card.Header className="header text-center"><h3>About Perses Fleet</h3></Card.Header>
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
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={8}>
              <Card className="h-100">
                <Card.Header className="header text-center"><h3>Featured Screenshot</h3></Card.Header>
                <Card.Img className="h-100" src={require("/img/featured.png")} />
                <Card.Text className="text-center">
                  Submitted by: C3SK
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default HomeView;