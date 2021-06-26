import axios from "axios";

const Api = axios.create({
    baseURL: 'http://localhost:2000/',
    
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default Api;