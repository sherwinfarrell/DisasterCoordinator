import React from 'react'
import {shallow} from 'enzyme'
import {SignUp} from '../SignUp'


describe('SginUp component',() =>{

    it('should render the signup component', () =>{
        const props = {
            auth: {
                uid: 12
            },
            authError: null
        }

        const wrapper = shallow(<SignUp {...props}/>)
        expect(wrapper.find('.container').length).toBe(1)
    })
})