

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Map, TileLayer, FeatureGroup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

import 'leaflet-draw/dist/leaflet.draw.css';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet-draw';
import {connect} from "react-redux";
import {firestoreConnect, firebaseConnect} from "react-redux-firebase";
import {compose} from "redux";
import { useSelector, useDispatch } from "react-redux";
import { addLatLng, addLatLngs, addCircle } from "../../store/actions/addLatLng";
import {iconPerson} from './PersonMarker'
import { useFirestoreConnect, useFirebaseConnect, useFirestore, useFirebase } from "react-redux-firebase";
import { DivIcon, marker, useMap , Marker, Popup, icon} from 'leaflet';
import L from 'leaflet';
import Control from 'react-leaflet-control';
import personMarker from "../../img/personmarker.svg"
import ambulance from "./icons/ambulance.png"
import hospital from "./icons/hospital.png"
import policecar from "./icons/policecar.png"
import firetruck from "./icons/firetruck2.png"
import bus from "./icons/bus.jpg"
import car from "./icons/car.jpg"
import roadblock from "./icons/Roadblock.png"
import { DriftMarker } from "leaflet-drift-marker";
import AnimatedMarker from "./AnimatedMarker"


let roadblockIcon = L.icon({
  iconUrl: roadblock,
  iconSize:     [20, 40], // size of the icon
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76]// 

});



let personIcon = L.icon({
    iconUrl: personMarker,
    iconSize:     [38, 95], // size of the icon
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]// 

  });


let ambulanceIcon = L.icon({
    iconUrl: ambulance,
    iconSize:     [30, 50], // size of the icon
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]// 

  });

  let hospitalIcon = L.icon({
    iconUrl: hospital,
    iconSize:     [30, 50], // size of the icon
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]// 

  });

  let policecarIcon = L.icon({
    iconUrl: policecar,
    iconSize:     [30, 50], // size of the icon
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]// 

  });
  let firetruckIcon = L.icon({
    iconUrl: firetruck,
    iconSize:     [30, 50], // size of the icon
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]// 

  });
  let busIcon = L.icon({
    iconUrl: bus,
    iconSize:     [30, 50], // size of the icon
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]// 

  });
  let carIcon = L.icon({
    iconUrl: car,
    iconSize:     [30, 50], // size of the icon
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]// 

  });
 


