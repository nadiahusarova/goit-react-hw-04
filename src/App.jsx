import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import './App.css'

function App() {
 const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster />
    </div>
  );
}

export default App
