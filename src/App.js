import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Course from './pages/Course/Course';
import { useTranslation } from 'react-i18next'; 
import Quiz from './pages/Quiz/Quiz';
import CertificatePage from './pages/CertificatePage/CertificatePage';
import StudyVideosPages from './pages/StudyVideosPages/StudyVideosPages';
import Admin from './pages/Admin/Admin';
import LoginAdmin from './pages/LoginAdmin/LoginAdmin';
import AddVideoFormation from './Components/Admin/AddVideoFormation/AddVideoFormation';

function App() {
  const { i18n } = useTranslation(); 
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr'; 

  return (
    <Router>
      <div className="App" style={{ direction }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/course/:title" element={<Course />} />
          <Route path="/quiz/:title" element={<Quiz />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/study-videos/:title" element={<StudyVideosPages />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/admin/add-video/:id" element={<AddVideoFormation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
