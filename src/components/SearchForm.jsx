import { useState } from 'react'
import '../styles/SearchForm.css'

function SearchForm({ callApi, error, loading }) {
  const [citySearchForm, setCitySearchForm] = useState('')

  const handleSubmitForm = (e) => {
    e.preventDefault()
    callApi(citySearchForm)
  }

  // if (loading) return <p>Loading...</p>

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
          <button type="submit" className="btn btn-search">
            <button type="submit" className="btn btn-search" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </button>
        </div>

        {error && <p className="error mt-20 text-center">{error}</p>}

        <div className="unit-toggle">
          <button type="button" className="btn btn-unit active" id="btnCelsius">
            °C
          </button>
          <button type="button" className="btn btn-unit" id="btnFahrenheit">
            °F
          </button>
        </div>
      </form>
    </div>
  )
}
export default SearchForm
