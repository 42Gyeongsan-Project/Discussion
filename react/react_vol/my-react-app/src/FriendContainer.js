import React, { useEffect, useState } from "react";
import Friends from "./Friends";
import "./SideBar.css"

export default function FriendContainer() {
    useEffect(() => {
    }, []);

    return (
        <div>
            <div id="sidebar-online-user">
                <div id="sidebar-online-header">
                    <h5 id="sidebar-online-text">Friends(1/1)</h5>
                </div>
                <Friends isBlock={0}/>
            </div>
        </div>
    );
}