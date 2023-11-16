import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'fd414160c84010c37fd4e795cc45de31';
export const fetchTopMovies = async () =>{
    const {data} = await axios.get(`trending/movie/day?api_key=${API_KEY}`)
    return data.results;
}
