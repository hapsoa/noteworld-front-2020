import React from "react";
import "./NavigationDrawer.scss";
import Nav from "react-bootstrap/Nav";
import SpaceComponent from "../SpaceComponent/SpaceComponent";

class Navigator extends React.Component {
  render() {
    return (
      <Nav defaultActiveKey="/home" className="flex-column navigation-drawer">
        <SpaceComponent />
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    );
  }
}

export default Navigator;
