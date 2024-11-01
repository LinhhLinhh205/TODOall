import Reacct,{Component} from 'react'

import {Outlet} from 'react-router-dom'

export default class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>Home page</h1>
                <Outlet/>
               </React.Fragment> 
        )
    }
}