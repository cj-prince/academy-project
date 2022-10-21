import axios from 'axios'

function userCreate(body){
  return axios.post(`http://localhost:5000/admin/login`, body)
}

export {userCreate}