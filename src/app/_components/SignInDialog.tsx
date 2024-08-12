import Image from "next/image"
import { Button } from "./ui/button"
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { signIn } from "next-auth/react"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça seu login na plataforma</DialogTitle>
        <DialogDescription>Conect-se usando sua conta Google</DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-2 rounded font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          alt="Fazer login com Google"
          src="/google.svg"
          width={18}
          height={18}
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
