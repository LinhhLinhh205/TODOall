import React,{Component} from 'react'

import {Outlet} from 'react-router-dom'

export default class News extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>News page</h1>
                <Outlet/>
               </React.Fragment> 
        )
    }
}