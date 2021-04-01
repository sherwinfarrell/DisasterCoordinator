import React from 'react'
import {shallow} from 'enzyme'
import {SignedOutLinks} from '../SignedOutLinks'


describe('SignedOutLinks component',() =>{

    it('should render the SignedOutLinks component', () =>{
        const props = {
            auth: {
                uid: 12
            },
            authError: null
        }

        const wrapper = shallow(<SignedOutLinks {...props}/>)
        expect(wrapper.find('.right').length).toBe(1)
    })
})