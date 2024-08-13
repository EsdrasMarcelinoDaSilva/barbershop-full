"use client"

import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { signOut, useSession } from "next-auth/react"
import SignInDialog from "./SignInDialog"

const SidebarSheets = () => {
  const { data } = useSession()
  const handleLogoutClick = () => signOut()

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid p-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""} />
            </Avatar>

            <div>
              <p className="text-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login</h2>
            <Dialog>
              <DialogTrigger>
                <Button size="icon" className="rounded bg-[#7F61FC]">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%] rounded">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button
            className="justify-start gap-2 rounded"
            variant="ghost"
            asChild
          >
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2 rounded" variant="ghost" asChild>
          <Link href="/bookings">
            <CalendarIcon size={18} />
            Agendamentos
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((options) => (
          <SheetClose key={options.title} asChild>
            <Button
              className="justify-start gap-2 rounded"
              variant="ghost"
              asChild
            >
              <Link href={`/barbershops?service=${options.title}`}>
                <Image
                  alt={options.title}
                  src={options.imageUrl}
                  height={18}
                  width={18}
                />
                {options.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>
      {data?.user && (
        <div className="flex flex-col gap-2 border-b border-solid py-5">
          <Button
            className="justify-start gap-2 rounded"
            variant="ghost"
            onClick={handleLogoutClick}
          >
            <LogOutIcon size={18} />
            Sair da conta
          </Button>
        </div>
      )}
    </SheetContent>
  )
}

export default SidebarSheets
