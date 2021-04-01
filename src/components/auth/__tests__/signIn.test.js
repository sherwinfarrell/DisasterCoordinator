import React from 'react'
import {shallow} from 'enzyme'
import {SignIn} from '../SignIn'


describe('SginIn component',() =>{

    it('should render the signin component', () =>{
        const props = {
            auth: {
                uid: null
            },
            authError: null
        }

        const wrapper = shallow(<SignIn {...props}/>)
        expect(wrapper.find('.container').length).toBe(1)
    })
})