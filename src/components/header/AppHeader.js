import { Divider } from "antd";
import React from "react";
import Logo from "../../commons/Logo";
import Profile from "./Profile";
import Search from "./Search";
export default function AppHeader() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex  justify-between items-start md:p-5">
        <Logo />
        <Search />
        <Profile />
      </div>
      <div style={{ marginTop: -30 }}>
        <Divider />
      </div>
    </div>
  );
}
