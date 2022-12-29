import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {postAdded} from './postsSlice'
import { nanoid } from '@reduxjs/toolkit'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const titleHandler = e => setTitle(e.target.value)

  const contentHandler = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )

      setTitle('')
      setContent('')
    }
  }

  return (
    <>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="PostTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          onChange={titleHandler}
          name="postTitle"
          value={title}
        ></input>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          onChange={contentHandler}
          name="postContent"
          value={content}
        ></textarea>
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </>
  )
}

export default AddPostForm;
