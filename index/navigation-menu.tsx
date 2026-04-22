"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { TerminalIcon } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Profile",
    href: "/main/profile",
    description:
      "Visit your profile.",
  },
  {
    title: "Assets",
    href: "/main/assets",
    description:
      "View your assets.",
  },
  {
    title: "Cards",
    href: "/main/cards",
    description:
      "View and Manage your cards.",
  },
  {
    title: "Stocks",
    href: "/main/stocks",
    description: "View your stock portfolio.",
  },
  {
    title: "Options",
    href: "/main/options",
    description: "View and manage your options.",
  },
  {
    title: "Futures",
    href: "/main/futures",
    description: "View and manage your futures positions.",
  },
]

export function NavigationMenuIndex() {
  return (
    <NavigationMenu className="flex pt-15">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/main/portfolio" title="Dashboard">
                Get Started, view your portfolio overview and performance metrics.
              </ListItem>
              <ListItem href="/main/portfolio/assets" title="Assets">
                View your assets, including stocks, options, futures and more.
              </ListItem>
              <ListItem href="/main/portfolio/online" title="Online">
                Find out how to go online and start trading with your account.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Link className="flex" href="/auth/login">
            <TerminalIcon className="mr-2 h-4 w-4" />
            Login
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
