"use client"

import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/components/ui"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatedSubscribeButton } from "./magicui"
import { CheckIcon, ChevronRightIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const formSchema = z.object({
  email: z.string().email({
    message: "Votre adresse email n'est pas valide",
  }),
  subject: z.string().min(5, {
    message: "Le sujet de votre message doit faire au moins 5 caractères",
  }),
  message: z.string().min(10, {
    message: "Votre message doit faire au moins 10 caractères",
  }),
})

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  })

  const [isSubscribed, setIsSubscribed] = useState(false)

  const { executeRecaptcha } = useGoogleReCaptcha()

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!executeRecaptcha) {
      console.error("Recaptcha not ready")
      return
    }

    const gRecaptchaToken = await executeRecaptcha("registerSubmit")

    const recaptchaResponse = await fetch("/api/recaptchaVerify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gRecaptchaToken }),
    }).then((res) => res.json())

    if (recaptchaResponse.error) {
      console.error(recaptchaResponse.error)
      return
    }

    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json())

    if (res?.error) {
      console.error(res.error)
      return
    }

    setIsSubscribed(true)
    form.reset()
    console.log(res.message)
  }

  useEffect(() => {
    if (isSubscribed) {
      const timer = setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isSubscribed])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse email</FormLabel>
              <FormControl>
                <Input placeholder="Entrez votre adresse email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sujet du message</FormLabel>
              <FormControl>
                <Input placeholder="Entrez votre sujet du message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Entrez votre message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="ml-auto mt-2">
          <AnimatedSubscribeButton
            initialText={
              <span className="group inline-flex items-center text-white">
                Soumettre&nbsp;
                <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            }
            changeText={
              <span className="group inline-flex gap-2 items-center">
                <CheckIcon className="size-4" />
                Envoyé !
              </span>
            }
            buttonColor="#111827"
            isSubscribed={isSubscribed}
          />
        </div>
      </form>
    </Form>
  )
}

export { ContactForm }
