import React from 'react'
import { Link } from 'react-router-dom'
import { userProfile } from '../../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'

function MyProfile() {

  const [user, setUser] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !user && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await userProfile()
        setUser(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  return (
    <section className="container">
      <div className="card">
        <div className="card-content">
          {isError && <Error />}
          {isLoading && <Loading />}
          {user && 
          user.map(user => (
            <>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img className="is-rounded" src={`${user.profileImage}`} alt="Placeholder image"/>
                  </figure>
                </div>

                <div className="content">
                  <h2 className="title has-text-centered">{`${user.username}`}</h2>
                </div>

                <div className="buttons">
                  <Link
                    to="/auth/myprofile/edit"
                    className="button is-danger"
                  >
                      Edit profile
                  </Link>
                  <button className="button is-danger">
                      Delete account
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyProfile