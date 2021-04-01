import React from 'react'
import {shallow} from 'enzyme'
import {SignedInLinks} from '../SignedInLinks'


describe('SignedInLinks component',() =>{

    it('should render the SignedInLinks component', () =>{
        const props = {
            auth: {
                uid: 12
            },
            authError: null
        }

        const wrapper = shallow(<SignedInLinks {...props}/>)
        expect(wrapper.find('.container').length).toBe(1)
    })
})