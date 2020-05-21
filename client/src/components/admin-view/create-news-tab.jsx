import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export function CreateNewsTab(props) {
  const [headline, setHeadline] = useState('');
  const [body, setBody] = useState('');
  const [linktext, setLinkText] = useState('');
  const [link, setLink] = useState('');
  const date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://perses-fleet.herokuapp.com/api/news", {
      Headline: headline,
      Date: date,
      Body: body,
      LinkText: linktext,
      Link: link
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open("/", "_self");
      })
      .catch(e => {
        alert("Error posting the content");
        console.log(e);
      });
  };

  return (
    <Card>
      <Card.Header className="header text-center"><h4>Create News Post</h4></Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Headline</Form.Label>
            <Form.Control
              type="text"
              placeholder="Headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link Text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Link Text"
              value={linktext}
              onChange={(e) => setLinkText(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            >
            </Form.Control>
          </Form.Group>
          <Button className="button" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}