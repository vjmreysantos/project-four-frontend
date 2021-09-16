import React from 'react'
import { Link } from 'react-router-dom'
import { likeJordan } from '../../lib/api'


function JordanCard({ jordans, getData }) {

  // const { jordanId } = useParams()


  
  const handleLike = async (jordanId) => {
    try {
      await likeJordan(jordanId)
      await getData()
    } catch (err) {
      console.log(err)
    }
  }
  console.log(jordans.likedBy.length)

  return (
    <div className="column is-one-half-desktop is-one-third-tablet">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{jordans.name}</div>
          <div className="card-header-icon">🏀{jordans.likedBy.length}</div>
        </div>
        <div className="card-image">
          <Link to={`/jordans/${jordans.id}/`}>
            <figure className="image image-is-5by3">
              <img src={jordans.image} alt={jordans.name} />
            </figure>
          </Link>
        </div>

        <footer className="card-footer">
          <button onClick={() => handleLike(jordans.id)} className="card-footer-item">
            <img className="icon" src="https://cdn4.iconfinder.com/data/icons/sports-balls/1024/BasketBall.png"/>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default JordanCard