import { useState, useEffect } from 'react'
import weatherData from '@/data/weather_data.json'

export interface WeatherCurrent {
  temperature: number
  feelsLike: number
  humidity: number
  windSpeed: number
  windDirection: string
  pressure: number
  visibility: number
  uvIndex: number
  condition: string
  description: string
  icon: string
  lastUpdated: string
}

export interface WeatherHourly {
  time: string
  temp: number
  condition: string
  precipitation: number
}

export interface WeatherDaily {
  date: string
  day: string
  high: number
  low: number
  condition: string
  description: string
  precipitation: number
  humidity: number
  windSpeed: number
}

export interface WeatherCity {
  id: string
  name: string
  country: string
  timezone: string
  current: WeatherCurrent
  hourly: WeatherHourly[]
  daily: WeatherDaily[]
}

export const useWeatherData = (cityId?: string) => {
  const [currentCity, setCurrentCity] = useState<WeatherCity | null>(null)
  const [allCities, setAllCities] = useState<WeatherCity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API loading delay
    const loadData = async () => {
      setLoading(true)
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const cities = Object.values(weatherData.cities) as WeatherCity[]
      setAllCities(cities)
      
      if (cityId) {
        const city = weatherData.cities[cityId as keyof typeof weatherData.cities] as WeatherCity
        setCurrentCity(city || null)
      } else {
        // Default to first city if no cityId provided
        setCurrentCity(cities[0] || null)
      }
      
      setLoading(false)
    }

    loadData()
  }, [cityId])

  return {
    currentCity,
    allCities,
    loading,
    setCurrentCity
  }
}