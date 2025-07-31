import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Cloud, CloudRain, Zap } from "lucide-react"

const Radar = () => {
  const radarData = [
    { city: "New York", intensity: "Light", type: "rain", color: "bg-blue-200" },
    { city: "London", intensity: "Heavy", type: "rain", color: "bg-blue-500" },
    { city: "Tokyo", intensity: "Clear", type: "clear", color: "bg-yellow-200" },
    { city: "Sydney", intensity: "Moderate", type: "clouds", color: "bg-gray-300" },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'rain':
        return <CloudRain className="h-4 w-4" />
      case 'clear':
        return <Cloud className="h-4 w-4" />
      case 'storm':
        return <Zap className="h-4 w-4" />
      default:
        return <Cloud className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Weather Radar</h1>
        <p className="text-muted-foreground">Real-time precipitation and weather patterns</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Interactive Weather Map</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">🗺️</div>
              <h3 className="text-xl font-semibold">Interactive Radar Map</h3>
              <p className="text-muted-foreground max-w-md">
                This would integrate with a weather service API to show real-time radar data, 
                precipitation patterns, and storm tracking.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Conditions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {radarData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  {getIcon(item.type)}
                  <div>
                    <div className="font-medium">{item.city}</div>
                    <div className="text-sm text-muted-foreground">{item.type}</div>
                  </div>
                </div>
                <Badge variant={item.intensity === 'Heavy' ? 'destructive' : 'secondary'}>
                  {item.intensity}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Legend</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-200 rounded"></div>
              <span className="text-sm">Light Rain</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-400 rounded"></div>
              <span className="text-sm">Moderate Rain</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
              <span className="text-sm">Heavy Rain</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span className="text-sm">Thunderstorm</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <span className="text-sm">Clouds</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-200 rounded"></div>
              <span className="text-sm">Clear Sky</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Radar