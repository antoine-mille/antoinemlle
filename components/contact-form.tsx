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
import { AnimatedSubscribeButton } from "@/components/magicui"
import { CheckIcon, ChevronRightIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { useTranslations } from "next-intl"

const ContactForm = () => {
  const t = useTranslations("ContactSection")

  const formSchema = z.object({
    email: z.string().email({
      message: t("Form.Email.error"),
    }),
    subject: z.string().min(5, {
      message: t("Form.Subject.error"),
    }),
    message: z.string().min(10, {
      message: t("Form.Message.error"),
    }),
  })

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
              <FormLabel>{t("Form.Email.label")}</FormLabel>
              <FormControl>
                <Input placeholder={t("Form.Email.placeholder")} {...field} />
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
              <FormLabel>{t("Form.Subject.label")}</FormLabel>
              <FormControl>
                <Input placeholder={t("Form.Subject.placeholder")} {...field} />
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
              <FormLabel>{t("Form.Message.label")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("Form.Message.placeholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="ml-auto mt-2">
          <AnimatedSubscribeButton
            initialText={
              <span className="group inline-flex items-center gap-2 text-white">
                {t.rich("SubmitButton.submit", {
                  icon: () => (
                    <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  ),
                })}
              </span>
            }
            changeText={
              <span className="group inline-flex items-center gap-2">
                {t.rich("SubmitButton.submitted", {
                  icon: () => <CheckIcon className="size-4" />,
                })}
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
