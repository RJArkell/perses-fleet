import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

export function EditOperation(props) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [assets, setAssets] = useState('');
  const [address, setAddress] = useState('');
  const { o } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`https://perses-fleet.herokuapp.com/api/operations/${o._id}`, {
      Title: title,
      Details: details,
      Date: date,
      Time: time,
      Assets: assets,
      Address: address
    })
      .then(res => {
        const data = res.data;
        console.log(data);
        alert("Operation updated successfully");
        window.open("/operations", "_self");
      })
      .catch(e => {
        console.log(e);
        alert("Unable to update operation");
      });
  };

  return (
    <Container fluid className="pagecontainer">
      <Card className="pb-1">
        <Card.Header className="header text-center mb-1"><h3>Edit {o.Title}</h3></Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={o.Title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date (add one day to correct date)</Form.Label>
              <Form.Control
                type="date"
                defaultValue={o.Date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                defaultValue={o.Time}
                onChange={(e) => setTime(e.target.value)}
              >
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                defaultValue={o.Details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Assets</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                defaultValue={o.Assets}
                onChange={(e) => setAssets(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                defaultValue={o.Address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Button className="button float-right mr-2" type="submit" onClick={handleSubmit}>Update</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}
