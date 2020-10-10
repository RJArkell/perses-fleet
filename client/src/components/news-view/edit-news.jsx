import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export class EditNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Headline: '',
      Body: '',
      Linktext: '',
      Link: ''
    };
  }

  render() {
    const { n } = this.props
    var headline = n.Headline,
      body = n.Body,
      linktext = n.LinkText,
      link = n.link

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.patch(`https://perses-fleet.herokuapp.com/api/news/${n._id}`, {
        Headline: headline,
        Body: body,
        Linktext: linktext,
        Link: link
      })
        .then(res => {
          console.log(res);
          alert("Operation updated successfully");
          window.open("/operations", "_self");
        })
        .catch(e => {
          console.log(e);
          alert("Unable to update operation");
        });
    };

    const handleDelete = (e) => {
      e.preventDefault();
      axios.delete(`https://perses-fleet.herokuapp.com/api/news/${n._id}`)
        .then(res => {
          console.log(res);
          alert("Operation has been deleted");
          window.open("/operations", "_self");
        })
        .catch(e => {
          console.log(e);
          alert("Unable to delete operation");
        });
    }

    return (
      <Container fluid className="pagecontainer">
        <Card className="pb-1">
          <Card.Header className="header text-center mb-1"><h3>Edit {n.Headline}</h3></Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Headline"
                  value={headline}
                  onChange={(e) => { headline = e.target.value }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Body</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Body"
                  value={body}
                  onChange={(e) => { body = e.target.value }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Link Text</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Link Text"
                  value={linktext}
                  onChange={(e) => { linktext = e.target.value }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Link"
                  value={link}
                  onChange={(e) => { link = e.target.value }}
                >
                </Form.Control>
              </Form.Group>
              <Button className="button float-left" type="submit" onClick={handleDelete}>Delete</Button>
              <Button className="button float-right" type="submit" onClick={handleSubmit}>Update</Button>
              <Link to={`/news`}>
                <Button variant="contained" color="primary" className="button float-right mr-2">Return</Button>
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
