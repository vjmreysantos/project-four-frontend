import React from 'react'
import { getAllJordans } from '../../lib/api'

import JordansCard from './JordansCard'
import Error from '../common/Error'
import Loading from '../common/Loading'

function JordansIndex() {
  const [jordans, setJordans] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !jordans && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllJordans()
        setJordans(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  return (
    <section className="section">
      <div className="container">
        {isError && <Error />}
        {isLoading && <Loading />}
        <div className="columns is-multiline">
          {jordans &&
          jordans.map(jordans => (
            <JordansCard key={jordans._id} jordans={jordans} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default JordansIndex