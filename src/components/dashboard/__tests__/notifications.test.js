import React from "react";
import {shallow} from "enzyme";
import Notifications from '../Notifications'

const setUp = (props = {}) => {
        const component = shallow(<Notifications {...props}/>)
        return component;
}
// it('It should render the paragraph without errors',() =>{
//     const component = shallow(<Notifications/>)
//     console.log(component.debug())
//     const wrapper = component.find('.section')
//     expect(wrapper.length).toBe(1);
// })

describe('Notification Component',()=> {
    let component;
    
    beforeEach(() =>{
        component = setUp();
    });

    it('Should render wihout erros',()=>{
        const wrapper = component.find('.notifications');
        expect(wrapper.length).toBe(1);       
    
    })
    
    it('should  not render notifications without props',() => {
        const wrapper = component.find('.pink-text')
        expect(wrapper.length).toBe(0)
    })

    it('should render notification when props are passed',() =>{
        let props = {id: 2, user: "test", content: "Some content",time: "10:00"}
        let coponentWithProps = setUp(props)
        const wrapper = coponentWithProps.find('.pink-text');
        // expect(wrapper.length).toBe(1); 
        expect(wrapper.text().includes("test")).toBe(true);
 

    })
})