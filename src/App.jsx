import { useState } from 'react'
import Container from './components/Container'

import './styles/App.css'

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const callApi = async (cityName) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    const urlApi = import.meta.env.VITE_API_BASE_URL
    try {
      setLoading(true)
      const response = await fetch(
        `${urlApi}q=${cityName}&units=metric&appid=${apiKey}`
      )
      if (!response.ok) {
        setError(`City don't found`)
        console.log(response)
        setTimeout(() => {
          setError('')
        }, 3000)
        return
      }
      const result = await response.json()
      setData(result)
      console.log(result)
    } catch (error) {
      setError(error.message)
      console.log('Error seteado!')

      setTimeout(() => {
        setError('')
      }, 3000)

      return
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container callApi={callApi} data={data} error={error} loading={loading} />
  )
}

export default App
