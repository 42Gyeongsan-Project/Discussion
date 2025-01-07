import React, { useEffect, useState } from "react";
import User from "./User";
import CheckBoxDiv from "./CheckBoxDiv";

export default function SideBarUser() {
    const [count, setCount] = useState(0);

    useEffect(() => {
    }, [count] );

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <div id="sidebar-online-user">
                <div id="sidebar-online-header">
                    <h5 id="sidebar-online-text">Online Users(75)
                        <i className="bi bi-arrow-clockwise fs-5" id="online-user-refresh" onClick={handleClick}></i>
                    </h5>
                    <CheckBoxDiv />
                </div>
                <User count={count}/>
            </div>
        </div>
    );
}