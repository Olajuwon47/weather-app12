import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Settings as SettingsIcon, Bell, Palette, Globe } from "lucide-react"

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Customize your weather app experience</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SettingsIcon className="h-5 w-5" />
              <span>General</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Temperature Unit</div>
                <div className="text-sm text-muted-foreground">Choose Celsius or Fahrenheit</div>
              </div>
              <Select defaultValue="celsius">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="celsius">Celsius</SelectItem>
                  <SelectItem value="fahrenheit">Fahrenheit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Wind Speed Unit</div>
                <div className="text-sm text-muted-foreground">km/h, mph, or m/s</div>
              </div>
              <Select defaultValue="kmh">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kmh">km/h</SelectItem>
                  <SelectItem value="mph">mph</SelectItem>
                  <SelectItem value="ms">m/s</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Auto-refresh</div>
                <div className="text-sm text-muted-foreground">Update weather data automatically</div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Weather Alerts</div>
                <div className="text-sm text-muted-foreground">Severe weather warnings</div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Daily Forecast</div>
                <div className="text-sm text-muted-foreground">Morning weather summary</div>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Rain Notifications</div>
                <div className="text-sm text-muted-foreground">Alert when rain is expected</div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="h-5 w-5" />
              <span>Appearance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Theme</div>
                <div className="text-sm text-muted-foreground">Light, dark, or system</div>
              </div>
              <Select defaultValue="system">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Animations</div>
                <div className="text-sm text-muted-foreground">Enable smooth transitions</div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Location</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Auto-location</div>
                <div className="text-sm text-muted-foreground">Use device location</div>
              </div>
              <Switch />
            </div>

            <div>
              <div className="font-medium mb-2">Saved Locations</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>New York, USA</span>
                  <Badge variant="secondary">Default</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>London, UK</span>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tokyo, Japan</span>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Settings