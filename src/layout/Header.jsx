import { Link } from 'react-router-dom';
import Logo from '../../public/layout/logo.png'

const Header = () => {
  return (
    <nav id='header'>
      <div className="inner">
          <ul>
            <li className='logo'><Link to="/"><img src={Logo} alt="home" /></Link></li>
            <li><Link to="/component/Guide">초보자 가이드</Link></li>
            <li><Link to="/component/Item">아이템 세팅</Link></li>
            <li><Link to="/component/Dungeon">던전 컨텐츠</Link></li>
          </ul>
      </div>
    </nav>
  );
}

export default Header;
