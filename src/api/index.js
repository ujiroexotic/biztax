import axios from "axios";

const token = localStorage.getItem('token');
console.log(token)
export default axios.create({
    baseURL : 'https://biztax-backend.herokuapp.com/api/v1/user/',

  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Authorization": `Bearer ${token}`
 }
})