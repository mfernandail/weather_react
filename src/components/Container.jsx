import Footer from './Footer'
import Header from './Header'
import SearchForm from './SearchForm'
import WeatherDisplay from './WeatherDisplay'

function Container({ callApi, data, error, loading = false }) {
  return (
    <div className="app-container">
      <Header />
      <main>
        <SearchForm callApi={callApi} error={error} loading={loading} />
        <WeatherDisplay data={data} />
      </main>
      <Footer />
    </div>
  )
}
export default Container
