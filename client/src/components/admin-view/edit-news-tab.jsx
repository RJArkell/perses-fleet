import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export function EditNewsTab(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rank, setRank] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://perses-fleet.herokuapp.com/api/news", {
      Username: username,
      Password: password,
      Email: email,
      Rank: rank
    })
      .then(res => {
        const data = res.data;
        console.log(data);
        window.open("/", "_self");
      })
      .catch(e => {
        console.log("error registering the user")
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`https://edge-of-umbra.herokuapp.com/users/${localStorage.getItem('user')}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(res => {
        alert("Your account has been deleted");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.open("/", "_self");
      })
      .catch(e => {
        alert("Error deleting the account");
      });
  }

  return (
    <Card>
      <Card.Header className="header text-center"><h4>Edit News Post</h4></Card.Header>
      <Card.Body>
        <Form>
          <Button className="button" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
        <Button variant="danger" type="submit" onClick={handleDelete}>Delete account</Button>
      </Card.Body>
    </Card>
  );
}