import React from 'react'

const getFullName = author => {
  return [author.title, author.firstName, author.lastName].join(' ')
}

const Author = ({ author, onClick }) => (
  <p
    style={styles.container}
    onClick={() => onClick(author.id)}
  >
    {getFullName(author)}
  </p>
)

const styles = {
  container: {
    color: 'blue'
  }
}

export default Author
