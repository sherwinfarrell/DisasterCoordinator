import React from 'react';
import TaskSummary from "./TaskSummary";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";


const TaskLists = ({tasks}) => {

    return (
        <div className="task-list section">
            {tasks && tasks.map((task) => {
                return <Link to={'task/' + task.id} key={task.id}><TaskSummary task={task}/></Link>
            })}
        </div>
    )
};

export default TaskLists