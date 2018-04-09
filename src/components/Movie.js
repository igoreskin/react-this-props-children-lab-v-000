import React from 'react'


const Movie = (props) =>
  <div>
    { movie(props) }
  </div>

function movie(props) {
  if(props.isplaying) return props.title
  return null
}

export default Movie
