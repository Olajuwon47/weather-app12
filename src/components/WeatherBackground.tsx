import { cn } from "@/lib/utils"
import heroImage from "@/assets/weather-hero.jpg"
import rainyImage from "@/assets/rainy-weather.jpg"
import snowyImage from "@/assets/snowy-weather.jpg"

interface WeatherBackgroundProps {
  condition: string
  className?: string
  children: React.ReactNode
}

export const WeatherBackground = ({ condition, className, children }: WeatherBackgroundProps) => {
  const getBackgroundImage = () => {
    switch (condition) {
      case 'rainy':
      case 'rain':
      case 'heavy-rain':
        return rainyImage
      case 'snow':
      case 'light-snow':
        return snowyImage
      default:
        return heroImage
    }
  }

  return (
    <div 
      className={cn(
        "relative min-h-screen bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${getBackgroundImage()})`
      }}
    >
      {children}
    </div>
  )
}