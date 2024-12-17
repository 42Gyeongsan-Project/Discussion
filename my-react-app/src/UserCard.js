import React from "react";
import SideDropBox from "./SideDropbox";

export default function UserCard({ name, rating, status, idx }) {
  const dropdowns = ["Play", "Profile"]
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