import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { WeatherIcon } from "@/components/WeatherIcon"
import { WeatherHourly } from "@/hooks/useWeatherData"

interface HourlyForecastProps {
  data: WeatherHourly[]
}

export const HourlyForecast = ({ data }: HourlyForecastProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hourly Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full">
          <div className="flex space-x-4 pb-4">
            {data.map((hour, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 min-w-[80px]">
                <div className="text-sm text-muted-foreground">
                  {hour.time}
                </div>
                <WeatherIcon condition={hour.condition} className="h-6 w-6" />
                <div className="font-medium">{hour.temp}°</div>
                <div className="text-xs text-blue-500">
                  {hour.precipitation}%
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}