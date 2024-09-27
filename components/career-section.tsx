import { Section } from "@/components/section"
import { TextRevealByWord } from "@/components/ui"

const CareerSection = () => {
  return (
    <Section withDotPattern>
      <h1 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
        Découvrez mon parcours <br /> dans l&apos;informatique !
      </h1>
      <TextRevealByWord text="J'avais *13 *ans quand j'ai *commencé à *coder, je jouais à un *jeu *vidéo qui s'appelait *Minecraft. J'ai *découvert que l'on pouvait *créer des *serveurs pour jouer avec ses amis. J'ai donc *commencé à *apprendre le *langage *Java, pas trop sérieusement, mais suffisamment pour créer *mes *premiers *plugins. Puis, de plus en plus, je me suis *expertisé dans *ce *langage en suivant *des *cours en *auto-didacte." />

      <TextRevealByWord text="J'ai donc *collaboré avec *plusieurs grands serveurs *Minecraft francophones. Je compte *aujourd'hui plus de *7 *ans *d'expérience dans le *développement. Depuis *2020, j'ai *ouvert mon *auto-entreprise et je me suis *lancé en tant que *freelance dans le *développement. Depuis *quelques *années maintenant, je me suis *lancé dans le *développement *web, comme vous *pouvez le voir sur ce *site." />
    </Section>
  )
}

export { CareerSection }
