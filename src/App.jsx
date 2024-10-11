import './css/Layout.css';
import Header from './layout/Header';
import Footer from './layout/Footer'
import Main from './component/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Router, Routes, Route 임포트

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} /> {/* 메인 페이지 경로 설정 */}
        {/* 나중에 다른 Route 설정도 추가 가능 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
