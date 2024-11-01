import React, { Component } from 'react'

import TodoHeader from './TodoHeader'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

export default class TodoApp extends Component{
    state={
        todoList:[
            {id:'cv01',tenCongViec:'Làm bài tập'},
            {id:'cv02',tenCongViec:'Xem phim'},
            {id:'cv03',tenCongViec:'Đi du lịch'},
            {id:'cv04',tenCongViec:'Đi phượt'}
        ],
        editItem:{}
    }
    addTodo=(todo)=>{
        let current=[...this.state.todoList];
        current=[...current, todo];
        this.setState({todoList:current})
    }
    render(){
        return(
            <div className='container'>
                <TodoHeader/>
                <TodoAdd addTodo={this.addTodo}/>
                <TodoList todoList={this.state.todoList}/>
            </div>
        )
    }
}