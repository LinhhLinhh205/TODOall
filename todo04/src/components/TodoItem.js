import React, { Component } from 'react'

export default class TodoItem extends Component {
    state = {
        noiDung: ''
    }
    handleChangeText = (e) => {
        this.setState({ noiDung: e.target.value })
    }
    handleButtonEdit = (item) => {
        this.setState({ noiDung: item.tenCongViec })
        this.props.editTodo(item)
    }
    handleButtonDelete = (item) => {
        this.props.deleteTodo(item);
    }
    handleButtonsave = (item) => {
        item.tenCongViec = this.state.noiDung
        this.props.saveTodo(item)
    }
    render() {
        let { item, idx, editTodoItem } = this.props
        let isEditTodoItem = Object.keys(editTodoItem).length === 0;
        return (
            <div>
                {
                    !isEditTodoItem && editTodoItem.id === item.id ?
                        <div key={item.id}>
                            <input
                                type='text'
                                value={this.state.noiDung}
                                onChange={(e) => this.handleChangeText(e)}
                            />
                            <button className="TodoItem-button" onClick={() => this.handleButtonsave(editTodoItem)} >Save</button>
                        </div>
                        :
                        <div key={item.id}>
                            <span>
                                {idx + 1} - {item.tenCongViec}
                            </span>
                            <button className="TodoItem-button" onClick={() => this.handleButtonEdit(item)} >Edit</button>
                            <button className="TodoItem-button" onClick={() => this.handleButtonDelete(item)} >Delete</button>
                        </div>
                }
            </div>
        )
    }
}