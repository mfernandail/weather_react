import { useState } from 'react'
import Container from './components/Container'

import './styles/App.css'

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [unit, setUnit] = useState('metric')

  const callApi = async (cityName, unitParam = unit) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    const urlApi = import.meta.env.VITE_API_BASE_URL
    try {
      setLoading(true)
      const response = await fetch(
        `${urlApi}q=${cityName}&units=${unitParam}&appid=${apiKey}`
      )
      if (!response.ok) {
        setError(`City don't found`)

        setTimeout(() => {
          setError('')
        }, 3000)
        return
      }
      const result = await response.json()
      console.log(result)
      setData(result)
    } catch (error) {
      setError(error.message)

      setTimeout(() => {
        setError('')
      }, 3000)

      return
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container
      callApi={callApi}
      data={data}
      error={error}
      loading={loading}
      unit={unit}
      setUnit={setUnit}
    />
  )
}

export default App
