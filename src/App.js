import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { QContainer } from './Pages/Container';
import { Header } from './Header';
import { SRouter } from './router/Router';
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SRouter />
        <TwitterIcon />
      </BrowserRouter>
      

    </div>
    
  );
};

export default App;

