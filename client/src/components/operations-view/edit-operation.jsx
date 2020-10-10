import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export class EditOperation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      details: '',
      date: null,
      time: null,
      assets: '',
      address: ''
    };
  }

  render() {
    const { o } = this.props
    var title = o.Title,
      details = o.Details,
      date = new Date(o.Date),
      time = o.Time,
      assets = o.Assets,
      address = o.Address

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
      axios.delete(`https://perses-fleet.herokuapp.com/api/operations/${o._id}`)
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
          <Card.Header className="header text-center mb-1"><h3>Edit {o.Title}</h3></Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={title}
                  onChange={(e) => { title = e.target.value }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Date (add one day to correct date)</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={date}
                  onChange={(e) => { date = e.target.value }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  defaultValue={time}
                  onChange={(e) => { time = e.target.value }}
                >
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Assets</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  defaultValue={assets}
                  onChange={(e) => { assets = e.target.value }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Details</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  defaultValue={details}
                  onChange={(e) => { details = e.target.value }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={address}
                  onChange={(e) => { address = e.target.value }}
                />
              </Form.Group>
              <Button className="button float-left" type="submit" onClick={handleDelete}>Delete</Button>
              <Button className="button float-right" type="submit" onClick={handleSubmit}>Update</Button>
              <Link to={`/operations`}>
                <Button variant="contained" color="primary" className="button float-right mr-2">Return</Button>
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
