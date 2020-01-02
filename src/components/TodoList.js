import React, { Component } from 'react'
import TodoItem from './TodoItems';


class todoList extends Component {


    render() {
            const {handleDelete,handleEdit,handleClearList,items} = this.props
        return (
            <ul className="list-group my-5">
                    <h3 className="text-capitalize">Todo input</h3>
                    {
                        items.map((myItem) => {
                           return(<TodoItem key={myItem.id} title={myItem.title} handleDelete={()=>handleDelete(myItem.id)}
                            handleEdit={()=>handleEdit(myItem.id)}/>)
                           
                        })
                        
                    }
                    <button type="button" className="btn btn-danger btn-block form-control mt-5 " onClick={handleClearList}>Clear List</button>
            </ul>
        )
    }
}

export default todoList;
