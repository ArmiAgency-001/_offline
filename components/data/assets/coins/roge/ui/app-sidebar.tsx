"use client"

import * as React from "react"

import { NavMain } from "@/components/data/assets/coins/roge/ui/nav-main"
import { NavProjects } from "@/components/data/assets/coins/roge/ui/nav-projects"
import { NavSecondary } from "@/components/data/assets/coins/roge/ui/nav-secondary"
import { NavUser } from "@/components/data/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/data/ui/sidebar"
import { TerminalSquareIcon, BotIcon, Settings2Icon, LifeBuoyIcon, SendIcon, PieChartIcon, MapIcon, TerminalIcon, PercentSquare, CoinsIcon } from "lucide-react"

const data = {
  user: {
    name: "Customer",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Off-Line",
      url: "/profile",
      icon: (
        <TerminalIcon
        />
      ),
      items: [
        {
          title: "Markets",
          url: "/main/consumer/markets",
        },
        {
          title: "Portfolio",
          url: "/main/consumer/portfolio",
        },
        {
          title: "Transactions",
          url: "/main/consumer/transactions",
        },
        {
          title: "Settings",
          url: "/main/consumer/settings",
        },
        {
          title: "Company",
          url: "/main/consumer/company",
        }
      ],
    },
    {
      title: "Markets",
      url: "#",
      icon: (
        <TerminalSquareIcon
        />
      ),
      items: [
        {
          title: "Stocks",
          url: "#",
        },
        {
          title: "Crypto",
          url: "#",
        },
        {
          title: "Forex",
          url: "#",
        },
        {
          title: "Options",
          url: "#",
        },
        {
          title: "Futures",
          url: "#",
        },
      ],
    },
    {
      title: "Portfolio",
      url: "#",
      icon: (
        <TerminalSquareIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "Coins",
          url: "#",
        },
        {
          title: "Credit",
          url: "#",
        },
        {
          title: "Savings",
          url: "#",
        },
      ],
    },
    {
      title: "Transactions",
      url: "#",
      icon: (
        <BotIcon
        />
      ),
      items: [
        {
          title: "Budget",
          url: "#",
        },
        {
          title: "Investments",
          url: "#",
        },
        {
          title: "Lending",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon
        />
      ),
      items: [
        {
          title: "Sheets",
          url: "#",
        },
        {
          title: "Credit",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: (
        <LifeBuoyIcon
        />
      ),
    },
    {
      title: "Feedback",
      url: "#",
      icon: (
        <SendIcon
        />
      ),
    },
    {
      title: "Login",
      url: "/auth/login",
      icon: (
        <TerminalIcon
        />
      ),
    }
  ],
  projects: [
    {
      name: "Coins",
      url: "#",
      icon: (
        <CoinsIcon
        />
      ),
    },
    {
      name: "User",
      url: "#",
      icon: (
        <PieChartIcon
        />
      ),
    },
    {
      name: "Map",
      url: "#",
      icon: (
        <MapIcon
        />
      ),
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <PercentSquare className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Roge</span>
                <span className="truncate text-xs">Blockchain</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
