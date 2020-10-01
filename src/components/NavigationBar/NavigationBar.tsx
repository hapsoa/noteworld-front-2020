import React from "react";
import "./NavigationBar.scss";
import PageHistory from "../PageHistory/PageHistory";

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="NavigationBar">
        <PageHistory />
        <div style={{ flex: 1 }}></div>
        <div style={{ lineHeight: "40px", margin: "0 8px", fontSize: "16px" }}>
          Favorite
        </div>
      </div>
    );
  }
}

export default NavigationBar;
