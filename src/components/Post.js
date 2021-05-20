import React from 'react'

import Author from './Author'
import Likes from './Likes'
import Tag from './Tag'

const Post = ({
  post,
  getUser,
  getPostsByTag,
  getPostCommentList
}) => {
  const objTagList = post.tags.map((tag, index) => {
    return (
      <Tag
        key={index}
        tag={tag}
        onClick={() => getPostsByTag(tag)} />
    )
  })
  let objLink = null
  if (post.link) {
    objLink = (
      <a href={post.link} style={styles.postLink} target="_blank" rel="noreferrer">
        Enlace
      </a>
    )
  }
  return (
    <div style={styles.container}>
      <Author author={post.owner} onClick={getUser}/>
      <img src={post.image} style={styles.images} alt={post.id} />
      <div style={styles.tagsContainer}>
        {objTagList}
      </div>
      <p style={styles.postText}>
        {post.text}
      </p>
      <p style={styles.postDate}>
        Publicado: {post.publishDate.substr(0, 10)}
      </p>
      <div style={styles.postFeedbacks}>
        <p>{objLink}</p>
        <p style={styles.comments} onClick={() => getPostCommentList(post.id)}>
          Comentarios
        </p>
        <Likes likes={post.likes} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: 1100,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    border: 2,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  images: {
    maxWidth: 100
  },
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  postText: {

  },
  postDate: {

  },
  postLink: {},
  postFeedbacks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  comments: {
    marginLeft: 5,
    marginRight: 5,
    color: 'blue'
  }
}

export default Post
