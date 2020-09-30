import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import NavigatorDrawer from "./components/NavigationDrawer/NavigationDrawer";
import Navbar from "./components/NavigationBar/NavigationBar";
import Page from "./components/PageView/PageView";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Container fluid style={{ height: "100vh" }}>
        <Row style={{ height: "100%" }}>
          <NavigatorDrawer />
          <Col style={{ padding: 0 }}>
            <Navbar></Navbar>
            <Page></Page>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
