import React from 'react'
import { useParams } from 'react-router'
import { userProfile, getAllJordans } from '../../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'

function MyProfile() {
  const { userId, jordanId } = useParams()
  const [user, setUser] = React.useState('')
  const [jordans, setJordans] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const isLoading = !user && !jordans && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await userProfile(userId)
        setUser(response.data)
        console.log(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [userId])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllJordans(jordanId)
        setJordans(response.data)
        console.log(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [jordanId])


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
                    <img className="is-rounded" src={user.profileImage} alt="Placeholder image"/>
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
      <div className="column is-one-half-desktop is-one-third-tablet">
        <div className="title is-4">Liked Kicks</div>
        <div className="card">
          {/* <div className="card-image">
            <figure className="image image-is-5by3">
              <img src={`${user.likedJordan[0].image}`}/>
            </figure>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default MyProfile