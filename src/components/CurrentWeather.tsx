import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WeatherIcon } from "@/components/WeatherIcon"
import { WeatherCurrent } from "@/hooks/useWeatherData"
import { Wind, Droplets, Eye, Gauge } from "lucide-react"

interface CurrentWeatherProps {
  data: WeatherCurrent
  cityName: string
}

export const CurrentWeather = ({ data, cityName }: CurrentWeatherProps) => {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{cityName}</span>
          <WeatherIcon condition={data.condition} className="h-8 w-8" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-2">
          <div className="text-6xl font-light">{data.temperature}°</div>
          <div className="text-muted-foreground">
            Feels like {data.feelsLike}°
          </div>
          <div className="text-lg font-medium">{data.description}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Wind className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="text-sm text-muted-foreground">Wind</div>
              <div className="font-medium">{data.windSpeed} km/h {data.windDirection}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Droplets className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="text-sm text-muted-foreground">Humidity</div>
              <div className="font-medium">{data.humidity}%</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Eye className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="text-sm text-muted-foreground">Visibility</div>
              <div className="font-medium">{data.visibility} km</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="text-sm text-muted-foreground">Pressure</div>
              <div className="font-medium">{data.pressure} hPa</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}