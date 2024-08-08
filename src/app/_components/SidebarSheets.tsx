import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"

const SidebarSheets = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid p-5">
        <Avatar>
          <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQG1sMZT7-sWAQ/profile-displayphoto-shrink_800_800/0/1720025583445?e=1728518400&v=beta&t=LqOUgrxnH8XHxXrOn2dAsQDkwny2k88SHrIWagU3Ooc" />
        </Avatar>
        <div>
          <p className="text-bold">Esdras Marcelino</p>
          <p className="text-xs">esdrasmarcelino55@gmail.com</p>
        </div>
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
        <Button className="justify-start gap-2 rounded" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((options) => (
          <Button
            key={options.title}
            className="justify-start gap-2 rounded"
            variant="ghost"
          >
            <Image
              alt={options.title}
              src={options.imageUrl}
              height={18}
              width={18}
            />
            {options.title}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <Button className="justify-start gap-2 rounded" variant="ghost">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheets
