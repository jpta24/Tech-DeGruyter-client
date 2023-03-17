import { useState } from "react";

import './App.css';

import Header from './components/Header';
import Library from './components/Library';
import Description from './components/Description';

function App() {
  const [book, setBook] = useState(null)

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Library setBook={setBook}/>
        {book && <Description book={book}/>}
      </div>
      
    </div>
  );
}

export default App;
