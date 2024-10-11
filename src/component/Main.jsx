import '../css/Main.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div id="main">
      <div className="inner flex gap20 center column">
        <div className="mText flex gap20 center column">
          <h1 className="cfff">
            본 홈페이지는 게임 <strong className="cpoint font1">워처 오브 렐름</strong>을 즐기시는 분들을 위한 창작 페이지입니다.
          </h1>
          <h2 className="cfff">
            이 페이지는 상업적 이용을 목적으로 하지 않으며, <br />
            게임사의 삭제 요청이 있을 경우 삭제될 수 있습니다.
          </h2>
        </div>

        <div className="mLinks">
          <h1 className="cpoint fw900">바로 가기</h1>
          <ul>
            <li><Link to="/component/Guide">초보자 가이드</Link></li>
            <li><Link to="/component/Item">아이템 세팅</Link></li>
            <li><Link to="/component/Dungeon">던전 컨텐츠</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
