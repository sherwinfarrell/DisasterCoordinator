const initState = {
    tasks: [    ]
};
const taskReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            console.log('created task', action.task);
            return action.task;
        case 'CREATE_TASK_ERROR':
            console.log('create task error', action.err);
            return state;
        default:
            return state;
    }
};

export default taskReducer