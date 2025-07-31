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
        return <Sun className={cn("text-yellow-500", className)} />
      case 'partly-cloudy':
      case 'partly-cloudy-day':
        return <Cloud className={cn("text-gray-500", className)} />
      case 'cloudy':
      case 'overcast':
        return <Cloud className={cn("text-gray-600", className)} />
      case 'rainy':
      case 'light-rain':
      case 'rain':
        return <CloudRain className={cn("text-blue-500", className)} />
      case 'heavy-rain':
        return <CloudRain className={cn("text-blue-700", className)} />
      case 'snow':
      case 'light-snow':
        return <CloudSnow className={cn("text-blue-200", className)} />
      case 'thunderstorm':
        return <Zap className={cn("text-purple-500", className)} />
      case 'fog':
      case 'mist':
        return <Eye className={cn("text-gray-400", className)} />
      default:
        return <Sun className={cn("text-yellow-500", className)} />
    }
  }

  return getIcon()
}