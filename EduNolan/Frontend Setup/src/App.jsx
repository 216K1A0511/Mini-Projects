import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/home.css';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? 
              <DashboardPage /> : 
              <Navigate to="/login" replace />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;