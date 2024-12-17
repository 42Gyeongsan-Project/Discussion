import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import { toggleFriend } from './redux/actions/frinedActions';

export default function ChatBox({ index, name, texts }) {
    const dispatch = useDispatch();
    const [showWarning, setShowWarning] = useState(true);

    const handleClose = () => {
        dispatch(toggleFriend(-1));
    };
    const [messages, setMessages] = useState([
        { id: 1, text: "안녕하세요!", sender: "user" },
        { id: 2, text: "안녕하세요! 무엇을 도와드릴까요?", sender: "bot" },
    ]);
    
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setMessages([
                ...messages,
                { id: messages.length + 1, text: message, sender: "user" },
            ]);
            setMessage('');
        }
    };

    const scrollableRef = useRef(null);
    const scrollToTop = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTop = 0; // 스크롤 위치를 0으로 설정
          }
    };

    useEffect(() => {
        scrollToTop();
            }, [index]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWarning(false); // 일정 시간이 지나면 경고 메시지를 숨긴다
        }, 5000); // 5초 후에 메시지를 숨긴다
        return () => clearTimeout(timer); // 컴포넌트가 언마운트되거나 타이머가 변경되면 타이머를 정리한다
    }, []);

  return (
        <div className="chat-container">
            { showWarning &&
                <div className="chat-warning"> 
                    The Game Is About To Start... Get Ready!
                </div>
            }
            <div className="chat-header">
                {name}
                <button type="button" 
                    class="btn-close" 
                    id="chat-close" 
                    aria-label="Close"
                    onClick={handleClose}
                    >
                </button>
            </div>
            <hr className="chat-header-line"/>
            <div className="chat-box">
                {texts.map((msg) => (
                    <div key={msg.id} className={`chat-bubble ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input 
                    type="text" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="메시지를 입력하세요" 
                />
                <button onClick={handleSendMessage}>전송</button>
            </div>
        </div>
  );
}