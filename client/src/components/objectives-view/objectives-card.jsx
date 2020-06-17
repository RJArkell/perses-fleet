import React from "react";
import { Row, Col, Card, ProgressBar, Button } from 'react-bootstrap';

export class ObjectivesCard extends React.Component {
  render() {
    const { o } = this.props;
    const bar = (o.Progress / o.Goal) * 100;
    var date = new Date(o.Date);
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
      <Card className="my-1 mx-2 infocard squared">
        <Row noGutters={true}>
          <Col xs={8}>
            <Card.Header className="infoheader">
              <Row noGutters={true}>
                <Col xs={11}>
                  <h4>{o.Title}</h4>
                </Col>
                <Col xs={1}>
                  {staff === "true" && <Button className="button float-right" type="submit" onClick={handleShow}>Edit</Button>}
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className="mx-4">
              <Row>
                <Card.Text>
                  <p>STARTED: {date.toDateString()}</p>
                </Card.Text>
              </Row>
              <Row className="pt-3">
                <Card.Text>
                  <p>DETAILS: </p>
                  <div className="pl-2" dangerouslySetInnerHTML={{ __html: o.Details }}></div>
                </Card.Text>
              </Row>
              <Row className="pt-4">
                <ProgressBar striped variant="info" className="w-100" animated now={bar} />
              </Row>
              <Row className="pt-2 justify-content-center">
                <Card.Text>
                  <p>{o.Progress} / {o.Goal} aUEC</p>
                </Card.Text>
              </Row>
            </Card.Body>
          </Col>
          <Col xs={4}>
            <Card.Img className="h-100" src={o.Address} />
          </Col>
        </Row>
      </Card>
    );
  }
}