import React, { Component } from 'react'
// import '../bootstrap/dist/css/bootstrap.min.css';


class TodoInput extends Component {

    render() {
        const {handleChange,handleSubmit,item,edit} = this.props
        return (
            <section>
                <h2 className='text-capitlize d-block my-3'>Todo Input</h2>
                <form className="border border-grey m-2 p-2 bg-dark" onSubmit={handleSubmit}>
                
                        <div className="input-group m-1 ">
                            <div className="input-group-prepend">
                                 <div className="input-group-text bg-primary text-white">
                                 <i className="fas fa-book"></i>
                                 </div>
                            </div>
                            <input type="text" value={item} className="form-control" onChange={handleChange}/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block form-control m-1 " onSubmit={()=>handleSubmit} on>add item</button>                        
        
                </form>
            </section>
        )
    }
}

export default TodoInput;
