const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((sum, post) => sum + post.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null

  const mostLiked = blogs.reduce((previous, current) => {
    return previous.likes > current.likes ? previous : current
  })

  return {
    title: mostLiked.title,
    author: mostLiked.author,
    likes: mostLiked.likes,
  }
}

const lodash = require("lodash")

const mostBlogs = (blogs) => {
  const blogCount = lodash.countBy(blogs, "author")

  const maxAuthor = Object.keys(blogCount).reduce((a, b) => {
    return blogCount[a] > blogCount[b] ? a : b
  })

  return {
  author: maxAuthor,
  blogs: blogCount[maxAuthor],
  }
}
const mostLikes = (blogs) => {
  const likeCount = lodash(blogs)
    .groupBy("author")
    .map((objs, key) => ({
      author: key,
      likes: lodash.sumBy(objs, "likes"),
    }))
    .value()

  return likeCount.reduce((a, b) => {
    return a.likes > b.likes ? a : b
  })
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }