import Footer from './Footer'
import Header from './Header'
import SearchForm from './SearchForm'
import WeatherDisplay from './WeatherDisplay'

function Container() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <SearchForm />
        <WeatherDisplay />
      </main>
      <Footer />
    </div>
  )
}
export default Container
