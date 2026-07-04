"use client";

import { AnimatedBadge } from "@/components/animated-badge";
import { HackathonCard } from "@/components/hackathon-card";
import { HeroSection } from "@/components/hero-section";
import BlurFade from "@/components/magicui/blur-fade";
import { AnimatedButton } from "@/components/magicui/animated-button";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/context/locale-provider";
import Link from "next/link";
import Markdown from "react-markdown";

export function PortfolioPage() {
  const { data } = useLocale();
  const firstName = data.name.split(" ")[0];

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <HeroSection
        name={data.name}
        initials={data.initials}
        avatarUrl={data.avatarUrl}
        description={data.description}
        greeting={data.ui.heroGreeting(firstName)}
        buildPrefix={data.ui.heroBuildPrefix}
        flipWords={[...data.ui.heroFlipWords]}
      />

      <section id="about">
        <SectionHeading title={data.ui.about} />
        <BlurFade delay={0.1} inView>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {data.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <SectionHeading title={data.ui.workExperience} />
          {data.work.map((work, id) => (
            <BlurFade key={work.company} delay={id * 0.1} inView>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? data.ui.present}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <SectionHeading title={data.ui.education} />
          {data.education.map((education, id) => (
            <BlurFade key={education.school} delay={id * 0.1} inView>
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <SectionHeading title={data.ui.skills} />
          <div className="flex flex-wrap gap-1">
            {data.skills.map((skill, id) => (
              <BlurFade key={skill} delay={id * 0.03} inView>
                <AnimatedBadge>{skill}</AnimatedBadge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <BlurFade inView>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  {data.ui.projectsBadge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {data.ui.projectsTitle}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {data.ui.projectsDescription}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
            {data.projects.map((project, id) => (
              <BlurFade key={project.title} delay={id * 0.08} inView>
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="hackathons">
        <div className="w-full space-y-12 py-12">
          <BlurFade inView>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  {data.ui.hackathonsBadge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {data.ui.hackathonsTitle}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {data.ui.hackathonsDescription(data.hackathons.length)}
                </p>
              </div>
            </div>
          </BlurFade>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {data.hackathons.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={id * 0.12}
                inView
              >
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade inView>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                {data.ui.contactBadge}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {data.ui.contactTitle}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {data.ui.contactPrefix}
                <Link
                  href={data.contact.social.X.url}
                  target="_blank"
                  className="text-blue-500 transition-colors hover:underline"
                >
                  {data.ui.contactLink}
                </Link>
                {data.ui.contactSuffix}
              </p>

              <div className="mt-4">
                <AnimatedButton href={data.ui.resumePdf} download>
                  {data.ui.downloadResume}
                </AnimatedButton>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
