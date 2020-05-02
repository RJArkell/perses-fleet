import React from "react";
import { Container, Card, Tabs, Tab, Row } from "react-bootstrap";
import { CreateNewsTab } from "./create-news-tab";
import { CreateUserTab } from "./create-user-tab";

export class AdminView extends React.Component {
  render() {
    return (
      <Container fluid className="p-5" >
        <Card>
          <Card.Header className="header text-center"><h3>Admin Panel</h3></Card.Header>
          <Tabs defaultActiveKey="news">
            <Tab eventKey="news" title="Post News">
              <CreateNewsTab />
            </Tab>
            <Tab eventKey="user" title="Create User">
              <CreateUserTab />
            </Tab>
          </Tabs>
        </Card>
      </Container>
    )
  }
}