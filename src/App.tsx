import React from 'react';
import { LayoutMain } from './components/Layout/LayoutMain';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <LayoutMain />
    </BrowserRouter>
  );
}

export default App;
