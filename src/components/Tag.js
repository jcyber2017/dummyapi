import React from 'react'

const Tag = ({ tag, onClick }) => (
  <p onClick={onClick} style={styles.container}>
    #{tag}
  </p>
)

const styles = {
  container: {
    marginLeft: 5,
    color: 'blue'
  }
}

export default Tag
