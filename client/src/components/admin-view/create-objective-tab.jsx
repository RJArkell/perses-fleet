import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export function CreateObjectiveTab(props) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [progress, setProgress] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://perses-fleet.herokuapp.com/api/objectives", {
      Title: title,
      Details: details,
      Progress: progress,
      Goal: goal
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open("/", "_self");
      })
      .catch(e => {
        alert("Error creating the objective");
        console.log(e);
      });
  };

  return (
    <Card>
      <Card.Header className="header text-center"><h4>Create Objective</h4></Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Progress</Form.Label>
            <Form.Control
              type="number"
              placeholder="aUEC"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Goal</Form.Label>
            <Form.Control
              type="number"
              placeholder="aUEC"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </Form.Group>
          <Button className="button" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}