import { Search } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/BarbershopItem"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import Footer from "./_components/Footer"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  return (
    <>
      {/* header */}
      <Header />
      <div className="p-5">
        {/* text */}
        <h2 className="text-xl font-bold">Olá, Esdras! </h2>
        <p>Terça-feira, 06 de Agosto.</p>
        {/* search */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search" className="rounded-xl" />
          <Button className="rounded-xl bg-violet-400 text-white">
            <Search />
          </Button>
        </div>

        {/* quick search */}

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2 rounded-xl"
              variant="secondary"
              key={option.title}
            >
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>
        {/* image */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FWS Barber "
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* booking */}
        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Home
