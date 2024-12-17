import React, { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

// 사용자 카드 컴포넌트
// state
// 1. available
// 2. playing
// 3. in queue

const users = [
    {
        id: 1,
        idx: 0,
        name: "borntopingpong",
        win: 0,
        lose: 0,
        winRate: 0,
        status: "available",
        rating: 400,
    },
    {
        id: 2,
        idx: 1,
        name: "transcendence",
        win: 11,
        lose: 11,
        winRate: 50,
        status: "available",
        rating: 700,
    },
    {
        id: 3,
        idx: 2,
        name: "transcendence1",
        win: 12,
        lose: 8,
        winRate: 60,
        status: "playing",
        rating: 840,
    },
    {
        id: 4,
        idx: 3,
        name: "transnce",
        win: 1,
        lose: 10,
        winRate: 9.1,
        status: "available",
        rating: 220,
    },
    {
        id: 5,
        idx: 4,
        name: "tnscendence",
        win: 45,
        lose: 55,
        winRate: 45,
        status: "in-queue",
        rating: 934,
    },
    {
        id: 6,
        idx: 5,
        name: "borntopingpong",
        win: 0,
        lose: 0,
        winRate: 0,
        status: "available",
        rating: 400,
    },
    {
        id: 7,
        idx: 6,
        name: "transcendence",
        win: 11,
        lose: 11,
        winRate: 50,
        status: "available",
        rating: 700,
    },
    {
        id: 8,
        idx: 7,
        name: "transcendence1",
        win: 12,
        lose: 8,
        winRate: 60,
        status: "playing",
        rating: 840,
    },
    {
        id: 9,
        idx: 8,
        name: "transnce",
        win: 1,
        lose: 10,
        winRate: 9.1,
        status: "available",
        rating: 220,
    },
    {
        id: 10,
        idx: 9,
        name: "tnscendence",
        win: 45,
        lose: 55,
        winRate: 45,
        status: "in-queue",
        rating: 934,
    }
]

export default function User({ count }) {
    const button1 = useSelector((state) => state.checkboxReducer.availChecked);
    const button2 = useSelector((state) => state.checkboxReducer.gameChecked);
    const button3 = useSelector((state) => state.checkboxReducer.queueChecked);
    const filteredUsers = users.filter((user) => 
                        (user.status === "available" && button1) ||
                        (user.status === "playing" && button2) ||
                        (user.status === "in-queue" && button3)
                        );
    const scrollableRef = useRef(null);
    const scrollToTop = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTop = 0; // 스크롤 위치를 0으로 설정
          }
    };

    useEffect(() => {
        scrollToTop();
            }, [button1, button2, button3, count]);

  return (
    <div id="sidebar-users">
        <ul className="list-group no-horizontal-scroll" 
            id="ul-list-user"
            ref={scrollableRef}
        >
            {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                    <UserCard key={user.id}
                            name={user.name} 
                            status={user.status} 
                            rating={user.rating}
                            idx={user.idx}
                    />
            ))
            ) : (
                <li className="list-group-item d-flex justify-content-between align-items-center" id="no-list-group">
                    <p className="no-user-tag">No User Found</p>
                </li>
            )
            }
        </ul>
    </div>
  );
}