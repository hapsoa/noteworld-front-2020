import React from "react";
import "./Page.scss";
// import Col from "react-bootstrap/Col";
// import Nav from "react-bootstrap/Nav";

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="Page">
        <img
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt=""
          style={{ height: "200px", objectFit: "cover" }}
        />
      </div>
    );
  }
}

export default NavigationBar;
