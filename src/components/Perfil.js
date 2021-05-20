import React from 'react'

const getFullName = author => {
  return [author.title, author.firstName, author.lastName].join(' ')
}

const getAddress = loc => {
  return [loc.state, loc.street, loc.city, loc.country].join(', ')
}

const Perfil = ({ author }) => (
  <div style={styles.container}>
    <img src={author.picture} alt={getFullName(author)} style={styles.images} />
    <p>Nombre: {getFullName(author)}</p>
    <p>Genero: {author.gender}</p>
    <p>Email: {author.email}</p>
    <p>Dirección: {getAddress(author.location)}</p>
  </div>
)

const styles = {
  container: {
    borderRadius: 10,
    border: 2,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    marginBottom: 10,
    alignSelf: 'center'
  },
  images: {
    width: 200
  }
}

export default Perfil
