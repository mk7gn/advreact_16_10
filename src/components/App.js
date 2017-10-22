import React, { Component } from 'react'
import {Route, NavLink} from 'react-router-dom'
import ProtectedRoute from './common/ProtectedRoute'
import AdminPage from './routes/Admin'
import AuthPage from './routes/Auth'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <NavLink to={'/admin'}> Admin </NavLink>
                <NavLink to={'/auth'}> Auth </NavLink>
                <ProtectedRoute path = '/admin' component = {AdminPage}/>
                <Route path = '/auth' component = {AuthPage}/>
            </div>
        )
    }
}

export default App