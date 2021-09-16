import React from 'react'
import { getAllJordans } from '../../lib/api'

import JordansCard from './JordansCard'
import Error from '../common/Error'
import Loading from '../common/Loading'

function JordansIndex() {
  const [jordans, setJordans] = React.useState(null)
  const [searchValue, setSearchValue] = React.useState('')

  const [isError, setIsError] = React.useState(false)
  const isLoading = !jordans && !isError

  const getData = async () => {
    try {
      const response = await getAllJordans()
      setJordans(response.data)
    } catch (err) {
      setIsError(true)
    }
  }

  React.useEffect(() => {
    getData()
  }, [])

  function filterJordans() {
    return jordans.filter(jordan => {
      return (jordan.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    })
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <section className="section">
      <div className="container">
        <form className="search">
          <input
            className="input"
            placeholder="Search"
            onChange={handleSearch} />
        </form>
        <hr />
        {isError && <Error />}
        {isLoading && <Loading />}
        <div className="columns is-multiline">
          {jordans &&
          filterJordans().map(jordans => (
            <JordansCard key={jordans.id} jordans={jordans} getData={getData}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JordansIndex