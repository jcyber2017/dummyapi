import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

import Perfil from './Perfil'
import Post from './Post'
import CommentList from './CommentList'

const Main = ({ fetchService }) => {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [author, setAuthor] = useState(null)

  const getAllPosts = () => {
    fetchService.getAllPosts().then(data => {
      setPosts(data.data)
    })
  }
  useEffect(() => {
    fetchService.getAllPosts().then(data => {
      setPosts(data.data)
    })
  }, [fetchService])
  const modalCommentsClose = () => setComments([])
  const modalAuthorClose = () => setAuthor(null)
  const getPostsByTag = tagTitle => {
    fetchService.getPostsByTag(tagTitle).then(data => {
      setPosts(data.data)
    })
  }
  const getPostCommentList = postId => {
    fetchService.getPostCommentList(postId).then(data => {
      setComments(data.data)
    })
  }
  const getUser = authorId => {
    fetchService.getUser(authorId).then(data => {
      setAuthor(data)
    })
  }
  let objContent = null
  let objModalComments = null
  let objModalAuthor = null
  if (posts.length) {
    objContent = posts.map((post, index) => {
      return (
        <Post
          key={index}
          post={post}
          getUser={getUser}
          getPostsByTag={getPostsByTag}
          getPostCommentList={getPostCommentList} />
      )
    })
  }/**/
  if (comments.length) {
    objModalComments = (
      <Modal
        isOpen={true}
        ariaHideApp={false}
        style={styles.modal}
        contentLabel="Comentarios"
      >
        <button onClick={modalCommentsClose}>Cerrar</button>
        <CommentList comments={comments} />
      </Modal>
    )
  }/**/
  if (author !== null) {
    objModalAuthor = (
      <Modal
        isOpen={true}
        ariaHideApp={false}
        style={styles.modal}
        contentLabel="Perfil"
      >
        <button onClick={modalAuthorClose}>Cerrar</button>
        <Perfil author={author} />
      </Modal>
    )
  }/**/
  return (
    <div>
      <h1 style={styles.h1}>Posts</h1>
      {objModalComments}
      {objModalAuthor}
      <div style={styles.container}>
        {objContent}
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: 1100
  },
  h1: {
    color: 'white'
  },
  title: {
    color: 'white'
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

export default Main
