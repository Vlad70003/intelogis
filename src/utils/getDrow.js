import mapboxgl from "mapbox-gl";

export class GetDrow {
  constructor(name) {
    // вызывает сеттер
    this.name = [];
  }

  getBounds = ({ coordinates, map }) => {
    const bounds = new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]);

    for (const coord of coordinates) {
      bounds.extend(coord);
    }

    map?.current?.fitBounds(bounds, {
      padding: 20,
    });
  };

  addMarker = ({ startPoint, endPoint, map }) => {
    const marker = new mapboxgl.Marker()
      .setLngLat([startPoint, endPoint])
      .addTo(map.current);
    this.name.push(marker);
  };

  returnMarker = () => {
    return this.name;
  };

  deleteMarker = (markers) => {
    markers?.forEach((item) => item.remove());
  };

  getDrow = ({ map, route }) => {
    const coordinates = route?.data?.routes[0]?.geometry?.coordinates;

    const firstPointStart = route?.data?.waypoints[0]?.location[0];
    const firstPointEnd = route?.data?.waypoints[0]?.location[1];
    const secondPointStart = route?.data?.waypoints[1]?.location[0];
    const endPointEnd = route?.data?.waypoints[1]?.location[1];
    const centerPointStart = (firstPointStart + secondPointStart) / 2;
    const centerPointEnd = (firstPointEnd + endPointEnd) / 2;

    map?.current.flyTo({
      center: [centerPointStart, centerPointEnd],
      zoom: 12,
    });
    map?.current.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8,
      },
    });

    this.getBounds({ coordinates, map });

    this.addMarker({
      startPoint: firstPointStart,
      endPoint: firstPointEnd,
      map,
    });
    this.addMarker({
      startPoint: secondPointStart,
      endPoint: endPointEnd,
      map,
    });
  };
}
