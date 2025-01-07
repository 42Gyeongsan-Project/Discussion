import React from "react";
import { useDispatch } from 'react-redux';
import { profileFriend } from "./redux/actions/friendActions";
// import SideDropBox from "./SideDropbox";

export default function UserCard({ name, rating, status, idx }) {
  // let dropdowns = ["Play", "Profile"];
  // if (status != "available")
  //   dropdowns = ["Profile"];
  const dispatch = useDispatch();
  const handleProfile = () => {
    dispatch(profileFriend());
  }

  return (
    <div>
    <li class="list-group-item d-flex justify-content-between align-items-center"
      id="list-group"
      onClick={handleProfile}
    >
        <div class="user-name">{name}</div>
        <div class="user-rating">{rating}</div>
        <div class={`user-status ${status}`}></div>
    </li>
    {/* <SideDropBox idx={idx} dropdowns={dropdowns}/> */}
    </div>
  );
}