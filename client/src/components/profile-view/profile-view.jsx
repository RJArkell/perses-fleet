import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

export class ProfileView extends React.Component {
  render() {
    const { u } = this.props;
    const staff = localStorage.getItem("staff")

    const handleClose = (e) => {
      this.setState({
        show: true
      });
    };

    const handleShow = (e) => {
      this.setState({
        show: true
      });
    };

    return (
      <Container className="profile" >
        <Card className="w-100">
          <Card.Header className="header text-center">
            <Row noGutters={true}>
              <Col xs={11}>
                <h3>{u.Rank} {u.Username}</h3>
              </Col>
              <Col xs={1}>
                {staff === "true" && <Button className="button float-right" type="submit" onClick={handleShow}>Edit</Button>}
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>STATUS:    {u.Status}</p>
              <p>COMMISSION:    {u.Commission}</p>
              <p>COMMENDATIONS:</p>
              <div className="ml-5">
                {commendations.map(c => {
                  return <img src={c} />
                })}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}