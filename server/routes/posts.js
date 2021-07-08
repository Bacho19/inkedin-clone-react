const express = require('express')

const route = express()
const Post = require('../models/Post')

route.post('/', async (req, res) => {
    try {
        const {owner, text} = req.body

        const post = new Post({
            owner,
            text
        })

        await post.save()

        res.json({post, message: 'Post was created'})

    } catch (e) {
        res.status(500).json('Something went wrong, please try again')
    }

})

route.get('/', async (req, res) => {
  try {

      const posts = await Post.find()

      res.json(posts)
  } catch (e) {
      res.status(500).json('Something went wrong, please try again')
  }
})

route.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params

        await Post.findOneAndRemove({_id: id})
        res.json('Post was removed')
    } catch (e) {
        res.status(500).json('Something went wrong, please try again')
    }
})

module.exports = route