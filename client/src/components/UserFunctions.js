import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      username: newUser.username,
      university: newUser.university,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      if(response.data.correct == true){
        console.log(response)
        localStorage.setItem('usertoken', response.data.token)
        return response.data.correct
      }
      else{
        return response.data.correct
      }
        
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
