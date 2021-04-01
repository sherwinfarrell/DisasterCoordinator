
import React from 'react'
import {shallow} from 'enzyme'
import {TaskSummary} from '../TaskSummary'


describe('Task Summary component',() =>{

    it('should render the task summary component', () =>{
        const props = {
            task: {
                id: 1,
                authorFirstName: "test",
                authorLastName: "user",
                createdAt: null
            }
        }

        const wrapper = shallow(<TaskSummary {...props}/>)
        expect(wrapper.find('.btn-delete').length).toBe(1)
    })
})