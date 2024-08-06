"use client"

import { Search } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Esdras! </h2>
        <p>Terça-feira, 06 de Agosto.</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search" className="rounded-xl" />
          <Button className="text-{white} rounded-xl bg-violet-400">
            <Search />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FWS Barber "
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </>
  )
}
export default Home
