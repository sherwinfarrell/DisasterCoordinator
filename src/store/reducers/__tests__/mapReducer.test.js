import mapReducer from "../mapReducer"
import {addLatLng, addLatLngs, addCircle} from "../../actions/addLatLng"


describe("Auth Reducer",() =>{
    it('It should return default task',()=>{
        const defaultState = mapReducer({},{})
        expect(defaultState).toEqual({});
    })

    it("It should return the new tasks that were added",()=>{
        let action = {type: "LATLNG_ADDED", latLng: [[1,2], [3,4]]}
        const defaultState = mapReducer({},action)
        expect(defaultState.log).toEqual(action.latLng);
    })
})