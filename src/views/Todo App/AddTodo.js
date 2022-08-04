import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    state={
        title: ''
    }
    handleOnchange(e){
        this.setState({
            title: e.target.value
        })
    }
    handleAddtodo=(e)=>{
       if (!this.state.title) {
        toast.error('Missing input')
        return;
       }
        let todo= {
            id: Math.floor(Math.random()*1000),
            title:this.state.title
        }
        this.props.addTodos(todo)
        this.setState({
            title:''
        })
    }
    handlekeydown=(e)=>{
        if (e.key === 'Enter') {
            this.handleAddtodo(e)
        }
    }
render(){
    return(
        <div className="add-todo">
            <input onKeyDown={(e)=> this.handlekeydown(e)} placeholder="What do you want to do today?" type='text' value={this.state.title} onChange={(e)=>this.handleOnchange(e)}  ></input>
          <br/>  <button onClick={(e)=> this.handleAddtodo(e)} type='button'>Add</button>
        </div>
    )
}
}
export default AddTodo