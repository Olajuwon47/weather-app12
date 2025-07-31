import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"

interface WeatherLayoutProps {
  children: React.ReactNode
}

export function WeatherLayout({ children }: WeatherLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-xl font-semibold">Weather Dashboard</h1>
          </header>
          
          <main className="flex-1 p-6 bg-muted/10">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}