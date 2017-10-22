import React, { Component } from 'react'
import {Route, NavLink} from 'react-router-dom'
import AddHuman from '../people/addHuman'
import {connect} from 'react-redux'
import {addHuman} from '../../ducks/people'

class Admin extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Admin Page</h2>
                <NavLink to = '/admin/people' activeStyle = {{color: 'red'}}>add people</NavLink>
                <Route path = '/admin/people'  render = {() => <AddHuman onSubmit = {this.handleAddHuman}/>}/>
            </div>
        )
    }

    handleAddHuman = ({firstName, lastName, email}) => this.props.addHuman(firstName, lastName, email)
}

export default connect(null, { addHuman })(Admin)