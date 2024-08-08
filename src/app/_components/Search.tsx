"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "./ui/input"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { SearchIcon } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"

const formSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, {
      message: "Digite algo para buscar",
    })
    .max(50),
})

const Search = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  const router = useRouter()

  const handleSumit = (data: z.infer<typeof formSchema>) => {
    router.push(`/barbershops?title=${data.title}`)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSumit)} className="flex gap-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="rounded-xl">
                  <Input placeholder="Faça sua busca..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="rounded-xl" type="submit">
            <SearchIcon />
          </Button>
        </form>
      </Form>
    </>
  )
}

export default Search
