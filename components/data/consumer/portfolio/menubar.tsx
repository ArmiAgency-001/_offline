import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/data/ui/menubar"

import { LucideCommand } from "lucide-react"
import Link from "next/link"

export function Index() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>
            Home
        </MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              <Link href="/offline/beta"> 
              Beta
              </Link> 
            </MenubarItem>
            <MenubarItem>
              Roge
            </MenubarItem>
            <MenubarItem>
              Hilt 
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarSub>
              <MenubarSubTrigger>Trade</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarGroup>
                  <MenubarItem>Buy</MenubarItem>
                  <MenubarItem>Coins</MenubarItem>
                  <MenubarItem>Assets</MenubarItem>
                </MenubarGroup>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              Login <LucideCommand />
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Probe</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              Trade
            </MenubarItem>
            <MenubarItem>
              Asset
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarSub>
              <MenubarSubTrigger>Search</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarGroup>
                  <MenubarItem>Search the site</MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Coins</MenubarItem>
                  <MenubarItem>Find Stocks</MenubarItem>
                </MenubarGroup>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>Charts</MenubarItem>
            <MenubarItem>Indicators</MenubarItem>
            <MenubarItem>AI</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Transactions</MenubarTrigger>
        <MenubarContent className="w-44">
          <MenubarGroup>
            <MenubarCheckboxItem>Credit</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Cards</MenubarCheckboxItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>
              Blockchains
            </MenubarItem>
            <MenubarItem inset>
              Cryptochains
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>Assets</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>Budget</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="off line">
            <MenubarRadioItem value="company">Company</MenubarRadioItem>
            <MenubarSeparator />
            <MenubarRadioItem value="beta">Beta</MenubarRadioItem>
            <MenubarRadioItem value="hilt">Hilt</MenubarRadioItem>
            <MenubarRadioItem value="roge">Roge</MenubarRadioItem>
            <MenubarRadioItem value="swyp">Swyp</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>Contribute</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
