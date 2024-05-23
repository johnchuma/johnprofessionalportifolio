import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';

function App() {
  return (
    <div className='bg-black min-h-screen overflow-y-hidden'>
      <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
