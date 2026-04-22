"use client"

import * as React from "react"

import { NavMain } from "../../components/data/nav-main"
import { NavProjects } from "../../components/data/nav-projects"
import { NavSecondary } from "../../components/data/nav-secondary"
import { NavUser } from "../../components/data/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/data/ui/sidebar"
import { TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, LifeBuoyIcon, SendIcon, FrameIcon, PieChartIcon, MapIcon, TerminalIcon, CoinsIcon, Asterisk, PercentSquare, Calendar1 } from "lucide-react"


const data = {
  user: {
    name: "Customer",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Markets",
      url: "/assets/markets",
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
      url: "/assets/portfolio",
      icon: (
        <TerminalSquareIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "Debit",
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
      url: "/assets/transactions",
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
        {
          title: "Profits",
          url: "#",
        },
      ],
    },
    {
      title: "Company",
      url: "/assets/company",
      icon: (
        <BookOpenIcon
        />
      ),
      items: [
        {
          title: "Patents",
          url: "#",
        },
        {
          title: "Invoices",
          url: "#",
        },
        {
          title: "Banking",
          url: "#",
        },
        {
          title: "Licensing",
          url: "#",
        },
        {
          title: "Legal",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "/assets/settings",
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
        {
          title: "Profiles",
          url: "#",
        },
      ],
    },
    {
      title: "Coins",
      url: "/assets/coins",
      icon: (
        <Asterisk
        />
      ),
      items: [
        {
          title: "Beta",
          url: "/assets/coins/beta",
        },
        {
          title: "Roge",
          url: "/assets/coins/roge",
        },
        {
          title: "Hilt",
          url: "/assets/coins/hilt",
        },
        {
          title: "Line",
          url: "/assets/coins/line",
        },
        {
          title: "Pitt",
          url: "/assets/coins/pitt",
        },
        {
          title: "Armi",
          url: "/assets/coins/armi",
        },
        {
          title: "Omni",
          url: "/assets/coins/omni",
        },
      ],
    },
    {
      title: "Wallet",
      url: "/assets/wallet",
      icon: (
        <CoinsIcon
        />
      ),
      items: [
        {
          title: "Forex",
          url: "/assets/wallet/forex",
        },
        {
          title: "Stock",
          url: "/assets/wallet/stock",
        },
        {
          title: "Crypto",
          url: "/assets/wallet/crypto",
        },
        {
          title: "Assets",
          url: "/assets/wallet/assets",
        },
        {
          title: "Options",
          url: "/assets/wallet/options",
        }
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
      title: "Log",
      url: "/main/log",
      icon: (
        <TerminalIcon
        />
      ),
    }
  ],
  projects: [
    {
      name: "Direct Deposit",
      url: "#",
      icon: (
        <FrameIcon
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
    {
      name: "Calendar",
      url: "#",
      icon: (
        <Calendar1
        />
      ),
    },
    {
      name: "Documents",
      url: "#",
      icon: (
        <BookOpenIcon
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
                <span className="truncate font-medium">Off Line</span>
                <span className="truncate text-xs">Enterprise</span>
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
