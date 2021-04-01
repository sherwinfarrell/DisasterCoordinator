import React, {Component} from "react";
import Notifications from "./Notifications";
import TaskLists from "../tasks/TaskList";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Redirect} from 'react-router-dom';
import Navbar from "../layouts/Navbar"

export class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const {tasks, auth, notifications} = this.props;
        if (!auth.uid) return <Redirect to='/signin'/>;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <TaskLists tasks={tasks}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications ={notifications}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        tasks: state.firestore.ordered.tasks,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    };
};

export default compose(connect(mapStateToProps), firestoreConnect([
    {collection: 'tasks', orderBy : ['createdAt', 'desc']},
    {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
]))(Dashboard);