'use client';

import { Menu } from 'lucide-react';

import { Button, Sheet, SheetContent, SheetTrigger } from '~/shared/ui';

import { SidebarNavigation } from './SidebarNavigation';

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger
        className="fixed right-4 top-4 sm:right-8 lg:hidden"
        autoFocus
        asChild
      >
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="text-foreground">
        <SidebarNavigation />
      </SheetContent>
    </Sheet>
  );
}
