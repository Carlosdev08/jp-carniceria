import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ArrowRight, Beef, Clock3, Fish, MapPin, Phone, ShoppingBag, Truck } from "lucide-react"

const products = [
  {
    category: "Carnes",
    icon: Beef,
    items: [
      { name: "Solomillo de Ternera", price: "24,99 €/kg", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a" },
      { name: "Chuletas de Cordero", price: "19,99 €/kg", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7" },
      { name: "Pechuga de Pollo", price: "8,99 €/kg", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791" },
    ],
  },
  {
    category: "Pescados",
    icon: Fish,
    items: [
      { name: "Lubina Fresca", price: "18,99 €/kg", image: "https://images.unsplash.com/photo-1611171711791-b34b41c4f827" },
      { name: "Salmón Premium", price: "22,99 €/kg", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6" },
      { name: "Gambas Rojas", price: "29,99 €/kg", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47" },
    ],
  },
]

const offers = [
  {
    title: "Pack Barbacoa",
    description: "Selección especial de carnes para barbacoa",
    price: "49,99 €",
    oldPrice: "65,99 €",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
  },
  {
    title: "Marisco Fresco",
    description: "Combinado de mariscos del día",
    price: "39,99 €",
    oldPrice: "54,99 €",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47",
  },
]

const benefits = [
  { icon: Award, title: "Calidad premium", description: "Seleccionamos los mejores productos" },
  { icon: Truck, title: "Entrega a domicilio", description: "Recibe tu pedido cómodamente" },
  { icon: Clock3, title: "Siempre fresco", description: "Productos frescos cada día" },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="home-hero relative isolate flex min-h-[470px] items-end sm:min-h-[540px] md:min-h-[620px] md:items-center">
        <Image
          src="https://images.unsplash.com/photo-1553163147-622ab57be1c7"
          alt="Selección de productos frescos de carnicería"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15 md:bg-gradient-to-r md:from-black/75 md:via-black/40 md:to-black/10" />
        <div className="container relative z-10 w-full pb-9 pt-24 text-white sm:pb-14 md:py-24">
          <div className="max-w-2xl">
            <Badge className="mb-4 border border-white/25 bg-white/15 px-3 py-1 text-white backdrop-blur-sm hover:bg-white/20">
              Carnicería & pescadería
            </Badge>
            <h1 className="max-w-xl text-[2.55rem] font-bold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
              Calidad y frescura cada día
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
              Los mejores cortes de carne y el pescado más fresco, directos a tu mesa.
            </p>
            <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <Button asChild size="lg" className="h-13 w-full rounded-xl bg-white px-7 text-base font-semibold text-neutral-950 shadow-lg hover:bg-white/90 sm:w-auto">
                <Link href="#productos">Ver productos <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13 w-full rounded-xl border-white/70 bg-black/20 px-7 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white sm:w-auto">
                <Link href="tel:+34900000000">Hacer pedido <Phone className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-white/85 sm:text-sm">
              <span className="flex items-center gap-2"><Award className="h-4 w-4" /> Calidad seleccionada</span>
              <span className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> Frescura diaria</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Ventajas de J&P" className="bg-muted/45 py-5 sm:py-8 md:py-12">
        <div className="container grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-6">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex min-h-[88px] items-center gap-4 rounded-2xl border border-border/70 bg-card p-4 shadow-sm sm:min-h-0 sm:flex-col sm:items-start sm:p-5 md:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary sm:h-11 sm:w-11">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-base font-semibold tracking-tight sm:text-lg">{title}</h2>
                <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="productos" className="scroll-mt-20 py-12 sm:py-16 md:py-20">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Nuestra selección</p>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Productos frescos</h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">Calidad y sabor en cada elección.</p>
            </div>
            <Link href="#contacto" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:inline-flex">Consultar <ArrowRight className="h-4 w-4" /></Link>
          </div>

          {products.map(({ category, icon: Icon, items }) => (
            <div key={category} className="mb-10 last:mb-0 sm:mb-14">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/8 text-primary"><Icon className="h-5 w-5" /></span>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
                {items.map((item) => (
                  <Card key={item.name} className="group overflow-hidden rounded-2xl border-border/70 shadow-sm transition-shadow hover:shadow-md">
                    <div className="relative aspect-[5/4] overflow-hidden bg-muted">
                      <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 48vw, (max-width: 1024px) 30vw, 360px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <CardContent className="p-3 sm:p-4">
                      <h4 className="line-clamp-2 min-h-10 text-sm font-semibold sm:text-base">{item.name}</h4>
                      <p className="mt-1 text-sm font-bold text-primary sm:text-base">{item.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="ofertas" className="scroll-mt-20 bg-muted/45 py-12 sm:py-16 md:py-20">
        <div className="container">
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Para disfrutar</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Ofertas especiales</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {offers.map((offer) => (
              <Card key={offer.title} className="overflow-hidden rounded-2xl border-border/70 shadow-sm">
                <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                  <Image src={offer.image} alt={offer.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                  <Badge className="absolute right-3 top-3">Oferta</Badge>
                </div>
                <CardContent className="p-4 sm:p-5">
                  <h3 className="text-lg font-semibold">{offer.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{offer.description}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">{offer.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{offer.oldPrice}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-20 py-12 sm:py-16 md:py-20">
        <div className="container">
          <div className="rounded-3xl bg-neutral-950 px-5 py-8 text-white sm:px-9 sm:py-10 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Estamos para ayudarte</p>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">¿Preparamos tu pedido?</h2>
              <p className="mt-2 text-sm text-white/70 sm:text-base">Contacta con nosotros y te atenderemos encantados.</p>
              <div className="mt-5 space-y-2 text-sm text-white/75">
                <p>Lunes a viernes: 8:00 – 20:00</p>
                <p>Sábados: 8:00 – 14:00 · Domingos: cerrado</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 md:mt-0 md:min-w-52">
              <Button asChild size="lg" className="h-12 rounded-xl bg-white text-neutral-950 hover:bg-white/90">
                <Link href="tel:+34900000000"><Phone className="mr-2 h-4 w-4" /> Llamar ahora</Link>
              </Button>
              <p className="flex items-center justify-center gap-1.5 text-xs text-white/60"><MapPin className="h-3.5 w-3.5" /> Madrid</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
