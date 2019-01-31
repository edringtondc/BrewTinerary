import axios from "axios";
const BASEURL = "http://beermapping.com/webservice/loccity/";
const APIKEY = "1e85b90225089a51575fe3432c04261e/";


export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  
};
