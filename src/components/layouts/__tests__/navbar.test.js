import React from 'react'
import {shallow} from 'enzyme'
import {Navbar} from '../Navbar'


describe('Navbar component',() =>{

    it('should render the Navbar component', () =>{
        const props = {
            auth: {
                uid: 12
            },
            authError: null
        }

        const wrapper = shallow(<Navbar {...props}/>)
        expect(wrapper.find('.container').length).toBe(1)
    })
})