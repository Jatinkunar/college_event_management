import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nith from './Nith';
import Swetha from './sweth';
import Umas from './uma';
import Abouts from'./yuvans';
import Homess from'./homes';
import Sne from'./sneha';

function App() {
  return (
    <Routes>
      <Route path="/quizs" element={<Swetha/>}></Route>
      <Route path="/workshop" element={<Nith/>}></Route>
      <Route path="/technical" element={<Umas/>}></Route>
      <Route path="/" element={<Homess/>}></Route>
      <Route path="/about" element={<Abouts/>}></Route>
      <Route path="/register" element={<Sne/>}></Route>
    </Routes>
  );
}

export default App;