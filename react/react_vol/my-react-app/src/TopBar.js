import React, { useEffect, useState } from "react";
import "./topbar.css"

export default function TopBar() {
    const toggleDropdown = () => {
        const dropdownContent = document.querySelector('.user-dropdown-content');
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
    }

    const logout = async () => {
        try {
            const response = await fetch('/api/oauth/logout', {
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
        <div class="top-bar">
            <div class="user-dropdown-content">
                <li class="user-dropdown-li">Mypage</li>
                <li class="user-dropdown-li">Stats</li>
                <li class="user-dropdown-li" onClick={logout}>Logout</li>
            </div>
            <img src="/home-logo.jpeg" class="home-logo"/>
            <div class="home-welcome">42 transcendence</div>
            <div class="user-profile-container">
                <div class="user-profile"
                onClick={toggleDropdown}>
                    <div 
                        class="user-img-container"
                    >
                        <img src="/ksuh.jpg" class="user-img" alt="profile-image"/>
                    </div>
                    <div class="user-content-container">
                        <p class="user-name">ksuh</p>
                    </div>
                </div>
            </div>
        </div>
    );
}