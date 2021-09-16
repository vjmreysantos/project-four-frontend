import React from 'react'
import { getSingleJordan, deleteJordan } from '../../lib/api'
import Loading from '../common/Loading'
import Error from '../common/Error'
import { useParams, useHistory } from 'react-router-dom'

function JordanShow() {
  const { jordanId } = useParams()
  const [jordan, setJordan] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const isLoading = !jordan && !isError
  const history = useHistory()


  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getSingleJordan(jordanId)
        setJordan(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [jordanId])


  const handleDelete = async () => {
    await deleteJordan(jordanId)
    history.push('/jordans/')
  }

  const handleEdit = async () => {
    history.push(`/jordans/${jordanId}/edit`)
  }

  return (
    <section className="container">
      <div className="card">
        <div className="card-content">
          {isError && <Error />}
          {isLoading && <Loading />}
          {jordan &&
          <>
            <h1 className="title has-text-centered">{jordan.name}</h1>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={jordan.image} alt={jordan.name} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="subtitle is-6">
                Release Date
                </h4>
                <h2 className="title is-4"><strong>{jordan.releaseDate}</strong></h2>
                <hr />
                <h4 className="subtitle is-6">
                Color
                </h4>
                <hr />
                <h2 className="title is-4"><strong>{jordan.color}</strong></h2>
                <hr />
                <h4 className="subtitle is-6">
                Size
                </h4>
                <hr />
                <h2 className="title is-4"><strong>{jordan.size}</strong></h2>
                <hr />
                <h4 className="subtitle is-6">
                Price
                </h4>
                <hr />
                <h2 className="title is-4"><strong>£ {jordan.price}</strong></h2>
                <hr />
                <button onClick={handleEdit} className="button is-danger">
                  Edit
                </button>
                <button onClick={handleDelete} className="button is-danger">
                    Delete
                </button>
              </div>
            </div>
          </>
          }
        </div>
      </div>
    </section>
  )
}

export default JordanShow
