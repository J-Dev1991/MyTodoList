import React, { Component } from 'react';
import TodoList from './components/TodoList';
import Todoinput from './components/TodoInput'
import './index.css'
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css"

class  App extends Component {

  state = {
      items: [],
      item:'',
      id:uuid,
      edit: false
  }

  handleChange = e =>{

  }


  handleSubmit = e =>{
    console.log("item submitted");
  }

  handleEdit = id => {
      console.log(`${id}`)
  }

  handleDelete = id => {
    console.log("delete button clicked");
  }

  handleClearList = e =>{
    console.log("clear list button clicked")
  }


render() {
  return (
    <div className="container">
      <div className='row'>
        <Todoinput 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          // items={this.state.items}
          // item={this.state.item}
          />

        <TodoList 
          handleSubmit={this.handleDelete}
          handleChange={this.handleEdit}
          handleClearList={this.handleClearList}
          items={this.state.items}
          />
      </div>
 </div>
  );
};
 
}

export default App;
