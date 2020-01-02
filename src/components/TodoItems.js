import React, { Component } from 'react';
import TodoL from './TodoList';

 class TodoItems extends Component {
    render() {
        const {handleDelete,handleEdit,title} = this.props
        
        return (
           
                <li className="d-flex justify-content-between my-2 text-capitalize list-group-item">
                   <p> {title}</p>
                   <div className="todo-icon">
                        <span onClick={handleEdit} className="mx-2 text-success">
                            <i className="far fa-edit"/>
                        </span>
                        <span onClick={handleDelete} className="mx-2 text-danger">
                            <i className="fas fa-trash" />
                        </span>
                    </div>
               </li>
        );
    }
}

export default TodoItems;
