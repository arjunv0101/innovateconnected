const express = require('express')
const posts = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Post = require('../models/Post')
posts.use(cors())

posts.get('/', (req, res) => {
    Post.find()
        .then(posts => {
            res.json(posts)
            console.log(posts)
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

posts.get('/myposts', (req, res) => {
    Post.find({email: req.headers.authorization})
        .then(posts => {
            res.json(posts)
            console.log(posts)
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

posts.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error: ' + err));
});


posts.post('/add', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const articletitle = req.body.articletitle;
  const articleauthor = req.body.articleauthor;
  const content = req.body.content;
  const date = req.body.date;
  const likes = 0;

  const newPost = new Post({username, articletitle, email, articleauthor, content, date, likes});

  newPost.save()
      .then(() => res.json('Post Submitted!'))
      .catch(err => res.status(400).json('Error: ' + err));

})

posts.post('/delete/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id)
    .then(post => res.json('Yikes! Post Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
})

posts.post('/like/:id').post((req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            post.likes = post.likes + 1;
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = posts;
