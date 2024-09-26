import { DotPattern } from "@/components/magicui"
import { cn } from "@/lib/utils"
import { HeroSection } from "@/components/hero-section"
import { BentoSection } from "@/components/bento-section"
import { ProjectSection } from "@/components/project-section"
import { ContactSection } from "@/components/contact-section"
import GoogleCaptchaWrapper from "@/components/google-captcha-wrapper"

export default function Home() {
  return (
    <GoogleCaptchaWrapper>
      <main className="relative">
        <HeroSection />
        <BentoSection />
        <ProjectSection />
        <ContactSection />

        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
      </main>
    </GoogleCaptchaWrapper>
  )
}
