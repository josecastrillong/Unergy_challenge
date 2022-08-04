import axios from "axios";

const URL = "/api/landing/project";

const getProjects = () =>  axios.get(URL, {
  method: 'HEAD',
  mode: 'no-cors',
  })
  .then(response => response.data);

export default getProjects;
