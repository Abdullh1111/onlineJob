"use client"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLazyLogoutUserQuery } from "@/redux/services/user"

export function AppSidebar() {
  const [logout, { data }] = useLazyLogoutUserQuery()

  const items = [
    {
      title: "User",
      url: "/dashboard/user",
      icon: Home,
    },
    {
      title: "Form Submission",
      url: "/dashboard/form",
      icon: Inbox,
    },
    {
      title: "Pending Request",
      url: "/dashboard/pending",
      icon: Calendar,
    },
    {
      title: "Finished Request",
      url: "/dashboard/finished",
      icon: Search,
    },
    {
      title: "Log out",
      url: "/login", // Use a dummy URL if it's not a navigable link
      icon: Settings,
      onClick: () => {
        logout()
        console.log(data) // You can handle data or errors here
      },
    },
  ]

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl text-[gray] my-5">
            OnlineJob Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      onClick={(e) => {
                        // Prevent default action for logout
                        if (item.title === "Log out") {
                          e.preventDefault()
                          item.onClick?.()
                        }
                      }}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
