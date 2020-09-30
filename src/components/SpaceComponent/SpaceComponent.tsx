import React from "react";
import "./SpaceComponent.scss";
import { GiClover } from "react-icons/gi";

class SpaceComponent extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", padding: "8px 16px" }}>
        <GiClover style={{ color: "green", alignSelf: "center" }} />
        <div>Jaejong</div>
      </div>
    );
  }
}

export default SpaceComponent;
