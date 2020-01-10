import React, {useState} from 'react'
import Select from 'react-select';


const Authors = ({result, show, updateAuthor}) => {

  console.log(result);
  const [name, setName] = useState("")
  const [born, setBorn] = useState("")

  const submit = async (e) => {
    e.preventDefault()
    await updateAuthor({
      variables: { author: name, year: born}
    })

    setName("")
    setBorn("")
  }

  if (!show) {
    return null
  }

  if (result.loading) {
    return "Loading..."
  }

  const options = result.data.allAuthors.map(authors  => {
      return {
        value: authors.name,
        label: authors.name
      }
    }
  )

  return (
    <div>
      <div>
        <h2>authors</h2>
        <table>
          <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {result.data.allAuthors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
          </tbody>
        </table>

      </div>

      <div>
        <h2>Set Birthyear</h2>

        <form onSubmit={submit}>
          <div>
            Name
            <Select
              value={name}
              onChange={( target ) => setName(target.value)}
              options={options}
            />
          </div>

          <div>
            Born
            <input
              value={born}
              onChange={({ target }) => setBorn(parseInt(target.value))}
            />
          </div>
          <button type='submit'>Update Author</button>

        </form>
      </div>

    </div>
  )
}

export default Authors