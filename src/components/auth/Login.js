import React from 'react'
import { useHistory } from 'react-router-dom'

import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

function Login() {
  const history = useHistory()
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })
  const [isError, setIsError] = React.useState(false)

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await loginUser(formData)
      setToken(data.token)
      history.push('/jordans')
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            {isError && (
              <p className="help is-danger">
                Either email or password were incorrect
              </p>
            )}
            <div className="field">
              <button type="submit" className="button is-fullwidth">
                Log Me In!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
