import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import TodoListMain from './components/TodoListMain/TodoListMain'




function App() {



  return (
    <>
      <div id="todoListPage" className="bg-half">
        <Header></Header>
        <TodoListMain>
        </TodoListMain>
      </div>
    </>
  );
}

export default App;
