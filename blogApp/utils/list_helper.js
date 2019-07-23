
const dummy = (blogs) => {
  return 1
};

const totalLikes = (blogs) => {
  return blogs.reduce((prev, cur) => prev + cur.likes, 0);

};

const favoriteBlog = (blogs) => {
  const mostLikes = blogs.reduce((prev, cur) => prev > cur.likes ? prev : cur.likes);

  return blogs.find(num => num.likes === mostLikes);
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};