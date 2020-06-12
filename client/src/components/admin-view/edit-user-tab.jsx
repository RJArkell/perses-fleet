import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export function EditUserTab(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rank, setRank] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("https://perses-fleet.herokuapp.com/api/users/", {
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

  return (
    <Card className="squared">
      <Card.Header className="header text-center"><h4>Edit User</h4></Card.Header>
      <Card.Body>
        <Form>
          <Button className="button" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}