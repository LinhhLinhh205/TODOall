import Reacct, { Component } from 'react'

import { Outlet } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>About page</h1>
                <Outlet />
            </React.Fragment>
        )
    }
}