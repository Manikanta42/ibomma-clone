import React from 'react';
import MovieGrid from './components/MovieGrid';
import SearchBar from './components/SearchBar';
import './index.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">iBomma Clone</div>
        <SearchBar />
      </header>
      
      <main className="movie-section">
        <h2>Latest Movies</h2>
        <MovieGrid />
      </main>
    </div>
  );
}

export default App;

