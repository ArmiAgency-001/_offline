"use client";
import { NavigationMenuIndex } from "@/components/index/navigation-menu";
import { AccountCollapsible } from "@/components/index/page-collapsible";
import { HomeTabs } from "@/components/index/page-tabs";



export default function Home() {
  return (
    <main>
      <nav className="flex flex-row gap-6 p-4">
        <HomeTabs />
        <AccountCollapsible />
        <form className="ml-auto">
          <input
            name="search"
            type="text"
            placeholder="Search..."
            className="rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </form>
        <NavigationMenuIndex />
      </nav>
    </main>
  );
}
