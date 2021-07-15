import React ,{ useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {


  const [count, setCount] = useState(1)

  return (
    <div className="App">
      <h1> Hello!! </h1>

      <p> This is a progressive web app demo with react!! </p>

      <p> Press the button to count. </p>

      <div className="center">
        <h2> { count } </h2>

        <button onClick={() => setCount(count+1)}> Press Me </button>
      </div>

    </div>
  );
}

export default App;
