import React from "react";
import "./NavigationDrawer.scss";
import Nav from "react-bootstrap/Nav";
import SpaceComponent from "../SpaceComponent/SpaceComponent";

class Navigator extends React.Component {
  render() {
    return (
      <Nav defaultActiveKey="/home" className="flex-column navigation-drawer">
        <SpaceComponent />
        <div style={{ padding: "8px 16px" }}>total map mode</div>
        <div style={{ padding: "8px 16px" }}>exploring map mode</div>
        <div style={{ padding: "8px 16px", color: "#999999" }}>favorite</div>
        <div style={{ padding: "0 16px" }}>favorite page 1</div>
        <div style={{ padding: "0 16px" }}>favorite page 2</div>
        <div style={{ padding: "8px 16px", color: "#999999" }}>private</div>
        <div style={{ padding: "0 16px" }}>private page 1</div>
        <div style={{ padding: "0 16px" }}>private page 2</div>
        {/* <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link> */}
      </Nav>
    );
  }
}

export default Navigator;
