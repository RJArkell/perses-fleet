import React from "react";
import ReactDOM from "react-dom";
import "./home-view.scss";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'

export class HomeView extends React.Component {
  render() {
    return (
      <div className="home">
        <Container fluid>
          <Jumbotron className="text-center" style={{ backgroundColor: 'grey' }}>
            <h1>Perses Fleet</h1>
          </Jumbotron>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("/img/mole.png")}
              />
              <Carousel.Caption>
                <h3>Check out this shit</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("/img/arccorp.png")}
              />
              <Carousel.Caption>
                <h3>Damn ain't that some shit</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("/img/hammerhead.png")}
              />
              <Carousel.Caption>
                <h3>Aw hell no, look at that shit</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default HomeView;