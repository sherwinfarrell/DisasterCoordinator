import React from 'react';
import {connect} from 'react-redux';
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Redirect} from "react-router-dom";
import moment from 'moment';

export const TaskDetails = (props) => {
    const {task, auth} = props;
    if (!auth.uid) return <Redirect to='/signin'/>;
    if (task) {
        return <div className="container section task-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        {task.title}
                    </span>
                    <p>{task.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {task.authorFirstName} {task.authorLastName}</div>
                    <div>{moment(task.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    } else {
        return <div className="container center">
            <p className='white'>Loading Task......</p>
        </div>
    }

};

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const tasks = state.firestore.data.tasks;
    const task = tasks ? tasks[id] : null;
    return {
        task: task,
        auth: state.firebase.auth,
    }
};

export default compose(connect(mapStateToProps), firestoreConnect([
    {collection: 'tasks',},
]))(TaskDetails);