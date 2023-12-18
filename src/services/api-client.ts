import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "d65bcf00c2964dad8ebc268e55e3945a",
  },
});
