import BarbershopItem from "../_components/BarbershopItem"
import Header from "../_components/Header"
import Search from "../_components/Search"
import { db } from "../_lib/prisma"

interface BarbershopPagesProps {
  searchParams: {
    search?: string
  }
}

const BarbershopPages = async ({ searchParams }: BarbershopPagesProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
  })
  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot; {searchParams.search}&quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopPages
