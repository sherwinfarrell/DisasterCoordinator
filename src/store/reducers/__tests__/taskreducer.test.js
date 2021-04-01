import taskReducer from "../taskReducer"
import {createTask} from "../../actions/taskActions"


describe("Tasks Reducer",() =>{
    it('It should return default task',()=>{
        const defaultState = taskReducer({},{})
        expect(defaultState).toEqual({});
    })

    it("It should return the new tasks that were added",()=>{
        let action = {type: "CREATE_TASK", task:"test"}
        const defaultState = taskReducer({},action)
        expect(defaultState).toEqual("test");
    })
})