import React from 'react'

import icon from '../images/likes.png'

const Likes = ({ likes, onClick }) => (
  <>
    <img src={icon} style={styles.icon} alt="Like" />
    <p style={styles.likes}>
      Likes: {likes}
    </p>
  </>
)

const styles = {
  icon: {
    width: 30,
    height: 30
  },
  likes: {
  }
}

export default Likes
