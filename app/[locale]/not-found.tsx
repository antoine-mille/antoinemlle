import Image from "next/image"
import notFoundImage from "@/public/images/errors/not-found.svg"
import { Section } from "@/components/section"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

export default function Custom404() {
  const t = useTranslations("NotFound")

  return (
    <main className="size-full pb-12">
      <Section
        withDotPattern
        className="flex h-full flex-col items-center gap-3"
      >
        <Image
          src={notFoundImage}
          alt="Image 404 error"
          width={400}
          height={400}
        />
        <h1 className="text-center text-xl font-bold sm:text-2xl lg:text-3xl">
          {t("title")}
        </h1>
        <p className="text-center text-sm sm:text-base lg:text-lg">
          {t.rich("description", {
            a: (chunks) => (
              <Link href="/" className="font-medium text-secondary">
                {chunks}
              </Link>
            ),
          })}
        </p>
      </Section>
    </main>
  )
}
