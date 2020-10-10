import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export class EditObjective extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      details: '',
      progress: 0,
      goal: 0,
      unit: '',
      address: ''
    };
  }

  render() {
    const { o } = this.props
    var title = o.Title,
      details = o.Details,
      progress = o.Progress,
      goal = o.Goal,
      unit = o.Unit,
      address = o.Address

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.patch(`https://perses-fleet.herokuapp.com/api/objectives/${o._id}`, {
        Title: title,
        Details: details,
        Progress: progress,
        Goal: goal,
        Unit: unit,
        Address: address
      })
        .then(res => {
          console.log(res);
          alert("Objective updated successfully");
          window.open("/objectives", "_self");
        })
        .catch(e => {
          console.log(e);
          alert("Unable to update objective");
        });
    };

    const handleDelete = (e) => {
      e.preventDefault();
      axios.delete(`https://perses-fleet.herokuapp.com/api/objectives/${o._id}`)
        .then(res => {
          console.log(res);
          alert("Objective has been deleted");
          window.open("/objectives", "_self");
        })
        .catch(e => {
          console.log(e);
          alert("Unable to delete objective");
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
                <Form.Label>Details</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  defaultValue={details}
                  onChange={(e) => { details = e.target.value }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Progress</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={progress}
                  onChange={(e) => { progress = e.target.value }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Goal</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={goal}
                  onChange={(e) => { goal = e.target.value }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Progress Unit</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={unit}
                  onChange={(e) => { unit = e.target.value }}
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
              <Link to={`/objectives`}>
                <Button variant="contained" color="primary" className="button float-right mr-2">Return</Button>
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}