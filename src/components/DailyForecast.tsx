import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WeatherIcon } from "@/components/WeatherIcon"
import { WeatherDaily } from "@/hooks/useWeatherData"

interface DailyForecastProps {
  data: WeatherDaily[]
}

export const DailyForecast = ({ data }: DailyForecastProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.map((day, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center space-x-3">
              <WeatherIcon condition={day.condition} className="h-5 w-5" />
              <div>
                <div className="font-medium">{day.day}</div>
                <div className="text-sm text-muted-foreground">{day.description}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="text-blue-500">{day.precipitation}%</div>
              <div className="flex space-x-2">
                <span className="font-medium">{day.high}°</span>
                <span className="text-muted-foreground">{day.low}°</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}