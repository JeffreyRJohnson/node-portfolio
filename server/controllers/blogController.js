const express = require('express')


const blogController = {}

blogController.index = (req, res) => {
  res.render('blog/index')
}

blogController.create = (req, res) => {
  res.render('blog/show')
}

blogController.store = (req, res) => {
  res.render('blog/index')
}

blogController.show = (req, res) => {
  res.render('blog/show')
}

blogController.edit = (req, res) => {
  res.render('blog/index')
}

blogController.update = (req, res) => {
  res.render('blog/index')
}

blogController.destroy = (req, res) => {
  res.render('blog/index')
}


module.exports = blogController
