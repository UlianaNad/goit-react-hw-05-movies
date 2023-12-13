import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'fd414160c84010c37fd4e795cc45de31';
export const fetchTopMovies = async () =>{
    const {data} = await axios.get(`trending/movie/day?api_key=${API_KEY}`)
    console.log(data);
    return data.results;
}

export const fetchMovieById = async(id) =>{
    const {data} = await axios.get(`movie/${id}?api_key=${API_KEY}`)
    console.log(data);
    return data;
}

export const fetchCastByMovieId = async(id) =>{
    const {data} = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`)
    console.log(data);
    return data.cast;
}

export const fetchReviewsByMovieId = async(id) =>{
    const {data} = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`)
    console.log(data);
    return data.results;
}
