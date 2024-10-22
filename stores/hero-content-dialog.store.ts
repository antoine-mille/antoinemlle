import { StaticImageData } from "next/image"
import { create } from "zustand"

interface HeroContentDialogStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  content?: {
    type: "video" | "image"
    src: string | StaticImageData
    alt: string
  }
  setContent: (content: HeroContentDialogStore["content"]) => void
}

const useHeroContentDialogStore = create<HeroContentDialogStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  content: undefined,
  setContent: (content) => set({ content }),
}))

export { useHeroContentDialogStore }
