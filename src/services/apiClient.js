import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "147a07cc80034b3e8cfa185c96dc98b0",
  },
});
