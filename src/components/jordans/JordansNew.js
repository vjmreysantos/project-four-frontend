import React from 'react'
import { useHistory } from 'react-router-dom'
import { addNewJordan } from '../../lib/api'

const intialState = {
  name: '',
  image: '',
  releaseDate: '',
  color: '',
  size: '',
  price: '',
}

function JordansNew() {
  const history = useHistory()
  const [formData, setFormData] = React.useState(intialState)
  const [formErrors, setFormErrors] = React.useState(intialState)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await addNewJordan(formData)
      history.push(`/jordans/${data._id}/`)
    } catch (err) {
      setFormErrors(err.response.data.errors)
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
              <label className="label">Name</label>
              <div className="control">
                <input
                  className={`input ${formErrors.name ? 'is-danger' : ''}`}
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              {formErrors.name && (
                <p className="help is-danger">{formErrors.name}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input
                  className={`input ${formErrors.image ? 'is-danger' : ''}`}
                  placeholder="Image URL"
                  name="image"
                  onChange={handleChange}
                  value={formData.image}
                />
              </div>
              {formErrors.image && (
                <p className="help is-danger">{formErrors.image}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Release Date</label>
              <div className="control">
                <input
                  className={`input ${formErrors.releaseDate ? 'is-danger' : ''}`}
                  placeholder="Release date"
                  name="releaseDate"
                  onChange={handleChange}
                  value={formData.releaseDate}
                />
              </div>
              {formErrors.releaseDate && (
                <p className="help is-danger">{formErrors.releaseDate}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Color</label>
              <div className="control">
                <input
                  className={`input ${formErrors.color ? 'is-danger' : ''}`}
                  placeholder="Color"
                  name="color"
                  onChange={handleChange}
                  value={formData.color}
                />
              </div>
              {formErrors.color && (
                <p className="help is-danger">{formErrors.color}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Size</label>
              <div className="control">
                <input
                  className={`input ${formErrors.size ? 'is-danger' : ''}`}
                  placeholder="Size"
                  name="size"
                  onChange={handleChange}
                  value={formData.size}
                />
              </div>
              {formErrors.size && (
                <p className="help is-danger">{formErrors.size}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Price</label>
              <div className="control">
                <input
                  className={`input ${formErrors.price ? 'is-danger' : ''}`}
                  placeholder="Price"
                  name="price"
                  onChange={handleChange}
                  value={formData.price}
                />
              </div>
              {formErrors.price && (
                <p className="help is-danger">{formErrors.price}</p>
              )}
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-danger">
                Add my Jordan!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default JordansNew
