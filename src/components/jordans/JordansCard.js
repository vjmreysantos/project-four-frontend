
// import { deleteJordan } from '../../lib/api'

function JordanCard({ jordans }) {

  // const handleDelete = async () => {
  //   await deleteJordan(jordans.id)
  //   history.push('/jordans')
  // }

  return (
    <div className="column is-one-half-desktop is-one-third-tablet">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{jordans.name}</div>
          <div className="card-header-icon">🏀{jordans.likedBy.length}</div>
        </div>
        <div className="card-image">
          <figure className="image image-is-5by3">
            <img src={jordans.image} alt={jordans.name} />
          </figure>
        </div>

        <div className="card-content">
          <h2><strong>Release Date:</strong> {jordans.releaseDate}</h2>
          <p><strong>Color:</strong> {jordans.color}</p>
          <p><strong>Size:</strong> {jordans.size}</p>
          <p><strong>£</strong> {jordans.price}</p>
        </div>

        <footer className="card-footer">
          <button className="card-footer-item">
            <img className="icon" src="https://cdn4.iconfinder.com/data/icons/sports-balls/1024/BasketBall.png"/>
            <img className="icon" src="https://cdn4.iconfinder.com/data/icons/essentials-volume-3/128/basketball-hoop-512.png"/>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default JordanCard