import axios from "axios";

const API_URL = "https://api.mapbox.com";

axios.defaults.baseURL = API_URL;

export const CategoryService = {
  async getAll(currentRoute) {
    return axios.get(
      `/directions/v5/mapbox/driving/${currentRoute?.fromLat}%2C${currentRoute?.fromLan}%3B${currentRoute?.toLat}%2C${currentRoute?.toLan}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1IjoiZWdvcnBhcmlhaCIsImEiOiJjbGF3bG84aTIwZHRnM3hxbW5jcHZyMXFtIn0.486bVliQh0qO-Z81WeZC9A`
    );
  },
};
