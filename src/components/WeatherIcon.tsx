import { Cloud, CloudRain, Sun, CloudSnow, Zap, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

interface WeatherIconProps {
  condition: string
  className?: string
}

export const WeatherIcon = ({ condition, className }: WeatherIconProps) => {
  const getIcon = () => {
    switch (condition) {
      case 'sunny':
      case 'clear':
      case 'clear-day':
        return <Sun className={cn("text-weather-sunny animate-glow", className)} />
      case 'partly-cloudy':
      case 'partly-cloudy-day':
        return <Cloud className={cn("text-weather-cloudy", className)} />
      case 'cloudy':
      case 'overcast':
        return <Cloud className={cn("text-weather-cloudy", className)} />
      case 'rainy':
      case 'light-rain':
      case 'rain':
        return <CloudRain className={cn("text-weather-rainy animate-float", className)} />
      case 'heavy-rain':
        return <CloudRain className={cn("text-weather-rainy", className)} />
      case 'snow':
      case 'light-snow':
        return <CloudSnow className={cn("text-weather-snowy", className)} />
      case 'thunderstorm':
        return <Zap className={cn("text-weather-stormy animate-glow", className)} />
      case 'fog':
      case 'mist':
        return <Eye className={cn("text-weather-foggy", className)} />
      default:
        return <Sun className={cn("text-weather-sunny", className)} />
    }
  }

  return getIcon()
}