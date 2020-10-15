import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export function EditFleetTab(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://perses-fleet.herokuapp.com/api/news", {
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
    <Card className="squared tb lb">
      <Card.Header className="header text-center"><h4>Edit Fleet Page</h4></Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Ship One Name</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship One Patch</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship One Details</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship One Left Picture</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship One Right Picture</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Two Name</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Two Patch</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Two Details</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Two Left Picture</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Two Right Picture</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Three Name</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Three Patch</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Three Details</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Three Left Picture</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Three Right Picture</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Four Name</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Four Patch</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Four Details</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Four Left Picture</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ship Four Right Picture</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Button className="button float-right mr-2" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}