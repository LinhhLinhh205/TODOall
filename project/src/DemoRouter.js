import React, { Component } from 'react';

import Nav from './Nav'
import { Outlet } from 'react-router-dom'
export default class DemoRouter extends Component {
    render() {
        return (
            <div className='demo-router'>
                <Nav />
                <div className='app-content' >
                    <Outlet />
                </div>
            </div>
        )
    }
}