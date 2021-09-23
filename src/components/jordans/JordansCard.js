import React from 'react'
import { Link } from 'react-router-dom'
import { likeJordan } from '../../lib/api'


function JordanCard({ jordans, getData }) {
  
  const handleLike = async (jordanId) => {
    try {
      await likeJordan(jordanId)
      await getData()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="column is-one-half-desktop is-one-third-tablet">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{jordans.name}</div>
          <button
            onClick={() => handleLike(jordans.id)}
            className="card-header-icon">
            <span id="like-button">
            🏀
            </span>
            {jordans.likedBy.length}
          </button>
        </div>
        <div className="card-image">
          <Link to={`/jordans/${jordans.id}/`}>
            <figure className="image image-is-5by3">
              <img src={jordans.image} alt={jordans.name} />
            </figure>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JordanCard