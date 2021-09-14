import React from 'react'
import { registerUser } from '../../lib/api'
import { useHistory, Link } from 'react-router-dom'

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

function Register() {
  const history = useHistory()
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await registerUser(formData)
      history.push('/auth/login/')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className={`input ${formErrors.username ? 'is-danger' : ''}`}
                  placeholder="Username"
                  onChange={handleChange}
                  name="username"
                  value={formData.username}
                />
              </div>
              {formErrors.username && (
                <p className="help is-danger">{formErrors.username}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${formErrors.email ? 'is-danger' : ''}`}
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
              </div>
              {formErrors.email && (
                <p className="help is-danger">{formErrors.email}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Profile Image</label>
              <div className="control">
                <input
                  className={`input ${formErrors.profileImage ? 'is-danger' : ''}`}
                  placeholder="Profile Image"
                  onChange={handleChange}
                  name="profileImage"
                  value={formData.profileImage}
                />
              </div>
              {formErrors.profileImage && (
                <p className="help is-danger">{formErrors.profileImage}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${formErrors.password ? 'is-danger' : ''}`}
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
              </div>
              {formErrors.password && (
                <p className="help is-danger">{formErrors.password}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${
                    formErrors.passwordConfirmation ? 'is-danger' : ''
                  }`}
                  placeholder="Password Confirmation"
                  onChange={handleChange}
                  name="passwordConfirmation"
                  value={formData.passwordConfirmation}
                />
              </div>
              {formErrors.passwordConfirmation && (
                <p className="help is-danger">
                  {formErrors.passwordConfirmation}
                </p>
              )}
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-danger">
                Sign me up!
              </button>
              <p>Already have an account? Log in <Link to="/auth/login/">here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
