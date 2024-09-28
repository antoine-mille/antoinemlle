"use client"

import { FC, ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"
import React from "react"

interface TextRevealByWordProps {
  text: string
  className?: string
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })
  const words = text.split(" ")

  return (
    <div ref={targetRef} className={cn("h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex flex-col justify-center bg-transparent pt-16"
        }
      >
        <p
          ref={targetRef}
          className={
            "inline-flex flex-wrap pt-4 text-xl font-semibold text-black/20 sm:text-2xl md:text-3xl lg:text-4xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            const isBreak = word.endsWith("%")
            const isImportant = word.startsWith("*")
            return (
              <React.Fragment key={i}>
                <Word
                  progress={scrollYProgress}
                  range={[start, end]}
                  isImportant={isImportant}
                >
                  {word.replace(/[*%]/g, "")}
                </Word>
                {isBreak && (
                  <>
                    <span className="basis-full" />
                    <br />
                  </>
                )}
              </React.Fragment>
            )
          })}
        </p>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: any
  range: [number, number]
  isImportant?: boolean
}

const Word: FC<WordProps> = ({
  children,
  progress,
  range,
  isImportant = false,
}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <span
        className={cn("absolute opacity-30", isImportant && "text-secondary")}
      >
        {children}
      </span>
      <motion.span
        style={{ opacity: opacity }}
        className={cn("text-black", isImportant && "text-secondary")}
      >
        {children}
      </motion.span>
    </span>
  )
}

export { TextRevealByWord }
