import React from "react";
import { Container, Card, Col, Tab, Row, TabContent, TabPane, TabContainer, Nav } from "react-bootstrap";
import { CreateNewsTab } from "./create-news-tab";
import { CreateUserTab } from "./create-user-tab";

export class AdminView extends React.Component {
  render() {
    return (
      <Container fluid className="px-5" >
        <Card>
          <Card.Header className="header text-center"><h3>Admin Panel</h3></Card.Header>
          <Tab.Container id="left-tabs-example" defaultActiveKey="pnews">
            <Row noGutters={true}>
              <Col sm={3}>
                <Card className="h-100 w-100">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="pnews" className="admintab">Post News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="enews" className="admintab">Edit News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="cop" className="admintab">Create Operation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="eop" className="admintab">Edit Operation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="cuser" className="admintab">Create User</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="euser" className="admintab">Edit User</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="cobj" className="admintab">Create Objective</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="eobj" className="admintab">Edit Objective</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="pnews">
                    <CreateNewsTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="cuser">
                    <CreateUserTab />
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