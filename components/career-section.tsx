import { Section } from "@/components/section"
import { TextRevealByWord } from "@/components/ui"

const CareerSection = () => {
  return (
    <Section withDotPattern>
      <h1 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
        Découvrez mon parcours <br /> dans l&apos;informatique !
      </h1>
      <TextRevealByWord text="À l'âge de treize ans, j’ai *commencé à *coder. Je jouais à un *jeu *vidéo appelé *Minecraft.% J’ai *découvert qu’il était possible de *créer des *serveurs pour jouer avec des amis. J’ai donc *commencé à *apprendre le *langage *Java, sans grande rigueur au départ, mais suffisamment pour développer *mes *premiers *plugins.% Peu à peu, je me suis *expertisé dans *ce *langage en suivant des *cours en *autodidacte." />

      <TextRevealByWord text="J’ai eu l’opportunité de *collaborer avec plusieurs grands serveurs *Minecraft francophones, ce qui m’a permis de développer plus de *7 *ans d’expérience dans le *développement.% En *2020, j’ai décidé de créer mon *auto-entreprise et de me lancer en tant que *freelance, poursuivant ainsi mon parcours.% Au fil des années, je me suis aussi tourné vers le *développement *web, comme vous pouvez le découvrir sur ce *site.% Enfin, je suis diplômé d’un *BUT *Informatique que j’ai obtenu à *l’UPJV *d’Amiens en *2024." />
    </Section>
  )
}

export { CareerSection }

/*

J’ai ainsi eu l’occasion de *collaborer avec *plusieurs grands serveurs *Minecraft francophones, ce qui m’a permis d’acquérir plus de *7 *ans *d’expérience dans le *développement.% En *2020, j’ai décidé de *créer mon *auto-entreprise et de me *lancer en tant que *freelance, poursuivant ainsi mon parcours.% Au fil des *années, je me suis également orienté vers le *développement *web, comme vous pouvez le découvrir sur ce *site. En fin, je suis aussi diplomé d'un BUT Informatique que j'ai réalisé à l'UPJV d'Amiens.

*/
