import React, { Component } from 'react'
import TodoItem from './TodoItems';


class todoList extends Component {


    render() {
        return (
            <div>
               <h2>todo list</h2>
               <TodoItem />
            </div>
        )
    }
}

export default todoList;
