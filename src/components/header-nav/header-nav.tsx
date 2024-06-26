import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ToggleThemeMode } from "@/components";

export function HeaderNav() {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-14 ">
      <div className="transition-colors cursor-pointer hover:text-foreground">
        <Link href="/" className="text-lg font-semibold">
          GomesDev
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <nav className="hidden w-max flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <span className="sr-only">Dashboard</span>
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Sobre Mim
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Habilidades
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Projetos
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Contato
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <span className="sr-only">Dashboard</span>
              </Link>
              <Link href="#" className="hover:text-foreground">
                Sobre Mim
              </Link>
              <Link href="#" className="hover:text-foreground">
                Habilidades
              </Link>
              <Link href="#" className="hover:text-foreground">
                Projetos
              </Link>
              <Link href="#" className="hover:text-foreground">
                Contato
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <ToggleThemeMode />
      </div>
    </header>
  );
}
