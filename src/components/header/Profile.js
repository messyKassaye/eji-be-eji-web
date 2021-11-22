import { Button } from "antd";
import React from "react";

export default function Profile() {
  return (
    <div className="flex items-center mr-20">
      {/**Mobile view */}
      <Button className="md:invisible">Login</Button>

      {/**Desktop and large view */}
      <div className="flex hidden md:block items-center">
        <Button size="large" className="mr-20 text-5xl" type="link">
          Login
        </Button>
        <Button size="large" type="primary">
          Sign up
        </Button>
      </div>
    </div>
  );
}
