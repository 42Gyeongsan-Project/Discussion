import React, { useEffect } from "react";
import "./game.css"

export default function Game() {
    useEffect(() => {
        // `pong.js` 동적으로 로드
        const script = document.createElement("script");
        script.src = "/game/js/pong.js"; // public 경로를 기준으로 설정
        script.async = true;
    
        // 스크립트를 DOM에 추가
        document.body.appendChild(script);
    
        // 클린업 함수: 스크립트 제거
        return () => {
          document.body.removeChild(script);
        };
    }, []);
    return (
        <div class="game">
            <h1 id="room-name">hello</h1>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <canvas id="pong" width="800" height="600"></canvas>
        </div>
    );
}
