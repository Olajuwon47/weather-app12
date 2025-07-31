import { useWeatherData } from "@/hooks/useWeatherData"
import { DailyForecast } from "@/components/DailyForecast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WeatherIcon } from "@/components/WeatherIcon"
import { Skeleton } from "@/components/ui/skeleton"

const Forecast = () => {
  const { allCities, loading } = useWeatherData()

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-[200px] w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-[300px]" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Global Weather Forecast</h1>
        <p className="text-muted-foreground">5-day weather forecast for major cities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {allCities.map((city) => (
          <Card key={city.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between text-lg">
                <span>{city.name}</span>
                <WeatherIcon condition={city.current.condition} className="h-6 w-6" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                <div className="text-3xl font-light">{city.current.temperature}°</div>
                <div className="text-sm text-muted-foreground">{city.current.description}</div>
                <div className="text-xs text-muted-foreground">
                  H: {city.daily[0].high}° L: {city.daily[0].low}°
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {allCities.slice(0, 2).map((city) => (
          <div key={city.id}>
            <h2 className="text-xl font-semibold mb-4">{city.name}, {city.country}</h2>
            <DailyForecast data={city.daily} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast