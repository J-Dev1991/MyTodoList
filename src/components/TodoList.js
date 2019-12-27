import React, { Component } from 'react'
import TodoItem from './TodoItems';


class todoList extends Component {


    render() {
            const {handleDelete,handleEdit,handleClear,items} = this.props
        return (
            <ul className="list-group my-5">
                    <h3 className="text-capitalize">Todo input</h3>
                    {
                        items.map((myItem) => {
                           return(<TodoItem key={myItem.id} title={myItem.title} handleDelete={()=>handleDelete(myItem.id)}
                            handleEdit={()=>handleEdit(myItem.id)} handleClear={()=>handleClear}/>)
                           
                        })
                        
                    }
            </ul>
        )
    }
}

export default todoList;
