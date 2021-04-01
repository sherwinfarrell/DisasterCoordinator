
  
  export const addLatLng = (latLng) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        // console.log("I've reached here and the lat longs are ",  latLng)
        // firestore
        // .collection("pois").doc("hello").collection("SUBCOLLECTION")
        // .add(latLng)
        // .then(() => {
        //   console.log("Then it was done");
        //   dispatch({ type: "LATLNG_ADDED", latLng });
        // })
        // .catch(err => {
        //   dispatch({ type: "ERROR", err });
        // });

        firebase.ref("emergency_coordinator/pois/poi1").push(latLng).then(() => {
            // console.log("Then it was done");
            dispatch({ type: "LATLNG_ADDED", latLng });
          })
          .catch(err => {
            dispatch({ type: "ERROR", err });
          });
  
    }
};

export const addLatLngs = (latLng, addCount) => {
  return (dispatch, getState, {getFirestore, getFirebase}) => {
      const firestore = getFirestore();
      const firebase = getFirebase();
      // console.log("I've reached here and the lat longs are ",  latLng)
      // firestore
      // .collection("pois").doc("hello").collection("SUBCOLLECTION")
      // .add(latLng)
      // .then(() => {
      //   console.log("Then it was done");
      //   dispatch({ type: "LATLNG_ADDED", latLng });
      // })
      // .catch(err => {
      //   dispatch({ type: "ERROR", err });
      // });
    let key = 'zone'+ addCount;
      firebase.ref("emergency_coordinator/disaster/rectangle").push( JSON.stringify(latLng)).then(() => {
          // console.log("Then it was done");
          dispatch({ type: "LATLNG_ADDED", latLng });
        })
        .catch(err => {
          dispatch({ type: "ERROR", err });
        });

  }
};

export const addCircle = (latLng, radius, addCount) => {
  return (dispatch, getState, {getFirestore, getFirebase}) => {
      const firestore = getFirestore();
      const firebase = getFirebase();
      // console.log("I've reached here and the lat longs are ",  latLng)
      // firestore
      // .collection("pois").doc("hello").collection("SUBCOLLECTION")
      // .add(latLng)
      // .then(() => {
      //   console.log("Then it was done");
      //   dispatch({ type: "LATLNG_ADDED", latLng });
      // })
      // .catch(err => {
      //   dispatch({ type: "ERROR", err });
      // });
    let coordinates  = {"lat": latLng.lat, "lng": latLng.lng, "radius": radius, "status": "Active" }
    let key = 'zone'+ addCount;
      firebase.ref("emergency_coordinator/disaster/circle/").push( JSON.stringify(coordinates)).then(() => {
          // console.log("Then it was done");
          dispatch({ type: "LATLNG_ADDED", latLng });
        })
        .catch(err => {
          dispatch({ type: "ERROR", err });
        });

  }
}; 