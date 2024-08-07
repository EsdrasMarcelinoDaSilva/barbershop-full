import { FootprintsIcon, Search } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/BarbershopItem"

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
          <Button className="gap-2 rounded-xl" variant="secondary">
            <Image src="/cabelo.svg" width={16} height={16} alt="cabelo" />
            Cabelo
          </Button>

          <Button className="gap-2 rounded-xl" variant="secondary">
            <Image src="/barba.svg" width={16} height={16} alt="cabelo" />
            Barba
          </Button>

          <Button className="gap-2 rounded-xl" variant="secondary">
            <Image src="/acabamento.svg" width={16} height={16} alt="cabelo" />
            Acabamento
          </Button>

          <Button className="gap-2 rounded-xl" variant="secondary">
            <FootprintsIcon size={16} />
            Pezinho
          </Button>

          <Button className="gap-2 rounded-xl" variant="secondary">
            <Image src="/sobrancelha.svg" width={16} height={16} alt="cabelo" />
            Sobrancelha
          </Button>

          <Button className="gap-2 rounded-xl" variant="secondary">
            <Image src="/hidratacao.svg" width={16} height={16} alt="cabelo" />
            Hidratação
          </Button>

          <Button className="gap-2 rounded-xl" variant="secondary">
            <Image src="/massagem.svg" width={16} height={16} alt="cabelo" />
            Massagem
          </Button>
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
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* div left */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit bg-violet-400 text-white">
                Confirmado
              </Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia Varzea-nova</p>
              </div>
            </div>
            {/* div right */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">06</p>
              <p className="text-sm">08:00</p>
            </div>
          </CardContent>
        </Card>
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
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2024 Copyright <span className="font-bold">EMS Barberia</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </>
  )
}
export default Home
