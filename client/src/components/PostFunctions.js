import axios from 'axios'
import jwt_decode from 'jwt-decode'


export const addpost = newPost => {
  return axios
    .post('posts/add', {
            username: newPost.username,
            email: newPost.email,
            articletitle: newPost.articletitle,
            articleauthor: newPost.articleauthor,
            content: newPost.content,
            date: newPost.date,
    })
    .then(response => {
      console.log('Posted')
    })
}

export const getposts = hello => {
  console.log("infunction")
  return axios
    .get('posts/', {})
    .then(response => {
      console.log("in then")
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getprofileposts = hello => {
  console.log("infunction2")
  
  const token = localStorage.usertoken
  const decoded = jwt_decode(token)

  console.log(decoded.email)

  return axios
    .get('posts/myposts', {
      headers: { authorization: decoded.email} })
    .then(response => {
      console.log("in then2")
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}