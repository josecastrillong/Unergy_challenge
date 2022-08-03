import axios from "axios";

const URL = 'api/landing/project/';

const getProjects = () =>  axios.get(URL)
  .then(response => response.data);


export default getProjects;