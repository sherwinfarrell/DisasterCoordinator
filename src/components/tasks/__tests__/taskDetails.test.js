import React from 'react'
import {shallow} from 'enzyme'
import {TaskDetails} from '../TaskDetails'


describe('Task Details component',() =>{

    it('should render the signin component', () =>{
        const props = {
            auth: {
                uid: 123
            },
            authError: null
        }

        const wrapper = shallow(<TaskDetails {...props}/>)
        expect(wrapper.find('.container').length).toBe(1)
    })
})