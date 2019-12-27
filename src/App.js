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
      e.preventDefault();
      this.setState({
        item: e.target.value
      });
  }


  handleSubmit = e =>{
    e.preventDefault();
    const submitInput = {
      id: this.state.id,
      title: this.state.item
    }

    const updatedItems = [...this.state.items,submitInput]
    
      this.setState({
        items: updatedItems,
        item: "",
        id: uuid(),
        edit:false

      }, ()=>console.log(this.state))
  }

  handleEdit = id => {
      console.log(`${id}`)
  }

  handleDelete = id => {
    const newItems = this.state.items;
    this.state.newItems.filter((item) => {
      if(item.id !== id){
        this.setState({
          items : newItems
        })
    }
    });
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
          edit={this.state.edit}
          item={this.state.item}
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
