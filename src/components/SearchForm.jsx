import { useState } from 'react'
import '../styles/SearchForm.css'

function SearchForm({ callApi, error, loading, setUnit, unit }) {
  const [citySearchForm, setCitySearchForm] = useState('')

  const handleSubmitForm = (e) => {
    e.preventDefault()
    callApi(citySearchForm, unit)
  }

  const handleUnitChange = (unitText) => {
    setUnit(unitText)

    callApi(citySearchForm, unitText)
  }

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
            className={`btn btn-unit ${unit === 'metric' ? 'active' : ''} `}
            onClick={() => handleUnitChange('metric')}
          >
            °C
          </button>
          <button
            type="button"
            className={`btn btn-unit ${unit === 'imperial' ? 'active' : ''} `}
            value="°F"
            onClick={() => handleUnitChange('imperial')}
          >
            °F
          </button>
        </div>
      </form>
    </div>
  )
}
export default SearchForm
