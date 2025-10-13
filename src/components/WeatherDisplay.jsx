import '../styles/WeatherDisplay.css'

function WeatherDisplay({ data = null }) {
  if (!data || !data.main) return null
  const { main, name, sys, weather, wind } = data
  return (
    <div className="weather-card">
      <div className="location">
        <h1 className="city-name">{name}</h1>
        <p className="country">{sys.country}</p>
      </div>

      <div className="main-weather">
        <div className="temperature-section">
          <div className="temperature">{main.temp}°C</div>
          <p className="description">{weather[0].description}</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item feels-like">
          <div className="detail-label">Feels like</div>
          <div className="detail-value">
            {main.feels_like}
            <span className="detail-unit">°C</span>
          </div>
        </div>

        <div className="detail-item humidity">
          <div className="detail-label">Humidity</div>
          <div className="detail-value">
            {main.humidity}
            <span className="detail-unit">%</span>
          </div>
        </div>

        <div className="detail-item wind">
          <div className="detail-label">Wind</div>
          <div className="detail-value">
            {wind.speed}
            <span className="detail-unit"> km/h</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WeatherDisplay;
