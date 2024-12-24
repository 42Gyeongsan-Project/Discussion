import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./SideBar.css"
import Spinner from "./Spinner"
import SideBarUser from "./SideBarUser";
import FriendContainer from "./FriendContainer";
import BlockedUser from "./BlockedUser";
import Profile from "./Profile";
import TopBar from "./TopBar";

export default function SideBar() {
    const [loading, setLoading] = useState(true);
    const state = useSelector(state => state.profileReducer.profileIdx);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            { loading ? (
                <Spinner/>
            ) : (
                <>
                <div id="sidebar">
                    {state && (
                        <Profile />
                    )}
                    <div id="sidebar-header">
                        <h3 id="sidebar-header-text">Casual Mode</h3>
                    </div>
                    <SideBarUser /> 
                    <FriendContainer />
                    <BlockedUser />
                </div>
                <TopBar />
                </>
            )}
        </div>
    );
}