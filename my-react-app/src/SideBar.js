import React, { useEffect, useState } from "react";
import "./SideBar.css"
import Spinner from "./Spinner"
import SideBarUser from "./SideBarUser";
import FriendContainer from "./FriendContainer";
import BlockedUser from "./BlockedUser";

export default function SideBar() {
    const [loading, setLoading] = useState(true);

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
                <div id="sidebar">
                    <div id="sidebar-header">
                        <h3 id="sidebar-header-text">Casual Mode</h3>
                    </div>
                    <SideBarUser /> 
                    <FriendContainer />
                    <BlockedUser />
                </div>
            )}
        </div>
    );
}