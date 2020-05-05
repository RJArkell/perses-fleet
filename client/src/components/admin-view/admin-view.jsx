import React from "react";
import { Container, Card, Col, Tab, Row, TabContent, TabPane, TabContainer, Nav } from "react-bootstrap";
import { CreateNewsTab } from "./create-news-tab";
import { CreateUserTab } from "./create-user-tab";
import { CreateOperationTab } from "./create-operation-tab";
import { CreateObjectiveTab } from "./create-objective-tab";

export class AdminView extends React.Component {
  render() {
    return (
      <Container fluid className="px-5" >
        <Card>
          <Card.Header className="header text-center"><h3>Admin Panel</h3></Card.Header>
          <Tab.Container id="left-tabs-example" defaultActiveKey="news">
            <Row noGutters={true}>
              <Col sm={3}>
                <Card className="h-100 w-100">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="news" className="admintab">Post News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="op" className="admintab">Create Operation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="user" className="admintab">Register User</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="obj" className="admintab">Create Objective</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="news">
                    <CreateNewsTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="op">
                    <CreateOperationTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="user">
                    <CreateUserTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="obj">
                    <CreateObjectiveTab />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Card>
      </Container>
    )
  }
}