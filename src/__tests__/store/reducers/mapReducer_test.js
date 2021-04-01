// import React from 'react';
// import renderer from 'react-test-renderer';

import mapReducer from '../../../store/reducers/mapReducer';
// react components testing.
// it('renders correctly', () => {
//   const tree = renderer
//     .create(<Link page="http://www.facebook.com">Facebook</Link>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });


// describe("Button component", () => {
//   test("Matches the snapshot", () => {
//     const button = create(<Button />);
//     expect(button.toJSON()).toMatchSnapshot();
//   });
// });


it("Testing mapReducer for correct output" , () => {
    
    let testState_LatLngAdded = {log: {lat:10,long:10}};
    expect(mapReducer({}, {type:"LATLNG_ADDED",latLng: {lat: 10,long:10}})).toStrictEqual(testState_LatLngAdded);
})


it("Testing mapReducer for correct output" , () => {
    let testState_LatLngError = {log: "error"};
    expect(mapReducer({}, {type:"LATLONG_ERROR",err:"error"})).toStrictEqual(testState_LatLngError);
})
