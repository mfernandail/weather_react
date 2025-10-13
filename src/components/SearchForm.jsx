import { useState } from 'react'
import '../styles/SearchForm.css'

function SearchForm({ callApi, error, loading }) {
  const [citySearchForm, setCitySearchForm] = useState('')
  const [unit, setUnit] = useState('°C')

  const handleSubmitForm = (e) => {
    e.preventDefault()
    callApi(citySearchForm)
  }

  console.log(unit)

  return (
    <div className="container">
      <h1>🌤️ Búsqueda de Clima</h1>

      <form className="search-form" onSubmit={handleSubmitForm}>
        <div className="input-wrapper">
          <input
            type="text"
            className="search-input"
            value={citySearchForm}
            onChange={(e) => setCitySearchForm(e.target.value)}
            id="cityInput"
            placeholder="Toronto"
            required
          />

          <button type="submit" className="btn btn-search" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {error && <p className="error mt-20 text-center">{error}</p>}

        <div className="unit-toggle">
          <button
            type="button"
            className="btn btn-unit active"
            value="°C"
            onClick={(e) => setUnit(e.target.value)}
          >
            °C
          </button>
          <button
            type="button"
            className="btn btn-unit"
            value="°F"
            onClick={(e) => setUnit(e.target.value)}
          >
            °F
          </button>
        </div>
      </form>
    </div>
  )
}
export default SearchForm
