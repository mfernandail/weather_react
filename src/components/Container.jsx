import Footer from './Footer'
import Header from './Header'
import SearchForm from './SearchForm'
import WeatherDisplay from './WeatherDisplay'

function Container({ callApi, data }) {
  return (
    <div className="app-container">
      <Header />
      <main>
        <SearchForm />
        <WeatherDisplay callApi={callApi} data={data} />
      </main>
      <Footer />
    </div>
  )
}
export default Container
