import React, {useState} from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import {gql} from 'apollo-boost'
import {useQuery, useMutation} from 'react-apollo'

const ALL_AUTHORS = gql`
{
  allAuthors {
    name
    born
    bookCount
  }
}
`

const ALL_BOOKS = gql`
{
  allBooks {
    title
    author
    published
  }
}
`
const NEW_BOOK = gql`
mutation addBook($title: String!, $author: String!, $published: Int!, $genres: [String!]) {
  addBook(
    title: $title,
    author: $author,
    published: $published,
    genres: $genres
  ) {
    title,
    published,
    genres
  }
}
`

const EDIT_BIRTHYEAR = gql`
mutation editName($author: String!, $year: Int!) {
    editAuthor(name: $author, setBornTo: $year ) {
        name
        born
      }
}
`

const App = () => {
  const [page, setPage] = useState('authors')

  const authors = useQuery(ALL_AUTHORS)
  const books = useQuery(ALL_BOOKS)

  /*Updates*/
  const [addBook] = useMutation(NEW_BOOK, {
    refetchQueries: [{query: ALL_AUTHORS}, {query: ALL_BOOKS}],
  })

  const [updateAuthor] = useMutation(EDIT_BIRTHYEAR, {
    refetchQueries: [{query: ALL_AUTHORS}, {query: ALL_BOOKS}],
  })

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors
        show={page === 'authors'}
        result={authors}
        updateAuthor={updateAuthor}
      />

      <Books
        show={page === 'books'}
        result={books}

      />

      <NewBook
        show={page === 'add'}
        functions={addBook}
      />

    </div>
  )
}

export default App