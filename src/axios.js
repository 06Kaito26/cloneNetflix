import axios from 'axios'

//TMDBからのbaseURLリクエストを作成
const instance = axios.create({
  // TMDBのベースとなるURLを定義
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
