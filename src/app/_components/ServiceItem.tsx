import { BarbershopService } from "@prisma/client"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

interface ServiceItemProps {
  service: BarbershopService
}
const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        {/* image */}
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
          <Image
            src={service.imageUrl}
            fill
            className="rounded-xl object-cover"
            alt={service.name}
          />
        </div>
        {/* right */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          {/* price and button */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-[#7F61FC]">
              {Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(Number(+service.price))}
            </p>

            <Button variant="secondary" size="sm" className="rounded-xl">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem
