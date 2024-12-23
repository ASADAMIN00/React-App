
import React, { useState } from 'react';
import './index.css';

function App() {
  const [name, setName] = useState("World");

  const changeText = () => {
    setName("Muhammad Asadullah Amin"); // Change this to your name
  };

  return (
    <div className="app-container">
      <h1 className="greeting">
        Hello, <strong>{name}</strong>!
      </h1>
      
      <p className="intro">
        Welcome to my colorful and interactive page. Click the button below to change my greeting!
      </p>
      
      <button onClick={changeText} className="btn">Click to Change Name</button>
      
      <div className="content">
        <h2>Some Interesting Facts</h2>
        <p>Here are some fun facts about coding:</p>

        <div className="lists">
          <h3>Ordered List</h3>
          <ol>
            <li>JavaScript is a versatile language.</li>
            <li>React makes building UIs easier and more efficient.</li>
            <li>Learning to code opens up numerous career opportunities.</li>
          </ol>
          
          <h3>Unordered List</h3>
          <ul>
            <li>Fast development with modern frameworks like React.</li>
            <li>Dynamic websites are powered by JavaScript.</li>
            <li>There are endless resources to learn from online!</li>
          </ul>
        </div>
      </div>
      
      <footer>
        <p>Thank you for visiting my page! Happy coding!</p>
      </footer>
    </div>
  );
}

export default App;
