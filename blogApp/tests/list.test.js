const listHelper = require('../utils/list_helper');

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }
];
test('dummy returns one', () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  expect(result).toBe(1)
});


test('Total amount of likes', () => {
  const result = listHelper.totalLikes(blogs);
  expect(result).toBe(36)
});

describe("The blog with the highest amount of likes", () => {
  test('Most likes', () => {
    const mostLikes = listHelper.favoriteBlog(blogs);
    expect(mostLikes).toEqual(blogs[2])
  });
});


describe("Author who has written the most amount of blogs", () => {

  test("Returns the author with most written blogs and the amount of blogs.", () => {
    let occurrence = {};
    let compare = 0;
    let mostBlogsWritten = "";
    let result = {};

    const countFunction = (blogs) => {

      const authors = blogs.map(m => m.author);
      const authorsLength = authors.length;

      for (let i = 0; i < authorsLength; i++) {
        let author = authors[i];

        if (occurrence[author] === undefined) {
          occurrence[author] = 1;
        } else {
          occurrence[author] = occurrence[author] + 1;
        }

        if (occurrence[author] > compare) {
          compare = occurrence[author];
          mostBlogsWritten = author;
          result = {author: mostBlogsWritten, blogs: compare}
        }
      }
      return(result)
    };

    countFunction();
    console.log(result);
    expect(result).toMatchObject({"author": "Robert C. Martin", "blogs": 3})

  });
});

describe("Author with the most likes", () => {

  test("Author with the most amount of likes and the amount of likes will be returned", () => {
    const authors = blogs.map(m => m.author);

    let occurrence = {};
    let compare = 0;
    let result = {};

    const mostLikes = () => {
      console.log(blogs.length);
      for (let i = 0; i < blogs.length; i++) {
        let author = authors[i];

        if (occurrence[author] === undefined) {
          occurrence[author] = blogs[i].likes;
        } else {
          occurrence[author] = occurrence[author] + blogs[i].likes;
        }

        if (occurrence[author] > compare) {
          let mostLikedAuthor = author;
          compare = occurrence[author];
          result = {author: mostLikedAuthor, likes: compare}
        }
      }
      return(result)
    };

    mostLikes();
    console.log(result);
    expect(result).toMatchObject({"author": "Edsger W. Dijkstra", "likes": 17})
  })
});

