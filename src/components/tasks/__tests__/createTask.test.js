import React from 'react'
import {shallow} from 'enzyme'
import {CreateTask} from '../CreateTask'


describe('Create Task component',() =>{

    it('should render the signin component', () =>{
        const props = {
            auth: {
                uid: 123
            },
            authError: null
        }

        const wrapper = shallow(<CreateTask {...props}/>)
        expect(wrapper.find('.container').length).toBe(1)
    })
})