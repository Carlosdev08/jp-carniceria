"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, ShoppingBag, X } from "lucide-react"
import { CartSheet } from "./cart/cart-sheet"

const routes = [
  { name: "Inicio", path: "/" },
  { name: "Productos", path: "/#productos" },
  { name: "Ofertas", path: "/#ofertas" },
  { name: "Contacto", path: "/#contacto" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/85">
      <div className="container flex h-[3.75rem] items-center justify-between sm:h-16">
        <Link href="/" aria-label="J&P, inicio" className="flex items-center">
          <span className="text-[1.8rem] font-black tracking-[-0.09em] sm:text-3xl">J<span className="text-primary/65">&</span>P</span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 md:flex">
          {routes.map((route) => (
            <Link key={route.path} href={route.path} className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground">
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <div className="flex items-center">
            <CartSheet />
          </div>
          <Button asChild variant="ghost" size="icon" className="hidden md:inline-flex" aria-label="Llamar a J&P">
            <Link href="tel:+34900000000"><Phone className="h-5 w-5" /></Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl md:hidden" aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[ min(20rem, 88vw)]">
              <div className="mb-8 flex items-center gap-2">
                <span className="text-2xl font-black tracking-[-0.09em]">J<span className="text-primary/65">&</span>P</span>
                <span className="text-xs text-muted-foreground">Carnicería & pescadería</span>
              </div>
              <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
                {routes.map((route) => (
                  <Link key={route.path} href={route.path} onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-muted">
                    {route.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-7 border-t pt-6">
                <Button asChild className="h-12 w-full rounded-xl">
                  <Link href="tel:+34900000000" onClick={() => setIsOpen(false)}><Phone className="mr-2 h-4 w-4" /> Hacer pedido</Link>
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">Estamos aquí para ayudarte</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
