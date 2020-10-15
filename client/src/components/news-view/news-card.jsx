import React from "react";
import { Card, Modal, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export class NewsCard extends React.Component {
  render() {
    const { n } = this.props;
    var date = new Date(n.Date);
    const staff = localStorage.getItem("staff")

    return (
      <div>
        <Card className="mb-2 infocard squared tb bb">
          <Card.Header className="infoheader">
            <Row noGutters={true}>
              <Col xs={11}>
                <h5>{n.Headline} - {date.toDateString()}</h5>
              </Col>
              <Col xs={1}>
                {staff === "true" && <Link to={`/editnews/${n._id}`}><Button className="button mr-2 float-right" type="submit">Edit</Button></Link>}
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <div dangerouslySetInnerHTML={{ __html: n.Body }}></div>
              <br />
              <a className="textlink" target="_blank" href={n.Link} >{n.LinkText}</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div >
    );
  }
}