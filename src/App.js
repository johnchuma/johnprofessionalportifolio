import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import AnimationPlayground from './pages/animationPlayground';

function App() {
  return (
    <div className='bg-black min-h-screen overflow-y-hidden'>
      <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path='/playground' element={<AnimationPlayground/>} />
    </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
