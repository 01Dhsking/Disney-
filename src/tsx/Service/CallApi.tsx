import axios from "axios"

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "a914972c4f4af87b579d40095c022beb"

const getVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

export default {getVideos}