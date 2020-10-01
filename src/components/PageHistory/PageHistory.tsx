import React from "react";
import "./PageHistory.scss";
import { GiClover } from "react-icons/gi";

class PageHistory extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", marginLeft: "8px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <GiClover style={{ color: "green" }} />
          <div style={{ lineHeight: "40px" }}>page name</div>
        </div>
        <div style={{ margin: "0 4px", lineHeight: "40px" }}> / </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <GiClover style={{ color: "green" }} />
          <div style={{ lineHeight: "40px" }}>page name</div>
        </div>
      </div>
    );
  }
}

export default PageHistory;
