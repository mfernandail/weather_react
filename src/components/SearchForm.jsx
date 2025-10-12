import '../styles/SearchForm.css'

function SearchForm() {
  return (
    <div className="container">
      <h1>🌤️ Búsqueda de Clima</h1>

      <form className="search-form" id="weatherForm">
        <div className="input-wrapper">
          <input
            type="text"
            className="search-input"
            id="cityInput"
            placeholder="Toronto"
            required
          />
          <button type="submit" className="btn btn-search">
            Buscar
          </button>
        </div>

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
