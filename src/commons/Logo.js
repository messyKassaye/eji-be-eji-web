import { Typography } from "antd";
import React from "react";

export default function Logo() {
  const { Title } = Typography;
  return (
    <div className="flex">
      <Title level={2}>
        <span style={{ color: "#97d165" }}>Eji</span>
        <span style={{ color: "#fc9491" }}>BE</span>
        <span style={{ color: "#97d165" }}>Eji</span>
      </Title>
    </div>
  );
}
