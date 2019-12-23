import React, { Component } from 'react';
import TodoList from './components/TodoList';
import Todoinput from './components/TodoInput'
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import "@fortawesome/fontawesome-free/css/all.min.css"

class  App extends Component {

  state = {
    id:"1",
    whatTodo: "",
    todoArray:[]
}

render() {
  return (
    <div >
      <Todoinput/>
     <TodoList/>
     
    </div>
  );
};
 
}

export default App;
