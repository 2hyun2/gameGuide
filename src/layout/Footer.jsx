import { useState, useEffect } from "react";

function Footer() {
  const [windowTop, setWindowTop] = useState(false);

  const handleScroll = () => {
    setWindowTop(window.scrollY > 0); // 스크롤 위치에 따라 상태 업데이트
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 등록

    return () => {
      window.removeEventListener("scroll", handleScroll); // 언마운트 시 리스너 해제
    };
  }, []); // 빈 배열을 두 번째 인자로 주면 컴포넌트 마운트 시에만 실행

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="footer">
      <div className="inner">
        <p>© Moonton. All rights reserved.</p>
        <p>본 페이지는 상업적 이용을 목적으로 하지 않으며, 게임 팬들을 위해 제작되었습니다.</p>
        <p>This page is not for commercial use and is created for fans of the game.</p>
        <p>2차 창작자: 정현 9820486(70055) / Secondary Creator: 정현 9820486(70055)</p>
        <p>Contact : eventietter@naver.com</p>

        {windowTop && (
          <div onClick={goTop} className="goTop">↑</div>
        )}
      </div>
    </div>
  );
}

export default Footer;
