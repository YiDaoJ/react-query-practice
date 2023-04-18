import axios from "axios";

export function getCoffeeList() {
  return axios.get("http://localhost:3000/coffee").then((res) => res.data);
}

export function getCoffeeById(id: string) {
  return axios
    .get(`http://localhost:3000/coffee/${id}`)
    .then((res) => res.data);
}
