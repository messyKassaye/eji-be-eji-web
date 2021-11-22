import React from "react";
import Categories from "./Categories";
import LivePost from "./LivePost";
import Posts from "./Posts";

export default function Main() {
  return (
    <div>
      <div class="grid grid-cols-4 gap-1">
        <div>
          <Categories />
        </div>
        <div className="col-span-2">
          <Posts />
        </div>
        <div>
          <LivePost />
        </div>
      </div>
    </div>
  );
}
