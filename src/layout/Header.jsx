import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/logo.png'

const Header = () => {
  const location = useLocation();

  return (
    <nav id='header'>
      <div className="inner">
          <ul>
            <li className='logo'><Link to="/"><img src={Logo} alt="home" /></Link></li>
            <li className={location.pathname === "/component/Guide" ? "active" : ""}><Link to="/component/Guide">초보자 가이드</Link></li>
            <li className={location.pathname === "/component/Item" ? "active" : ""}><Link to="/component/Item">아이템 세팅</Link></li>
            <li className={location.pathname === "/component/Dungeon" ? "active" : ""}><Link to="/component/Dungeon">던전 컨텐츠</Link></li>
          </ul>
      </div>
    </nav>
  );
}

export default Header;
