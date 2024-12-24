import React from "react";
import SideDropBox from "./SideDropbox";
import { useDispatch } from 'react-redux';
import { profileFriend } from "./redux/actions/friendActions";

export default function FriendCard({ name, idx, rating, status, isBlock }) {
  const dispatch = useDispatch();
  const handleProfile = () => {
    dispatch(profileFriend());
  }
  // let dropdowns = ["Play", "Chat", "Block", "Delete"];
  
  // if (isBlock)
  // {
  //   dropdowns = ["Play", "UnBlock", "Delete"];
  //   if (status !== "available")
  //     dropdowns = ["UnBlock", "Delete"];
  // }
  // else if (status !== "available")
  //   dropdowns = ["Chat", "Block", "Delete"];

  return (
    <div>
    <li class="list-group-item dropdown d-flex justify-content-between align-items-center" 
        id="list-group"
        onClick={handleProfile}
        // data-bs-toggle="dropdown"
        // aria-expanded="false"
        // type="button"
        >
        <div class="user-name">{name}</div>
        <div class="user-rating">{rating}</div>
        <div class={`user-status ${status}`}></div>
    </li>
      {/* <SideDropBox idx={idx} dropdowns={dropdowns}/> */}
    </div>
  );
}
