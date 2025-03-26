import Link from "next/link"
import { ArrowRight, Code, Database, Globe, Layers, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"
import SkillsSection from "@/components/skills-section"
import MarketingSection from "@/components/marketing-section"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import HeroSection from "@/components/hero-section"

// Featured projects data
const featuredProjects = [
  {
    title: "FikeFit – Your Ultimate Fitness Companion",
    description: "FikeFit is a feature-rich fitness app designed for seamless workouts, progress tracking, and wellness support. With Apple Pay integration, offline access, social features, and a built-in media player, it makes fitness accessible anytime, anywhere.",
    tags: ["React Native", "Firebase", "Redux", "Stripe", "Pix", "Boleto"],
    image: "/fikefit.png?height=300&width=500",
    link: "https://play.google.com/store/apps/details?id=com.fikefit.FikeFit",
  },
  // {
  //   title: "OaklyCare – Smarter, Reliable Aging Care",
  //   description:
  //     "OaklyCare is redefining home health in Nigeria with AI-driven care, on-demand services, and automated workflows for fast, personalized, and transparent care. Book caregivers instantly, track services in real-time, and manage everything through our intuitive mobile app.",
  //   tags: ["Next.js", "PostgreSQL", "React Native", "Firebase", "Redux", "HealthKit"],
  //   image: "/oakly.png?height=300&width=500",
  //   link: "https://www.oaklycare.com/",
  // },
  {
    title: "EarnHub - Online Earn Platform ",
    description:
      "The EarnHub is a dynamic web-based platform designed to allow users to earn income through various online activities. It enables individuals to earn money by completing tasks, taking surveys, engaging in affiliate marketing, and other interactive earning methods.",
    tags: ["Next.js", "Firebase", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: "/earn.png?height=600&width=800",
    link: "https://earn-online-now.vercel.app/",
  },
  {
    title: "ROOM – Smarter Form Creation & Data Management",
    description: "ROOM is a modern form-building and data collection platform for businesses, teams, and researchers who need more than basic surveys. Built with React (Ant Design) and a scalable backend, it delivers an intuitive, enterprise-ready solution for seamless data management.",
    tags: ["Next.js", "PostgreSQL", "Vercel", "Tailwind CSS"],
    image: "/room.png?height=300&width=500",
    link: "https://room-lyart-ten.vercel.app/",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-6 md:py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  I'm a passionate full-stack developer with expertise in building web applications, mobile apps, and
                  backend services. With a strong foundation in modern technologies and a keen eye for design, I create
                  solutions that are not only functional but also visually appealing and user-friendly.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-primary" />
                    <span>Web Development</span>
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="mr-2 h-5 w-5 text-primary" />
                    <span>Mobile Apps</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="mr-2 h-5 w-5 text-primary" />
                    <span>Backend Services</span>
                  </div>
                  <div className="flex items-center">
                    <Layers className="mr-2 h-5 w-5 text-primary" />
                    <span>Full Stack</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="mr-2 h-5 w-5 text-primary" />
                    <span>Clean Code</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-500/20 rounded-lg"></div>
                <img
                  src="/head_shot.jpeg?height=400&width=400"
                  alt="Developer portrait"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Skills</h2>
            <SkillsSection />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-6 md:py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6 md:mb-12">
              Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  link={project.link}
                />
              ))}
            </div>
            <div className="mt-6 md:mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/projects" className="font-medium">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Marketing Strategy Section */}
        <section id="marketing" className="py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Marketing Strategy
            </h2>
            <MarketingSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-6 md:py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Have a project in mind or want to discuss potential opportunities? I'm always open to new challenges
                  and collaborations.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span>+234 (906) 612-8757</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <span>innoteknologies@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

