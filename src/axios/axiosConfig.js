import axios from 'axios'

const appFetch = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
      "Content-Type":" application/json;charset=utf-8",
    },
})

export default appFetch;
