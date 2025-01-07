import React, { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';

import FriendCard from "./FriendCard";
import ChatBox from "./ChatBox";

// 사용자 카드 컴포넌트
// state
// 1. available
// 2. playing
// 3. in queue
// 4. offline

const friends = [
    {
        id: 1,
        index: 0,
        name: "borntopingpong",
        win: 0,
        lose: 0,
        winRate: 0,
        status: "available",
        rating: 400,
        chats: [
            {
                id: 1,
                sender: "bot",
                name: "borntopingpong",
                text: "오늘 몇 시에 보기로 함?"
            },
            {
                id: 2,
                sender: "user",
                name: "ksuh",
                text: "6시반!"
            },
            {
                id: 3,
                sender: "user",
                name: "ksuh",
                text: "늦지마라 ㅡ.ㅡ"
            },
            {
                id: 4,
                sender: "bot",
                name: "borntopingpong",
                text: "ㅇㅋㅇㅋ"
            },
            {
                id: 5,
                sender: "bot",
                name: "borntopingpong",
                text: "ㅇㅋㅇㅋ"
            },
            {
                id: 6,
                sender: "user",
                name: "ksuh",
                text: "뭐래"
            },
            {
                id: 7,
                sender: "user",
                name: "ksuh",
                text: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"
            },
            {
                id: 8,
                sender: "bot",
                name: "borntopingpong",
                text: "이따 밥먹고 2:2 탁구 내기빵 ㄱㄱ"
            },
            {
                id: 9,
                sender: "user",
                name: "ksuh",
                text: "응 안해~"
            }
        ]
    },
    {
        id: 2,
        index: 1,
        name: "transcendence",
        win: 0,
        lose: 0,
        winRate: 0,
        status: "available",
        rating: 400,
        chats: [
            {
                id: 1,
                sender: "bot",
                name: "transcendence",
                text: "오늘 몇 시에 보기로 함?"
            },
            {
                id: 2,
                sender: "user",
                name: "ksuh",
                text: "6시반!"
            },
            {
                id: 3,
                sender: "user",
                name: "ksuh",
                text: "늦지마라 ㅡ.ㅡ"
            },
            {
                id: 4,
                sender: "bot",
                name: "transcendence",
                text: "ㅇㅋㅇㅋ"
            },
            {
                id: 5,
                sender: "bot",
                name: "transcendence",
                text: "ㅇㅋㅇㅋ"
            },
            {
                id: 6,
                sender: "user",
                name: "ksuh",
                text: "뭐래"
            },
            {
                id: 7,
                sender: "user",
                name: "ksuh",
                text: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"
            },
            {
                id: 8,
                sender: "bot",
                name: "transcendence",
                text: "이따 밥먹고 2:2 탁구 내기빵 ㄱㄱ"
            },
            {
                id: 9,
                sender: "user",
                name: "ksuh",
                text: "응 안해~"
            }
        ]
    },
]
// const friends = [
//     {
//         id: 1,
//         name: "borntopingpong",
//         win: 0,
//         lose: 0,
//         winRate: 0,
//         status: "available",
//         rating: 400,
//     },
//     {
//         id: 2,
//         name: "transcendence",
//         win: 11,
//         lose: 11,
//         winRate: 50,
//         status: "available",
//         rating: 700,
//     },
//     {
//         id: 3,
//         name: "transcendence1",
//         win: 12,
//         lose: 8,
//         winRate: 60,
//         status: "playing",
//         rating: 840,
//     },
//     {
//         id: 4,
//         name: "transnce",
//         win: 1,
//         lose: 10,
//         winRate: 9.1,
//         status: "available",
//         rating: 220,
//     },
//     {
//         id: 5,
//         name: "tnscendence",
//         win: 45,
//         lose: 55,
//         winRate: 45,
//         status: "in-queue",
//         rating: 934,
//     },
// ]

export default function Friends({ isBlock }) {
    const index = useSelector((state) => state.friendReducer.idx);

    const scrollableRef = useRef(null);
    const scrollToTop = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTop = 0; // 스크롤 위치를 0으로 설정
          }
    };

    useEffect(() => {
        scrollToTop();
            }, [index]);

  return (
    <div id="sidebar-users">
        <ul className="list-group no-horizontal-scroll" 
            id="ul-list-user"
            ref={scrollableRef}
        >
            {friends.length > 0 ? (
                friends.map((user) => (
                    <FriendCard key={user.id}
                            idx={user.index}
                            name={user.name} 
                            status={user.status} 
                            rating={user.rating}
                            isBlock={isBlock}
                    />
            ))
            ) : (
                <li className="list-group-item d-flex justify-content-between align-items-center" id="no-list-group">
                    <p className="no-user-tag">Currently has no friends</p>
                </li>
            )
            }
        </ul>
        { index > -1 && !isBlock? <ChatBox index={index} name={friends[index].name} texts={friends[index].chats}/> : null}
    </div>
  );
}