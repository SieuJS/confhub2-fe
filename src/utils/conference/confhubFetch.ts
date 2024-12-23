import axios from "axios";

const confhubUrl = "http://localhost:3000/api/v1";

export const confhubFetch = axios.create({
  baseURL: confhubUrl
});
