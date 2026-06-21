"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { FlipWords } from "@/components/ui/flip-words";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name: string;
  initials: string;
  avatarUrl: string;
  description: string;
}

export function HeroSection({
  name,
  initials,
  avatarUrl,
  description,
}: HeroSectionProps) {
  const firstName = name.split(" ")[0];

  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex justify-between gap-2">
          <div className="flex flex-1 flex-col space-y-1.5">
            <BlurFadeText
              delay={0.1}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${firstName} 👋`}
              animateByCharacter
              characterDelay={0.025}
            />
            <BlurFade delay={0.35}>
              <p className="max-w-[600px] md:text-xl">
                I build{" "}
                <FlipWords
                  words={[
                    "web apps",
                    "AI tools",
                    "full-stack products",
                    "automation systems",
                  ]}
                  className="font-semibold text-foreground"
                />
              </p>
            </BlurFade>
            <BlurFade delay={0.5}>
              <p className="max-w-[600px] text-sm text-muted-foreground md:text-base">
                {description}
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={0.2}>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Avatar className="size-28 border shadow-md ring-2 ring-border/50">
                <AvatarImage alt={name} src={avatarUrl} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
