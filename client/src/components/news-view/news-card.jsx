import React from "react";
import { Card, Modal, Button, Row, Col } from 'react-bootstrap';

export class NewsCard extends React.Component {
  render() {
    const { n } = this.props;
    const show = false;
    var date = new Date(n.Date);
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
      <div>
        <Card className="my-1 mx-2 infocard squared">
          <Card.Header className="infoheader">
            <Row noGutters={true}>
              <Col xs={11}>
                <h5>{n.Headline} - {date.toDateString()}</h5>
              </Col>
              <Col xs={1}>
                {staff === "true" && <Button className="button float-right" type="submit" onClick={handleShow}>Edit</Button>}
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <div dangerouslySetInnerHTML={{ __html: n.Body }}></div>
              <br />
              <a target="_blank" href={n.Link} >{n.LinkText}</a>
            </Card.Text>
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={handleClose}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div >
    );
  }
}