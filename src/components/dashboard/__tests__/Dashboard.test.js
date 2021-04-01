import React from 'react'
import {shallow} from 'enzyme'
import {Dashboard} from '../Dashboard'


describe('Dashboard component',() =>{

    it('should render the Dashboard component', () =>{
        const props = {
            auth: {
                uid: 123
            },
            authError: null
        }

        const wrapper = shallow(<Dashboard {...props}/>)
        expect(wrapper.find('.row').length).toBe(1)
    })
})