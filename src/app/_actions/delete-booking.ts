"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"

export const deleteBooking = async (bookingId: string) => {
  await db.bookin.delete({
    where: {
      id: bookingId,
    },
  })
  revalidatePath("/bookings")
}
