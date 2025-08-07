import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WeatherIcon } from "@/components/WeatherIcon"
import { WeatherCurrent } from "@/hooks/useWeatherData"
import { Wind, Droplets, Eye, Gauge } from "lucide-react"


interface CurrentWeatherProps {
  data: WeatherCurrent
  cityName: string
}

export const CurrentWeather = ({ data, cityName }: CurrentWeatherProps) => {
  const getBackgroundClass = () => {
    switch (data.condition) {
      case 'sunny':
      case 'clear':
        return 'bg-gradient-sunny'
      case 'rainy':
      case 'rain':
        return 'bg-gradient-rainy'
      case 'thunderstorm':
        return 'bg-gradient-storm'
      case 'snow':
        return 'bg-gradient-winter'
      default:
        return 'bg-gradient-sky'
    }
  }

  return (
    <Card className={`col-span-full lg:col-span-2 shadow-colorful ${getBackgroundClass()}`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-white">
          <span>{cityName}</span>
          <WeatherIcon condition={data.condition} className="h-8 w-8" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-2">
          <div className="text-6xl font-light text-white">{data.temperature}°</div>
          <div className="text-white/90">
            Feels like {data.feelsLike}°
          </div>
          <div className="text-lg font-medium text-white">{data.description}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Wind className="h-4 w-4 text-white/80" />
            <div>
              <div className="text-sm text-white/70">Wind</div>
              <div className="font-medium text-white">{data.windSpeed} km/h {data.windDirection}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Droplets className="h-4 w-4 text-white/80" />
            <div>
              <div className="text-sm text-white/70">Humidity</div>
              <div className="font-medium text-white">{data.humidity}%</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Eye className="h-4 w-4 text-white/80" />
            <div>
              <div className="text-sm text-white/70">Visibility</div>
              <div className="font-medium text-white">{data.visibility} km</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4 text-white/80" />
            <div>
              <div className="text-sm text-white/70">Pressure</div>
              <div className="font-medium text-white">{data.pressure} hPa</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}