export const MapView = (props) => {
   const mapRef = useRef()

    const [editableFG, setEditableFG] = useState(null);
    const [ latLng, setLatLng] = useState(null);
    const [mapLayers, setMapLayers] = useState([]);
    const [map, setMap] = useState(null);
    const [markers, setMarkers]= useState([])
    const [markerType , setMarkerType] = useState(null)
    const [markerSelected, setMarkerSelected] = useState(false)
    const [defaultIcon, setDefaultIcon] = useState(null)
    const disasters = props.disasters;
     

    let disasterCount = 0
    let delMarker = false

    const _onCreated = e => {
    
        const drawnItems = editableFG.leafletElement._layers;

        var layer = e.layer;

        var drawedCord = e.layer.toGeoJSON().geometry.coordinates;
        var radius = e.layer.toGeoJSON()
        const {layerType } = e;
      



        // if (Object.keys(drawnItems).length > 1) {
        //     Object.keys(drawnItems).forEach((layerid, index) => {
        //         if (index > 0) return;
        //         const layer = drawnItems[layerid];
        //         editableFG.leafletElement.removeLayer(layer);
        //     });
        //     console.log(drawnItems);
        // }
  

       if(e.layerType =="rectangle"){
            // console.log(layer.getLatLngs())
            let latLngs = layer.getLatLngs()
            let latLngsArr = []

            Object.keys(latLngs[0]).forEach((e,i) => latLngsArr.push([latLngs[0][e].lat, latLngs[0][e].lng]))
            console.log("These are the Lngs and Lat", latLngsArr)

            let coordinates = {'coordinates': latLngsArr}

            props.addLatLngs(coordinates, disasterCount)
            disasterCount = disasterCount +1;

       }
       if(e.layerType == "circle"){
           console.log(layer._latlng)
           console.log(layer._mRadius)
           props.addCircle(layer._latlng, layer._mRadius, "Active")
        //    props.addLatLng({"Latitude":lat, "Longitude" : lng})

       }

    };

 


    const onFeatureGroupReady = reactFGref => {
        // store the ref for future access to content
        setEditableFG(reactFGref);
    };


    const handleClick = (e) => {
        // console.log(instance.fireStore);
        const { lat, lng } = e.latlng;


        console.log(lat, lng);
        // firebase.ref("poi").set(latLng)
        // markers.push((lat, lng, markerType))
        // setMarkers(markers)

       let map = mapRef.current.leafletElement;

       console.log("Marker Selected is", defaultIcon)
    
       if(defaultIcon != null){
        let marker = L.marker(e.latlng, {icon:defaultIcon})
        map.addLayer(marker)

        const curMarkerType = markerType
        let currMarker = [ curMarkerType, marker]
       
         setMarkers(markers.concat( [[markerType, marker]])) 
        // setMarkers(markers.push([ markerType, marker]))
        console.log(markers)
      
       }
        props.addLatLng({"Latitude":lat, "Longitude" : lng})

      }

    // const markerOnClick = (e) => {

    //    let map = mapRef.current.leafletElement;
    //    console.log(map)
    //    L.marker([53.335229447516774, -6.269385586492718], {icon:ambulanceIcon}).addTo(map)
    // }

    const selectHandler = (e) => {
        
      let selected =   document.getElementById("markerdropdown").value
      setMarkerType(document.getElementById('markerdropdown')[document.getElementById('markerdropdown').selectedIndex].innerHTML)

      if(selected == 1)
      {
        setDefaultIcon(null);
      }
      if(selected == 2)
      {           
           setDefaultIcon(ambulanceIcon);


      }
      if(selected == 3)
      {
        setDefaultIcon(firetruckIcon);


      }
      if(selected == 4)
      {
        setDefaultIcon(policecarIcon);


      }
      if(selected == 5)
      {
        setDefaultIcon(hospitalIcon);


      }
      if(selected == 6)
      {
        setDefaultIcon(busIcon);


      }
      if(selected == 7)
      {
            setDefaultIcon(carIcon);

      }
      if(selected == 8)
      {
            console.log("setting default icon")
            setDefaultIcon(personIcon);

      }
      if(selected == 9){
        setDefaultIcon(roadblockIcon);
      }
    }


    function reverseCoord(coords) {
      var coordsNew = [];
      coords.forEach(function (coord) {
        coordsNew.push([coord[1], coord[0]]);
      });
      return coordsNew;
    }

    function deleteMarker(e){
      if(delMarker == false){
        delMarker = true
      }
      else if(delMarker == true){
        delMarker = false
      }
    }

    function deleteMakrerHandler(e){
      console.log(e)
      let map = mapRef.current.leafletElement;
      let selected =   document.getElementById("deletemarker").value
      if(markers.length == 1){
        map.removeLayer(markers[0][1])
        setMarkers([])
      }

      if(markers.lenght != 0 && selected!=0){
      let markerType = markers[selected][1]
      map.removeLayer(markers[selected][1])
      setMarkers(markers.filter((m)=> {return m[1]!=markerType;}))
      }

    }

    useEffect(() => {
      // Update the document title using the browser API
            let map = mapRef.current.leafletElement;
            let hospitalMakers = [[53.33925098,	-6.29706676],[53.29108525	,-6.378797956],[53.31617842	,-6.213683926],[53.29303003	,-6.136440217],[53.35892378	,-6.2656689],[53.38819173	,-6.369721092],[53.39092162	,-6.223907]]

            hospitalMakers.forEach((m)=>  L.marker(m, {icon:hospitalIcon}).addTo(map))    

            let coordinates = [[-6.31289, 53.3268], [-6.31213, 53.32696], [-6.31146, 53.32711], [-6.31058, 53.3273], [-6.30918, 53.3276], [-6.30912, 53.32761], [-6.30873, 53.3277], [-6.30789, 53.32788], [-6.30754, 53.32796], [-6.30733, 53.328], [-6.30622, 53.32824], [-6.30609, 53.32827], [-6.3049, 53.32852], [-6.3043, 53.32866], [-6.30357, 53.32882], [-6.30338, 53.32886], [-6.30319, 53.3289], [-6.30268, 53.32901], [-6.30224, 53.32911], [-6.30206, 53.32915], [-6.30127, 53.32933], [-6.30123, 53.32934], [-6.30088, 53.32941], [-6.29977, 53.32966], [-6.29954, 53.32971], [-6.29921, 53.32978], [-6.29893, 53.32985], [-6.29869, 53.32992], [-6.29858, 53.32995], [-6.29838, 53.33004], [-6.2983, 53.33008], [-6.29819, 53.33013], [-6.29748, 53.33042], [-6.29713, 53.33055], [-6.2971, 53.33056], [-6.29655, 53.3308], [-6.29624, 53.33092], [-6.29594, 53.33103], [-6.29542, 53.33124], [-6.29475, 53.3315], [-6.29438, 53.33165], [-6.29415, 53.33174], [-6.29391, 53.33184], [-6.29386, 53.33185], [-6.29377, 53.33193], [-6.29363, 53.33202], [-6.29353, 53.33208], [-6.29344, 53.33213], [-6.29319, 53.33229], [-6.293, 53.33242], [-6.29275, 53.33259], [-6.2922, 53.33297], [-6.29192, 53.33316], [-6.2914, 53.33352], [-6.29097, 53.3338], [-6.29093, 53.33383], [-6.29072, 53.33396], [-6.29058, 53.33405], [-6.29038, 53.33416], [-6.29018, 53.33428], [-6.29006, 53.33439], [-6.29001, 53.33443], [-6.28993, 53.33459], [-6.28992, 53.3346], [-6.28967, 53.3351], [-6.28956, 53.33533], [-6.28947, 53.33547], [-6.2893, 53.33567], [-6.28905, 53.33589], [-6.28901, 53.33592], [-6.28883, 53.33605], [-6.28856, 53.33621], [-6.28779, 53.33661], [-6.28725, 53.33685], [-6.28646, 53.33718], [-6.28625, 53.33727], [-6.28575, 53.33745], [-6.28554, 53.33751], [-6.28525, 53.3376], [-6.28479, 53.33771], [-6.28472, 53.33773], [-6.28449, 53.33779], [-6.28429, 53.33784], [-6.2839, 53.33791], [-6.2835, 53.33797], [-6.28271, 53.3381], [-6.28221, 53.33815], [-6.28184, 53.33819], [-6.28182, 53.33819], [-6.28146, 53.33824], [-6.2813, 53.33826], [-6.28064, 53.33834], [-6.28011, 53.33846], [-6.27948, 53.33866], [-6.27972, 53.33898], [-6.27981, 53.33911], [-6.27999, 53.33935], [-6.27946, 53.33958], [-6.27908, 53.33972], [-6.27893, 53.33976], [-6.2786, 53.33981], [-6.27821, 53.33984], [-6.27802, 53.33984], [-6.27804, 53.33993], [-6.27806, 53.34017], [-6.27811, 53.3403], [-6.27813, 53.34037], [-6.27823, 53.34055], [-6.27838, 53.34085], [-6.27858, 53.3412], [-6.27862, 53.34128], [-6.27879, 53.34161], [-6.27911, 53.34223], [-6.27915, 53.3424], [-6.27916, 53.34256], [-6.27912, 53.34281], [-6.2785, 53.34279], [-6.27818, 53.34279], [-6.27797, 53.34279], [-6.27775, 53.34279], [-6.27742, 53.34282], [-6.27718, 53.34287], [-6.2771, 53.34288], [-6.27692, 53.34292], [-6.27617, 53.34307], [-6.27606, 53.34313], [-6.27598, 53.34315], [-6.27581, 53.34319], [-6.2758, 53.34324], [-6.27544, 53.34348], [-6.27539, 53.34351], [-6.27565, 53.34364], [-6.27587, 53.34379], [-6.27598, 53.34384], [-6.27603, 53.34388], [-6.27622, 53.34403], [-6.27633, 53.34415], [-6.27636, 53.34428], [-6.27627, 53.34459], [-6.27609, 53.34493], [-6.276, 53.34508], [-6.27587, 53.34528], [-6.27584, 53.34532], [-6.27575, 53.34554], [-6.27567, 53.34573], [-6.27564, 53.34578], [-6.27558, 53.34588], [-6.2755, 53.34605], [-6.27528, 53.34645], [-6.27509, 53.34698], [-6.27507, 53.34705], [-6.27506, 53.34707], [-6.27505, 53.34708], [-6.27505, 53.3471], [-6.27495, 53.3473], [-6.27486, 53.34748], [-6.27481, 53.34778], [-6.27477, 53.348], [-6.27476, 53.34831], [-6.27473, 53.34863], [-6.27472, 53.34879], [-6.27471, 53.34919], [-6.27469, 53.3495], [-6.27468, 53.34957], [-6.27466, 53.34985], [-6.27461, 53.34998], [-6.27454, 53.35014], [-6.27438, 53.35014], [-6.27376, 53.35015], [-6.2736, 53.35016], [-6.27321, 53.35017], [-6.27285, 53.35019], [-6.27246, 53.35024], [-6.27231, 53.35026], [-6.27197, 53.35031], [-6.27163, 53.35037], [-6.27123, 53.35047], [-6.27089, 53.35058], [-6.27059, 53.35071], [-6.27036, 53.35085], [-6.27007, 53.35107], [-6.26985, 53.35127], [-6.26981, 53.35131], [-6.26978, 53.35135], [-6.26914, 53.35206], [-6.26904, 53.35217], [-6.2684, 53.35286], [-6.26837, 53.35289], [-6.26834, 53.35292], [-6.26806, 53.35317], [-6.26694, 53.3542], [-6.26652, 53.3546], [-6.26639, 53.35473], [-6.26613, 53.35501], [-6.26587, 53.3553], [-6.26569, 53.35552], [-6.26533, 53.35592], [-6.26526, 53.35602], [-6.26515, 53.35613], [-6.26469, 53.35663], [-6.26457, 53.35676], [-6.26455, 53.35678], [-6.26446, 53.35687], [-6.26429, 53.35703], [-6.26413, 53.3572], [-6.26398, 53.35736], [-6.26391, 53.35751], [-6.26323, 53.35805], [-6.26274, 53.35845], [-6.26204, 53.35903], [-6.26175, 53.35933], [-6.26132, 53.35976], [-6.26125, 53.35985], [-6.26052, 53.36061], [-6.26047, 53.36066], [-6.26037, 53.36076], [-6.26004, 53.36113], [-6.2599, 53.36126], [-6.25974, 53.36138], [-6.25972, 53.36141], [-6.25962, 53.36154], [-6.25961, 53.36155], [-6.25958, 53.36158], [-6.25951, 53.36167], [-6.2595, 53.36169], [-6.25949, 53.36175], [-6.25936, 53.36189], [-6.25881, 53.3625], [-6.25852, 53.36282], [-6.25844, 53.36285], [-6.25827, 53.36301], [-6.25791, 53.36342], [-6.25777, 53.36357], [-6.25759, 53.36376], [-6.25742, 53.36394], [-6.25719, 53.3642], [-6.25711, 53.36429], [-6.25677, 53.36472], [-6.25648, 53.36508], [-6.25618, 53.36547], [-6.2559, 53.3659], [-6.25575, 53.36613], [-6.25555, 53.36649], [-6.25549, 53.36678], [-6.25547, 53.36693], [-6.25546, 53.36705], [-6.25546, 53.36714], [-6.25546, 53.36719], [-6.25546, 53.36727], [-6.25547, 53.36749], [-6.25547, 53.36755], [-6.25546, 53.36762], [-6.25544, 53.36769], [-6.25524, 53.3682], [-6.25519, 53.3683], [-6.25519, 53.36831], [-6.25515, 53.3684], [-6.255, 53.36875], [-6.25492, 53.36887], [-6.2549, 53.3689], [-6.25482, 53.36903]];
            let newCoorinates = reverseCoord(coordinates);
            var firstpolyline = new L.Polyline(newCoorinates, {
              color: 'red',
              weight: 10,
              opacity: 0.5,
              smoothFactor: 1
            });

            firstpolyline.addTo(map);

            var line = L.polyline(newCoorinates),
            animatedMarker = L.animatedMarker(line.getLatLngs(),  {
              icon: ambulanceIcon
            });
            map.addLayer(animatedMarker);





    
    },[]);


  useEffect(()=>{

    let map = mapRef.current.leafletElement;
    if(disasters){
      Object.keys(disasters).forEach((key,value) => {
        Object.keys(disasters[key].roadblocks).forEach((key,value)=>{
          {/* console.log(disasters[0].roadblocks[key].location) */}
          // console.log(disasters[0].roadblocks[key])
          let marker = L.marker(disasters[key].roadblocks[key].location, {icon:roadblockIcon})
          map.addLayer(marker)
        })
      })
  
      Object.keys(disasters).forEach((key,value) => {
        console.log(disasters[key].polygon)
        let polygon = JSON.parse(disasters[key].polygon)
        if(polygon.coordinates){
          console.log(polygon.coordinates)
          let polygonCoord = L.polygon([[53.34276763979037, -6.28900316432022],[53.33196871051201, -6.248443534688363],[53.3223590964288 ,-6.296366294361042],[53.34276763979037, -6.28900316432022]])
          map.addLayer(polygonCoord)
        }
      })
  
    }

   
  
  },[disasters])

    return (
        <div>
        <Map ref={mapRef}
            center={[53.3498, -6.2603]}
            zoom={12}
            style={{ height: '91vh' }}
            onclick = {handleClick} 
            whenCreated={setMap}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
                    {/* <TileLayer
          attribution="Powered by <a href=&quot;https://www.esri.com&quot;>Esri</a>"
          url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        /> */}

      


            {disasters && Object.keys(disasters).forEach((key,value) => {
                Object.keys(disasters[key].roadblocks).forEach((key,value)=>{
                  {/* console.log(disasters[0].roadblocks[key].location) */}

                })
              })}

              {disasters && Object.keys(disasters).forEach((key,value) => {
                Object.keys(disasters[0].evacuationPoints).forEach((key,value)=>{
                  {/* console.log(disasters[0].evacuationPoints[key]) */}
                })
              })}
             
            <FeatureGroup
                ref={featureGroupRef => {
                    onFeatureGroupReady(featureGroupRef);
                }}>
                <EditControl style={{color: "red"}} 
                        draw={{
                                    circle: {
                                        shapeOptions: { color: "red" },
                                        showLength: true,
                                        metric: true,
                                        feet: true,
                                        showArea: true
                                    },
                                    polyline: { 
                                        shapeOptions: { color: "red" } 
                                    },
                                    polygone: { 
                                        shapeOptions: { color: "red" } 
                                    },
                                    rectangle: { 
                                        shapeOptions: { color: "red" } 
                                    },
                                
                                    

                                    // marker: false,
                                    circlemarker:false

                            }}
                                
                        position="topright" onCreated={_onCreated} />
            </FeatureGroup>
         
           
            <Control position="bottomleft" >
                    {/* <button 
                    onClick={ markerOnClick }
                    >
                    Person Marker
                    </button>
                     */}

                     <div className="input-field col s12">
                        <select onChange = {selectHandler} id ="markerdropdown" className="browser-default">
                            <option  value="" disabled selected>Select Marker</option>
                            <option value="1"></option>
                            <option value="2">Ambulance Marker</option>
                            <option value="3">Firetruck Marker</option>
                            <option value="4">Police Marker</option>
                            <option value="5">Hospital Marker</option>
                            <option value="6">Bus Marker</option>
                            <option value="7">Car Marker</option>
                            <option value="8">Person Marker</option>
                            <option value="9">RoadBlock Marker</option>

                        </select>
                        <label></label>

                        </div>
                        {/* <button onClick ={deleteMarker}>Delete Marker</button> */}
                      

                        

                            
                        
                     <div className="input-field col s12">
                        <select onChange = {deleteMakrerHandler} id ="deletemarker" className="browser-default">
                            <option  value="" disabled selected>Delete Marker</option>
                            <option value="0"></option>

                             {markers && markers.map((m, i)=> 
                              <option value={i}>{ (i+1) + " " + m[0]}</option>
                            )}
                            

                        </select>
                        <label></label>

                        </div>

            </Control>

    
        </Map>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        addLatLng: (latLng) => dispatch(addLatLng(latLng)),
        addLatLngs: (latLngs, count)=> dispatch(addLatLngs(latLngs, count)),
        addCircle: (latLngs,type, status)=> dispatch(addCircle(latLngs, type,status))

    }
};

const mapStateToProps = (state) => {
  return {
      disasters : state.firestore.ordered.disasters
  }
};

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([
  {collection: 'disasters'},
]))(MapView);





