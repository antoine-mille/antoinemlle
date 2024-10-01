import { HeroSection } from "@/components/hero-section"
import { BentoSection } from "@/components/bento-section"
import { SmallProjectSection } from "@/components/project-section"
import { ContactSection } from "@/components/contact-section"
import GoogleCaptchaWrapper from "@/components/google-captcha-wrapper"

export default function Home() {
  return (
    <GoogleCaptchaWrapper>
      <main className="size-full">
        <HeroSection />
        <BentoSection />
        <SmallProjectSection />
        <ContactSection />
      </main>
    </GoogleCaptchaWrapper>
  )
}
