const initState = {};

const mapReducer = (state = initState, action) => {
  switch (action.type) {
    case "LATLNG_ADDED":
      console.log(action.latLng + " Latlong added succesfully");
      //modified 
      console.log(action.latLng);
      state.log = action.latLng;
      return state;
    case "LATLONG_ERROR":
      console.log("Latlong error : " + action.err);
      state.log = action.err;
      return state;
    default:
      return state;
  }
};

export default mapReducer;