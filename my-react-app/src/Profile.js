import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { profileFriend } from "./redux/actions/friendActions";

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

    return (
        <div class="profile-container">
            <div class="profile-image-header">
                <div class="profile-header">
                    Profile
                </div>
                <button type="button" 
                    class="btn-close"
                    id="chat-close"
                    aria-label="Close"
                    onClick={handleClose}
                ></button>
            </div>
            <div class="profile-main">
                <div class="profile-image-container">
                    <div class="profile-image-box">
                        <img class="profile-image" src="/ksuh.jpg" alt="기본 프로필 사진" />
                        <div class="profile-image-userid">ksuh</div>
                        <div class="profile-image-login">Last login:</div>
                        <div class="profile-image-login1">3 minutes ago</div>
                    </div>
                </div>
                <div class="profile-content">
                    <div class="profile-content-box-top">
                        <div class="profile-content-box" id="profile-rating">
                            <div class="profile-rating-top">Highest</div>
                            <div class="profile-rating">1717</div>
                        </div>
                        <div class="profile-content-box" id="profile-rating">
                            <div class="profile-rating-top">Current</div>
                            <div class="profile-rating">1717</div>
                        </div>
                    </div>
                    <div class="profile-content-box">
                        <div>Record</div>
                        <div>Total: 100, 100W 0L (100%)</div>
                    </div>
                    <div class="profile-content-box">
                        <div>Tournament</div>
                        <div>Total: 10, 5W 5L (50%)</div>
                    </div>
                    <div class="profile-content-box">
                        <div>VS</div>
                        <div>Total: 10, 5W 5L (50%)</div>
                    </div>
                    {/* hello */}
                </div>
            </div>
        </div>
    );
}