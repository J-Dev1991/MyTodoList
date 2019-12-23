import React, { Component } from 'react'
import TodoItem from './TodoItems';
class todoList extends Component {

    

    render() {
        return (
            <div>
                <TodoItem/>
                 <label className="label"> 
                    <span>
                        jhvsdah
                    <i class="fas fa-pen"></i>
                    <i class="fas fa-trash"></i>
                    </span>
                 </label>
            </div>
        )
    }
}

export default todoList;
