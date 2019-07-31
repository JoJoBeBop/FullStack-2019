import React, { useState } from 'react'

const BlogForm = ({
                    handleSubmit,
                    handleNewTitle,
                    handleNewAuthor,
                    handleNewUrl
                  }) => {
  const [loginVisible, setLoginVisible] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newUrl, setNewUrl] = useState("");


  const hide = {display: loginVisible ? "none" : ""};
  const show = {display: loginVisible ? '' : 'none'};

  return (
    <>
      <div style={hide}>
        <button onClick={() => setLoginVisible(true)}>New Note</button>
      </div>
      <div style={show}>
        <form onSubmit={handleSubmit}>
          Title
          <input type="text"
                 name="Title"
                 onChange={handleNewTitle}


          />
          <br/>
          Author
          <input type="text"
                 name="Title"
                 onChange={handleNewAuthor}
          />
          <br/>
          URL
          <input type="text"
                 name="Title"
                 onChange={handleNewUrl}

          />
          <br/>
          <button type="submit">Create</button>
        </form>
        <button onClick={() => setLoginVisible(false)}>cancel</button>

      </div>
    </>
  )
}

export default BlogForm