import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-8 py-9 sm:grid-cols-2 sm:py-12 md:grid-cols-3 md:py-14">
        <div className="sm:col-span-2 md:col-span-1">
          <Link href="/" className="inline-flex text-2xl font-black tracking-[-0.09em]" aria-label="J&P, inicio">J<span className="text-primary/65">&</span>P</Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Carnicería y pescadería. Seleccionamos productos frescos para llevar calidad a tu mesa.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Contacto</h3>
          <div className="space-y-3">
            <Link href="https://maps.google.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <MapPin className="h-4 w-4 shrink-0" /> Madrid
            </Link>
            <Link href="tel:+34900000000" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Phone className="h-4 w-4 shrink-0" /> 900 000 000
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Síguenos</h3>
          <div className="flex gap-3">
            <Link href="https://facebook.com" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-5">
          <p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} J&P. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
