import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export class EditScreenshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      user: ''
    };
  }

  render() {
    const { s } = this.props
    var address = s.Address,
      user = s.user

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.patch(`https://perses-fleet.herokuapp.com/api/screenshots/${o._id}`, {
        Address: address,
        User: user
      })
        .then(res => {
          console.log(res);
          alert("Screenshot updated successfully");
          window.open("/operations", "_self");
        })
        .catch(e => {
          console.log(e);
          alert("Unable to update screenshot");
        });
    };

    const handleDelete = (e) => {
      e.preventDefault();
      axios.delete(`https://perses-fleet.herokuapp.com/api/screenshots/${s._id}`)
        .then(res => {
          console.log(res);
          alert("Screenshot has been deleted");
          window.open("/operations", "_self");
        })
        .catch(e => {
          console.log(e);
          alert("Unable to delete screenshot");
        });
    }

    return (
      <Container fluid className="pagecontainer">
        <Card className="pb-1">
          <Card.Header className="header text-center mb-1"><h3>Edit Screenshot</h3></Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="URL"
                  value={address}
                  onChange={(e) => { address = e.target.value }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Submitted By</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={user}
                  onChange={(e) => { user = e.target.value }}
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
