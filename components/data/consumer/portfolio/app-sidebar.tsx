"use client"

import * as React from "react"

import { NavMain } from "@/components/data/consumer/portfolio/nav-main"
import { NavPortolioAssets } from "@/components/data/consumer/portfolio/nav-portfolio-assets"
import { NavSecondary } from "@/components/data/consumer/portfolio/nav-secondary"
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
import { BotIcon, BookOpenIcon, Settings2Icon, LifeBuoyIcon, SendIcon, FrameIcon, PieChartIcon, MapIcon, TerminalIcon, CoinsIcon, Asterisk, TerminalSquareIcon, Palette } from "lucide-react"


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
          url: "#",
        },
        {
          title: "Transactions",
          url: "#",
        },
        {
          title: "Company",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
        {
          title: "Coins",
          url: "#",
        },
        {
          title: "Wallet",
          url: "#",
        },
      ],
    },
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
      title: "Profile",
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
        {
          title: "Probe",
          url: "#"
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
      ],
    },
    {
      title: "Company",
      url: "/assets/portfolio/company",
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
          title: "Assets",
          url: "#",
        },
        {
          title: "Currencies",
          url: "#",
        },
        {
          title: "Exchanges",
          url: "#",
        },
        {
          title: "Revenues",
          url: "#",
        },
        {
          title: "Fees",
          url: "#",
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
          url: "#",
        },
        {
          title: "Stock",
          url: "#",
        },
        {
          title: "Crypto",
          url: "#",
        },
        {
          title: "Assets",
          url: "#",
        },
        {
          title: "Options",
          url: "#",
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
                <Palette className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Portfolio</span>
                <span className="truncate text-xs">Profile</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavPortolioAssets projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
