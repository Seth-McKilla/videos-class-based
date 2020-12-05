import axios from "axios";

const KEY = "AIzaSyCN6OEc0n8_md4c_2WB4Wi6VkolzdaMDbo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
