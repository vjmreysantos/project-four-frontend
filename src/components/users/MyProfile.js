import React from 'react'
import { userProfile } from '../../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'

function MyProfile() {
  const [user, setUser] = React.useState('')
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
            <>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img className="is-rounded" src="https://thispersondoesnotexist.com/image" alt="Placeholder image"/>
                  </figure>
                </div>

                <div className="column content">
                  <h2 className="title has-text-centered">{`${user.username}`}</h2>
                  <h2 className="title has-text-centered">{`${user.email}`}</h2>
                </div>

              </div>
            </>
          }
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <figure className="image image-is-5by3">
            <img src={`${user.liked_jordan}`}/>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default MyProfile