import React from 'react';
//import logo from './logo.svg';
import './App.css';
import New from './components/New';
import Welcome from './components/Welcome';
import Jsxx from'./components/Jsxx';
import Jsxw from './components/Jsxw';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
    {/*
      <New name="Ishaan"/>
    <New name="Malik"/>
    <button >Click</button>
    <New name="Tyroo"/>
    <New name="Gurgaon"/>

    <Welcome name="Intern"/>
    <Welcome name="Freshy"/>
    <Welcome newname="Front-end dev"/>
    <Jsxx />
    <Jsxw />
    */}
    <Message />
    </div>
  );
}

export default App;
