import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { profileFriend } from "./redux/actions/friendActions";
import { toggleFriend } from './redux/actions/friendActions';

// 상대전적
// membership
// win, lose, tournament win, tournament lose
// highest, current rating

export default function Profile() {
    const dispatch = useDispatch();

    useEffect(() => {
    }, []);

    const handleClose = () => {
        dispatch(profileFriend());
    };

    const toggleDropdown = () => {
        // 드롭다운 내용 토글
        const dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
    }

    const handleChat = () => {
        dispatch(toggleFriend(0));
        toggleDropdown();
    };

    return (
        <div class="profile-container">
            <div class="profile-image-header">
                <div class="profile-header">
                    <img class="profile-icon" 
                        src="/profile.png" 
                        alt="profile icon" 
                        onClick={toggleDropdown}    
                    />
                    <div class="dropdown-content">
                        <li 
                            class="dropdown-li"
                            onClick={handleChat}
                        >
                        Chat
                        </li>
                        <li class="dropdown-li">Block</li>
                        <li class="dropdown-li">UnBlock</li>
                    </div>
                </div>
                <button type="button" 
                    class="btn-close"
                    id="profile-close"
                    aria-label="Close"
                    onClick={handleClose}
                ></button>
            </div>
            <div class="profile-main">
                <div class="profile-image-container">
                    <div class="profile-image-box">
                        <img class="profile-image" src="/ksuh.jpg" alt="profile image" />
                        <div class="profile-image-userid">
                            ksuh
                            <button class="add-btn">
                            <img src="/add-friend.png" alt="friend add icon" class="icon"/>
                            </button>

                            <button class="delete-btn">
                            <img src="/delete-friend.png" alt="friend delete icon" class="icon"/>
                            </button>
                        </div>
                        <div class="profile-image-login">Last login</div>
                        <div class="profile-image-login">3 minutes ago</div>
                    </div>
                </div>
                <div class="profile-content">
                    <div class="profile-content-box-top">
                        <div class="profile-content-box" id="profile-rating">
                            <div class="profile-rating-top">Current</div>
                            <div class="profile-record">1717</div>
                        </div>
                        <div class="profile-content-box" id="profile-rating">
                            <div class="profile-rating-top">Highest</div>
                            <div class="profile-record">1717</div>
                        </div>
                    </div>
                    <div class="profile-content-box-top">
                        <div class="profile-content-box" id="profile-rating">
                            <div class="profile-record-top">Casual</div>
                            <div class="profile-record">1W 1L (50%)</div>
                        </div>
                        <div class="profile-content-box" id="profile-rating">
                            <div class="profile-record-top">Tournament</div>
                            <div class="profile-record">1W 4L (20%)</div>
                        </div>
                    </div>
                    <div class="profile-content-box-top">
                        <div class="profile-content-box">
                            <div class="profile-record-top">You vs ksuh</div>
                            <div class="profile-record">1W 1L (50%)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="profile-bottom">
                <div class="btn-container"><button>Play</button></div>
            </div>
        </div>
    );
}