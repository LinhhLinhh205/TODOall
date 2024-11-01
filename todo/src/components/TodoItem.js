import React, {Component} from 'react'

export default class TodoItem extends Component{
    render(){
        return(
            <div classname=''>
                <span>
                    {this.props.idx+1}-{this.props.item.tenCongViec}
                </span>
                <button classname='TodoItem-button'>Edit</button>
                <button classname='TodoItem-button'>Delete</button>
            </div>
        )
    }
}