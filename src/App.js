import React, { Component } from 'react';
import TodoList from './components/TodoList';
import Todoinput from './components/TodoInput'
import './index.css'
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

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

      })
  }

  handleEdit = id => {
  
     const edited = this.state.items.filter(item => item.id !== id);
     const selectedItem = this.state.items.find(item => item.id === id);
       this.setState({
         item: edited,
         item: selectedItem.title,
         id:id,
         edit:true
        })  
  }

  changeColor = () => {
    this.setState({
      backgroundColor: "green"
    })
  }

  handleDelete = id => {
    const filterItem = this.state.items.filter(item => item.id !== id); 
      this.setState({
          items:filterItem
      })
  };

  handleClearList = () =>{
    this.setState({
      items: []
    });
    console.log("cleared");
  };


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
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleClearList={this.handleClearList}
          items={this.state.items}
          />
      </div>
 </div>
  );
};
 
}

export default App;
