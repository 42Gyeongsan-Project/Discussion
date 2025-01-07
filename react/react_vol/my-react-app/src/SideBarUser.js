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

    const getData = async () => {
        try {
            const response = await fetch('/get-data', {
                method: 'GET'
            });

            const data = await response.json(); // JSON 형식의 데이터
            if (data)
            {
                alert("성공!");
            }
            else
            {
                alert("데이터 api 호출은 성공했지만 뭔가 오류")
            }
        } catch(error)
        {
            console.log(error);
            alert("에러");
        }
    }

    return (
        <div>
            <div id="sidebar-online-user">
                <div id="sidebar-online-header">
                    <h5 id="sidebar-online-text">
                        Online Users(75)
                        <i className="bi bi-arrow-clockwise fs-5" id="online-user-refresh" onClick={handleClick}></i>
                        <button onClick={getData}>API</button>
                    </h5>
                    <CheckBoxDiv />
                </div>
                <User count={count}/>
            </div>
        </div>
    );
}