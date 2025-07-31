import { useParams } from "react-router-dom"
import { useWeatherData } from "@/hooks/useWeatherData"
import { CurrentWeather } from "@/components/CurrentWeather"
import { HourlyForecast } from "@/components/HourlyForecast"
import { DailyForecast } from "@/components/DailyForecast"
import { Skeleton } from "@/components/ui/skeleton"

const CityWeather = () => {
  const { cityId } = useParams<{ cityId: string }>()
  const { currentCity, loading } = useWeatherData(cityId)

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-[300px] w-full" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Skeleton className="h-[200px]" />
          <Skeleton className="h-[200px]" />
        </div>
      </div>
    )
  }

  if (!currentCity) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-2">City not found</h2>
        <p className="text-muted-foreground">The weather data for this city is not available.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CurrentWeather 
          data={currentCity.current} 
          cityName={`${currentCity.name}, ${currentCity.country}`} 
        />
        <div className="space-y-6">
          <HourlyForecast data={currentCity.hourly} />
        </div>
      </div>
      
      <DailyForecast data={currentCity.daily} />
    </div>
  )
}

export default CityWeather