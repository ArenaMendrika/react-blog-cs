import React from 'react';
import TechPosts from './components/TechPosts';
import './App.css';

function App() {
  return (
    <div className="App" style={{textAlign: 'center'}}>
      <h1 style={{marginTop: '30px'}}>Blog</h1>
      <TechPosts />
    </div>
  );
}

export default App;
