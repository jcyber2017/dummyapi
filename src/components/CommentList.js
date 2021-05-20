import React from 'react'

const getFullName = author => {
  return [author.title, author.firstName, author.lastName].join(' ')
}

const CommentList = ({ comments }) => {

  const objComments = comments.map((comment, index) => (
    <div key={index} style={styles.comment}>
      <p key={'a'+index}>
        Autor: <span key={'s'+index} style={styles.author}>
          {getFullName(comment.owner)}
        </span>
      </p>
      <p key={'c'+index}>Comentario: {comment.message}</p>
      <p key={'f'+index}>Fecha: {comment.publishDate.substr(0, 10)}</p>
    </div>
  ))
  return (
    <div style={styles.container}>
      {objComments}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  comment: {
    maxWidth: 1000,
    minWidth: 400,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#EEEEEE'
  },
  author: {
    color: 'blue'
  }
}

export default CommentList
