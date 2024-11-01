import React,{Component} from 'react'

import {Outlet} from 'react-router-dom'

export default class Contact extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>Contact page</h1>
                <Outlet/>
               </React.Fragment> 
        )
    }
}