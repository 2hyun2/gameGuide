import './css/Layout.css';
import './css/Main.css';
import './css/Sub.css';
import Header from './layout/Header';
import Footer from './layout/Footer'
import Main from './component/Main';
import Guide from './component/Guide';
import Item from './component/Item';
import Dungeon from './component/Dungeon';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Router, Routes, Route 임포트

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} /> {/* 메인 페이지 경로 설정 */}
        <Route path="/component/Guide" element={<Guide />} /> {/* 메인 페이지 경로 설정 */}
        <Route path="/component/Item" element={<Item />} /> {/* 메인 페이지 경로 설정 */}
        <Route path="/component/Dungeon" element={<Dungeon />} /> {/* 메인 페이지 경로 설정 */}
        {/* 나중에 다른 Route 설정도 추가 가능 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
