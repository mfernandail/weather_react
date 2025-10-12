import { useState, useEffect } from 'react'
import Container from './components/Container'

import './styles/App.css'

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const callApi = async () => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    const urlApi = import.meta.env.VITE_API_BASE_URL
    try {
      setLoading(true)
      const response = await fetch(
        `${urlApi}q=arica&units=metric&appid=${apiKey}`
      )
      if (!response.ok) {
        setError(`City don't faund`)
      }
      const data = await response.json()
      setData(data)
      setLoading(false)
      console.log(data)
    } catch (error) {
      setError(error)
    }
  }

  return <Container callApi={callApi} data={data} />
}

export default App
