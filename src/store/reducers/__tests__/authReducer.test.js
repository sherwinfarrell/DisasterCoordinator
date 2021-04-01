import authReducer from "../authReducer"
import {signIn, SignOut} from "../../actions/authActions"


describe("Auth Reducer",() =>{
    it('It should return default task',()=>{
        const defaultState = authReducer({},{})
        expect(defaultState).toEqual({});
    })

    it("It should return the new tasks that were added",()=>{
        let action = {type: "LOGIN_ERROR"}
        const defaultState = authReducer({},action)
        expect(defaultState.authError).toEqual("login failed");
    })
})