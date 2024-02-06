// Import Services
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components
import RootLayout from './layout/RootLayout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import MyTasks from './pages/MyTasks';
import Calender from './pages/Calender';
import Reports from './pages/Reports';

// Import CSS
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mytasks" element={<MyTasks />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
