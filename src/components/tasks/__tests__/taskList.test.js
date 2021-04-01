import React from 'react'
import {shallow} from 'enzyme'
import TaskList from '../TaskList'


describe('Task List component',() =>{

    it('should render the task list component', () =>{
        const props = {
            tasks: []
        }

        const wrapper = shallow(<TaskList {...props}/>)
        expect(wrapper.find('.task-list').length).toBe(1)
    })
})