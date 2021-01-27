const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post.find({ status: 'published' })
      .select('_id author created title photo status')
      .sort({ created: -1 });
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post.findById(req.params.id);
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/posts', async (req, res) => {
  const schema = Joi.object({
    author: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'pl'] },
    }),
    created: Joi.date().iso().required(),
    updated: Joi.date().iso().required(),
    status: Joi.string().valid('draft', 'published', 'finished').required(),
    title: Joi.string().min(3).max(10).required(),
    text: Joi.string().min(3).max(50).required(),  
    location: Joi.string().min(0).allow('').allow(null),
    phone: Joi.string().min(0).allow('').allow(null),
    price: Joi.number().allow('').allow(null),
    photo: Joi.any().meta({swaggerType: 'file'}).optional().allow('').allow(null).description('image file'),
  });
  try {
    const { author,
      created,
      updated,
      status,
      title,
      text,
      photo,
      price,
      phone,
      location } = req.body;    
    const value = await schema.validateAsync({
      author: author,
      created: created,
      updated: updated,
      status: status,
      title: title,
      text: text,
      photo: photo,
      price: price,
      phone: phone,
      location: location,
    });
    const newPost = new Post(value);
    await newPost.save();
    res.json({ message: value });
  } catch (err) {
    if (err.name === 'ValidationError'){
      res.status(400).json({ message: err.message }); 
    } else {
      res.status(500).json({ message: err.message });
    }}
});

module.exports = router;
