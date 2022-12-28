/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import style from "./styles.module.scss";

import Router from "../../components/Routers/Router";
import { GetDrow } from "../../utils/getDrow";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWdvcnBhcmlhaCIsImEiOiJjbGF3bG84aTIwZHRnM3hxbW5jcHZyMXFtIn0.486bVliQh0qO-Z81WeZC9A";

export function Map({ route }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const getDrow = new GetDrow();
  const [markerListArr, setMarkerListArr] = useState(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.31, 59.93],
      zoom: 9,
    });

    return () => (map.current = null);
  }, []);

  useEffect(() => {
    if (
      route?.data?.routes?.length &&
      route?.data?.routes[0]?.geometry?.coordinates.length !== 0
    ) {
      getDrow.getDrow({ map, route });
      const markerList = getDrow.returnMarker();
      setMarkerListArr(markerList);
    } else {
      if (map.current.getLayer("route") !== undefined) {
        getDrow.deleteMarker(markerListArr);
        map.current.removeLayer("route");
        map.current.removeSource("route");
        map.current.flyTo({
          zoom: 9,
        });
      }
    }
  }, [route]);

  return (
    <div className={style.map}>
      <Router />
      <div className={style.map__wrapper} ref={mapContainer}></div>
    </div>
  );
}

export default connect(
  (state) => ({
    route: state.router.router,
  }),
  null
)(Map);
