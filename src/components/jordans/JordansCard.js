import { Link } from 'react-router-dom'

function JordanCard({ jordans }) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/jordans/${jordans._id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{jordans.name}</div>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={jordans.image} alt={jordans.name} />
            </figure>
          </div>
          <div className="card-content">
            <h5>{jordans.releaseDate}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default JordanCard