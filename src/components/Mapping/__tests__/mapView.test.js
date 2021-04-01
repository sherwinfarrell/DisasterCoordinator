import React from 'react'
import {shallow} from 'enzyme'
import {MapView} from '../MapView'


describe('MapView component',() =>{

    it('should render the MapView component', () =>{
        const props = {
            auth: {
                uid: 12
            },
            authError: null
        }

        // const wrapper = shallow(<MapView {...props}/>)

        let mapView = MapView();

        console.log(mapView)
        // expect(wrapper.find('.right').length).toBe(1)
    })


})