import React, { Component } from 'react'

import TodoHeader from './TodoHeader'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

export default class TodoApp extends Component {
    state = {
        todoList: [
            { id: 'cv01', tenCongViec: 'Làm bài tập' },
            { id: 'cv02', tenCongViec: 'Xem phim' },
            { id: 'cv03', tenCongViec: 'Đi du lịch' },
            { id: 'cv04', tenCongViec: 'Đi phượt' }
        ],
        editItem: {}
    }
    addTodo = (todo) => {
        let current = [...this.state.todoList];
        current = [...current, todo];
        this.setState({ todoList: current })
    }
    deleteTodo = (todo) => {
        let currentTodoList = [...this.state.todoList];
        currentTodoList = currentTodoList.filter((item) => item.id !== todo.id);
        this.setState({ todoList: currentTodoList });
    }
    editTodo = (todo) => {
        this.setState({ editItem: todo })
    }
    saveTodo = (todo) => {
        let currentTodoList = this.state.todoList
        let todoIndex = currentTodoList.findIndex((item) => item.id === todo.id)
        currentTodoList[todoIndex].tenCongViec = todo.tenCongViec
        this.setState({ editItem: {} })

    }
    render() {
        return (
            <div className='container'>
                <TodoHeader />
                <TodoAdd addTodo={this.addTodo} />
                <TodoList
                    todoList={this.state.todoList}
                    deleteTodo={this.deleteTodo}
                    editTodo={this.editTodo}
                    saveTodo={this.saveTodo}
                    editTodoItem={this.state.editItem}
                />
            </div>
        )
    }
}