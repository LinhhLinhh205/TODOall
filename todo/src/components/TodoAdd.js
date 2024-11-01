import { Component } from 'react'

export default class TodoAdd extends Component{
    state={
        noiDung:''
    }
    handleChangText=(e)=>{
        this.setState({noiDung:e.target.value})
    }
    render(){
        return(
            <div>
                <input type='text' placeholder='Nhập công việc' value={this.state.noiDung} onChange={(e)=>{this.handleChangText(e)}}/>
                <button className='TodoAdd-button'>Add</button>
            </div>
        )
    }
}