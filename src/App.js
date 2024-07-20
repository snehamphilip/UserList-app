import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Search from './components/Search';
import Display from './components/Display';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/d' element={<Details/>}/>
      <Route path='/s' element={<Search/>}/>
      <Route path='/di' element={<Display/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
