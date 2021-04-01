export const createTask = (task) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // async code to the database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const ref = firestore.collection("my_collection").doc();
        let myId = ref.id;



        firestore.collection('tasks').add({
            ...task,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date(),
            uid: myId
        }).then(() => {
            dispatch({type: 'CREATE_Task', task})
        }).catch((err) => {
            dispatch({type: 'CREATE_TASK_ERROR', err})
        });
    }
};

export const deleteTask = (task) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // async code to the database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const id = task.id;
        firestore.collection('tasks').doc(id).delete()
    }
};