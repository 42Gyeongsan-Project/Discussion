import React from "react";
import SideDropBox from "./SideDropbox";

export default function FriendCard({ name, idx, rating, status, isBlock }) {
  let dropdowns = ["Play", "Chat", "Block", "Delete"];
  
  if (isBlock)
    dropdowns = ["Play", "UnBlock", "Delete"];

  return (
    <div>
    <li class="list-group-item dropdown d-flex justify-content-between align-items-center" 
        id="list-group"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        type="button"
        >
        <div class="user-name">{name}</div>
        <div class="user-rating">{rating}</div>
        <div class={`user-status ${status}`}></div>
    </li>
      <SideDropBox idx={idx} dropdowns={dropdowns}/>
    </div>
  );
}
