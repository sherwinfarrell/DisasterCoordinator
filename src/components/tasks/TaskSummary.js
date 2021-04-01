import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { deleteTask } from "../../store/actions/taskActions";


// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//       minWidth: 275,
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   });




export const TaskSummary = (props) => {


    const task = props.task;
    
    const _handleSubmit = (e) => {
        e.preventDefault();
        props.deleteTask(task);
    };

//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

    return<div className="card blue-grey z-depth-5 task-summary">
                <div className="card-content white-text text-darken-3">
                    <span className="card-title">{task.title}</span>
                    <p>Posted by {task.authorFirstName + task.authorLastName}</p>
                    <p className="black-text">{moment(task.createdAt.toDate()).calendar()}</p>
                    <button class="btn btn-delete grey" onClick={_handleSubmit}>
                        <span class="black-text" >Delete</span>
                    </button>
                </div>
            </div>

//             return (<Card className={classes.root} variant="outlined">
//                         <CardContent>
//                             <Typography className={classes.title} color="textSecondary" gutterBottom>
//                                 {task.title}
//                             </Typography>
//                             <Typography variant="h5" component="h2">
//                                 Posted by {task.authorFirstName + task.authorLastName}
//                             </Typography>
//                             <Typography variant="body2" component="p">
//                                 {moment(task.createdAt.toDate()).calendar()}                                <br />
//                             </Typography>
//                         </CardContent>
//             </Card>
// )

};

const mapDispatchToProps = (dispatch) => {
    return{
        deleteTask: (task) => dispatch(deleteTask(task))
    }
};

export default connect(null,mapDispatchToProps)(TaskSummary);