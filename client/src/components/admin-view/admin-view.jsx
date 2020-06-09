import React from "react";
import { Container, Card, Col, Tab, Row, TabContent, TabPane, TabContainer, Nav } from "react-bootstrap";
import { CreateNewsTab } from "./create-news-tab";
import { CreateUserTab } from "./create-user-tab";
import { CreateOperationTab } from "./create-operation-tab";
import { CreateObjectiveTab } from "./create-objective-tab";
import { CreateScreenshotTab } from "./create-screenshot-tab";
import { EditNewsTab } from "./edit-news-tab";
import { EditOperationTab } from "./edit-operation-tab";
import { EditUserTab } from "./edit-user-tab";
import { EditObjectiveTab } from "./edit-objective-tab";
import { EditScreenshotTab } from "./edit-screenshot-tab";

export class AdminView extends React.Component {
  render() {
    return (
      <Container fluid className="pagecontainer" >
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
                    <Nav.Item>
                      <Nav.Link eventKey="scrn" className="admintab">Add Screenshot</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="enews" className="admintab">Edit News Post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="eop" className="admintab">Edit Operation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="euser" className="admintab">Edit User</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="eobj" className="admintab">Edit Objective</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="escrn" className="admintab">Edit Screenshot</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="news"><CreateNewsTab /></Tab.Pane>
                  <Tab.Pane eventKey="op"><CreateOperationTab /></Tab.Pane>
                  <Tab.Pane eventKey="user"><CreateUserTab /></Tab.Pane>
                  <Tab.Pane eventKey="obj"><CreateObjectiveTab /></Tab.Pane>
                  <Tab.Pane eventKey="scrn"><CreateScreenshotTab /></Tab.Pane>
                  <Tab.Pane eventKey="enews"><EditNewsTab /></Tab.Pane>
                  <Tab.Pane eventKey="eop"><EditOperationTab /></Tab.Pane>
                  <Tab.Pane eventKey="euser"><EditUserTab /></Tab.Pane>
                  <Tab.Pane eventKey="eobj"><EditObjectiveTab /></Tab.Pane>
                  <Tab.Pane eventKey="escrn"><EditScreenshotTab /></Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Card>
      </Container>
    )
  }
}