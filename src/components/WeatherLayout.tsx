import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { WeatherBackground } from "@/components/WeatherBackground"
import { useWeatherData } from "@/hooks/useWeatherData"

interface WeatherLayoutProps {
  children: React.ReactNode
}

export function WeatherLayout({ children }: WeatherLayoutProps) {
  const { currentCity } = useWeatherData("new-york")
  const condition = currentCity?.current?.condition || "sunny"

  return (
    <SidebarProvider>
      <WeatherBackground condition={condition}>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          
          <div className="flex-1 flex flex-col">
            <header className="h-16 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
              <SidebarTrigger className="mr-4" />
              <h1 className="text-xl font-semibold bg-gradient-sunny bg-clip-text text-transparent">Weather Dashboard</h1>
            </header>
            
            <main className="flex-1 p-6">
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-6 shadow-weather">
                {children}
              </div>
            </main>
          </div>
        </div>
      </WeatherBackground>
    </SidebarProvider>
  )
}