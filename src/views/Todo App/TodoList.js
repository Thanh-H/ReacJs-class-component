import React from "react";
import AddTodo from "./AddTodo";
import './todo.scss'
import { toast } from 'react-toastify';

class TodoList extends React.Component {
    state = {
        listTodos: [
            { id: ' ', title: '' },
        ],
        editTodo: {}
    }
    addTodos = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success('Wow so easy!')
    }
    deleteTodo = (todo) => {
        let CurentTodo = this.state.listTodos
        CurentTodo = CurentTodo.filter((item) => todo.id !== item.id)
        this.setState({
            listTodos: CurentTodo
        })
        toast.success('delete success!')
    }
    handleEditTodo = (todo) => {
        let { editTodo } = this.state
        let isEmptyobj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyobj === false && editTodo.id === todo.id) {
            this.setState({ editTodo: '' })
            toast.success('Edit Todo Success!')
            return
        }
        //edit
        this.setState({
            editTodo: todo
        })
    }
    handleOnchangeEditTodo = (e) => {
        let editTodoCoppy = this.state.editTodo
        editTodoCoppy.title = e.target.value
        this.setState({
            editTodo: editTodoCoppy
        })
    }
    handleENter = (e) => {
        if (e.key === 'Enter') {
            this.handleEditTodo(e)
            toast.success('Edit Todo Success!')
        }
    }
    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyobj = Object.keys(editTodo).length === 0;

        return (
            <div>
                <h1>
                    Todo app
                </h1>
                <AddTodo
                    addTodos={this.addTodos} />
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th className="thanh">Todos list</th>
                            <th>Handle</th>
                        </tr>
                    </thead>
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <>
                                    {item.id !== ' ' &&
                                        <tbody key={item.id}>
                                            <tr>
                                                <td> {index + 1} </td>
                                                {isEmptyobj === true ? <td
                                                    className="title">  {item.title} </td>
                                                    : <>
                                                        {editTodo.id === item.id ?
                                                            <td> <input
                                                                onChange={(e) => this.handleOnchangeEditTodo(e)}
                                                                onKeyDown={(e) => this.handleENter(e)}
                                                                value={editTodo.title} /> </td>
                                                            :
                                                            <td
                                                                className="title">  {item.title} </td>}
                                                    </>
                                                }
                                                <td className="block-left-title">
                                                    <button onClick={() => this.handleEditTodo(item)} className="btn">
                                                        {isEmptyobj === false && editTodo.id === item.id ? 'Save'
                                                            : 'Edit'
                                                        }
                                                    </button>

                                                    <button onClick={() => this.deleteTodo(item)} className="btn">Delete</button>
                                                </td>

                                            </tr>
                                        </tbody>} </>)
                        })}


                </table>

            </div>
        )
    }
}
export default TodoList