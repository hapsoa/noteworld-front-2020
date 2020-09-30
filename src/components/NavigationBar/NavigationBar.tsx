import React from "react";
import "./NavigationBar.scss";
import PageHistory from "../PageHistory/PageHistory";

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="NavigationBar">
        <PageHistory />
        <div style={{ flex: 1 }}></div>
        <div>Favorite</div>
      </div>
    );
  }
}

export default NavigationBar;
