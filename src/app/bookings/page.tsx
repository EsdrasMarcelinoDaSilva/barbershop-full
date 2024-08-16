import { getServerSession } from "next-auth"
import { authOptions } from "../_lib/auth"
import { notFound } from "next/navigation"
import BookingItem from "../_components/BookingItem"
import Header from "../_components/header"
import { getConfirmedBookings } from "../data/getConfirmedBookings"
import { getConcludedBookings } from "../data/getConcludedBookings"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    //TODO: mostrar pop-up de login
    return notFound()
  }
  const confirmedBookings = await getConfirmedBookings()
  const concludeBookings = await getConcludedBookings()

  return (
    <>
      <Header />
      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        {concludeBookings.length === 0 && concludeBookings.length === 0 && (
          <p className="text-gray-400">Você não tem agendamentos</p>
        )}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Confirmados
            </h2>
            {confirmedBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                booking={JSON.parse(JSON.stringify(booking))}
              />
            ))}
          </>
        )}
        {concludeBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Finalizados
            </h2>
            {concludeBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                booking={JSON.parse(JSON.stringify(booking))}
              />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default Bookings
