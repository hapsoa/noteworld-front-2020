import React from "react";
import "./PageHistory.scss";
import { GiClover } from "react-icons/gi";

class PageHistory extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <GiClover style={{ color: "green", alignSelf: "center" }} />
          <div style={{ textAlign: "center" }}>page name</div>
        </div>
        <div style={{ margin: "0 4px" }}>-+</div>
        <div style={{ display: "flex" }}>
          <GiClover style={{ color: "green", alignSelf: "center" }} />
          <div>page name</div>
        </div>
      </div>
    );
  }
}

export default PageHistory;
