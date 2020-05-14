import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export function CreateOperationTab(props) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [assets, setAssets] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://perses-fleet.herokuapp.com/api/operations", {
      Title: title,
      Details: details,
      Date: date,
      Time: time,
      Assets: assets
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open("/", "_self");
      })
      .catch(e => {
        alert("error creating the operation");
        console.log(e);
      });
  };

  return (
    <Card>
      <Card.Header className="header text-center"><h4>Create Operation</h4></Card.Header>
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
              type="text"
              placeholder="Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Time</Form.Label>
            <Form.Control
              as="select"
              custom
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option>00:00</option>
              <option>01:00</option>
              <option>02:00</option>
              <option>03:00</option>
              <option>04:00</option>
              <option>05:00</option>
              <option>06:00</option>
              <option>07:00</option>
              <option>08:00</option>
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
              <option>23:00</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Assets</Form.Label>
            <Form.Control
              type="text"
              placeholder="assets"
              value={assets}
              onChange={(e) => setAssets(e.target.value)}
            />
          </Form.Group>
          <Button className="button" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}