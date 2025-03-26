import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

// Project data
const projects = [
  {
    id: "fitness",
    title: "FikeFit – Your Ultimate Fitness Companion",
    description:
      "A feature-rich fitness and wellness app designed to help users stay active, track progress, and achieve their health goals.",
    longDescription:
      "FikeFit is a feature-rich fitness and wellness app designed to help users stay active, track progress, and achieve their health goals. It offers Apple Pay integration for subscriptions, offline access, downloadable content, social features, and a built-in media player for guided workouts. Built with React Native, FikeFit delivers a seamless and engaging experience, making fitness more accessible and personalized.",
    tags: ["React Native", "Firebase", "Redux", "Stripe", "Pix", "Boleto"],
    image: "/fikefit.png?height=600&width=800",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.fikefit.FikeFit",
    githubUrl: "https://github.com/",
    category: "mobile",
    featured: true,
  },
  // {
  //   id: "health",
  //   title: "OaklyCare - Smarter, Reliable Aging Care",
  //   description:
  //     "OaklyCare is transforming home health in Nigeria with AI-driven care, on-demand services, and seamless automation for faster, personalized, and transparent care.",
  //   longDescription:
  //     "OaklyCare is redefining home health in Nigeria with AI-driven care, on-demand services, and automated workflows for fast, personalized, and transparent care. Book caregivers instantly, track services in real-time, and manage everything through our intuitive mobile app.",
  //   tags: [
  //     "Next.js",
  //     "React Native",
  //     "Firebase",
  //     "Redux",
  //     "HealthKit",
  //     "Google Fit",
  //     // "Machine Learning",
  //   ],
  //   image: "/oakly.png?height=600&width=800",
  //   demoUrl: "https://www.oaklycare.com/",
  //   githubUrl: "https://github.com/",
  //   category: "web",
  //   featured: true,
  // },
  {
    id: "room",
    title: "ROOM - Smarter Form Creation & Data Management",
    description:
      "ROOM is a modern form-building and data collection platform for businesses, teams, and researchers who need more than basic surveys. Built with React (Ant Design) and a scalable backend, it delivers an intuitive, enterprise-ready solution for seamless data management.",
    longDescription:
      "ROOM is a modern form-building and data collection platform designed for seamless collaboration, automation, and AI-driven insights. It goes beyond traditional forms with dynamic multi-step flows, real-time analytics, and secure data encryption. Built with React (Ant Design) and a scalable backend, ROOM offers an intuitive, enterprise-ready solution for smarter data management.",
    tags: ["Next.js", "PostgreSQL", "Vercel", "Tailwind CSS", "Prisma"],
    image: "/room.png?height=600&width=800",
    demoUrl: "https://room-lyart-ten.vercel.app/",
    githubUrl: "https://github.com/",
    category: "web",
    featured: true,
  },
  {
    id: "online-earn",
    title: "EarnHub - Online Earn Platform ",
    description:
      "The EarnHub is a dynamic web-based platform designed to allow users to earn income through various online activities.",
    longDescription:
      "The EarnHub is a dynamic web-based platform designed to allow users to earn income through various online activities. It enables individuals to earn money by completing tasks, taking surveys, engaging in affiliate marketing, and other interactive earning methods. The platform is optimized for a seamless user experience, ensuring that users can easily navigate and access available earning opportunities while managing their earnings and activities efficiently.",
    tags: ["Next.js", "Firebase", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: "/earn.png?height=600&width=800",
    demoUrl: "https://earn-online-now.vercel.app/",
    githubUrl: "https://github.com/",
    category: "web",
    featured: false,
  },
  {
    id: "modeling",
    title: "Premium Models App",
    description:
      "Premium model App is a digital portfolio hub for models and a booking platform, which helps clients around the world to source for models for their projects.",
    longDescription:
      "Premium Model App is a booking platform open to all aspiring and professional models. Models also have the opportunity to gain access to international exposure and casting opportunities regardless of their age, style, location, background or measurements. we combine the professionalism of the flexibility of self-representation to create a platform tailored for you.",
    tags: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Socket.io",
      // "Redis",
    ],
    image: "/pm.png?height=600&width=800",
    demoUrl: "https://play.google.com/store/apps/details?id=com.premium.models",
    githubUrl: "https://github.com/",
    category: "mobile",
    featured: false,
  },
  {
    id: "aegiscribe",
    title: "Aegiscribe",
    description: "Aegiscribe is a digital library platform designed to revolutionize secure book publishing and digital product sales.",
    longDescription:
      "Aegiscribe is a digital library platform designed to revolutionize secure book publishing and digital product sales. Focused on providing a seamless reading and publishing experience, it allows authors and publishers to protect their work with advanced Digital Rights Management (DRM) technology while offering personalized recommendations to readers. The platform is accessible across devices, ensuring an optimized reading experience and easy management of content. Aegiscribe serves as a bridge between digital content creators and readers, promoting a secure, interactive, and engaging environment for both parties.",
    tags: ["Next.js", "React Native", "Django", "PostgreSQL", "Redux", "Chart.js"],
    image: "/aegis.png?height=600&width=800",
    demoUrl: "#",
    githubUrl: "https://github.com/",
    category: "web",
    featured: false,
  },
  // {
  //   id: "inventory-app",
  //   title: "Inventory Management App",
  //   description:
  //     "Mobile application for inventory tracking with barcode scanning and real-time stock updates.",
  //   longDescription:
  //     "This inventory management app helps businesses keep track of their inventory levels in real-time. It includes barcode scanning functionality, stock level alerts, purchase order management, and supplier information. The app works offline and syncs data when connected, making it suitable for warehouses with limited connectivity.",
  //   tags: [
  //     "Flutter",
  //     "Firebase",
  //     "BLoC Pattern",
  //     "Barcode Scanning",
  //     "Cloud Functions",
  //   ],
  //   image: "/placeholder.svg?height=600&width=800",
  //   demoUrl: "https://example.com/inventory-demo",
  //   githubUrl: "https://github.com/example/inventory-app",
  //   category: "mobile",
  //   featured: false,
  // },
  // {
  //   id: "iot-dashboard",
  //   title: "IoT Monitoring Dashboard",
  //   description:
  //     "Real-time dashboard for monitoring IoT devices with alerts and data visualization.",
  //   longDescription:
  //     "This IoT monitoring dashboard provides a centralized interface for monitoring connected devices. It displays real-time data from sensors, allows configuration of alert thresholds, and provides historical data analysis. The dashboard includes customizable widgets, interactive charts, and automated reporting features to help businesses make data-driven decisions.",
  //   tags: ["React", "Node.js", "MQTT", "WebSockets", "InfluxDB", "Grafana"],
  //   image: "/placeholder.svg?height=600&width=800",
  //   demoUrl: "https://example.com/iot-demo",
  //   githubUrl: "https://github.com/example/iot-dashboard",
  //   category: "web",
  //   featured: false,
  // },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-6 md:py-12 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <Button asChild variant="ghost" size="sm" className="gap-1">
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  My Projects
                </h1>
                <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
                  Explore my portfolio of web and mobile applications,
                  showcasing my skills in full-stack development.
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="mt-6 md:mt-12">
              <TabsList className="mb-4 md:mb-8">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web Applications</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="web" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((project) => project.category === "web")
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="mobile" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((project) => project.category === "mobile")
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-muted-foreground line-clamp-3">
          {project.longDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline">+{project.tags.length - 3}</Badge>
          )}
        </div>
        <div className="mt-6 flex items-center gap-4">
          <Button asChild size="sm" variant="default">
            <Link href={`/projects/${project.id}`}>View Details</Link>
          </Button>
          <div className="flex gap-2">
            {project.demoUrl && (
              <Button asChild size="icon" variant="ghost" className="h-8 w-8">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="icon" variant="ghost" className="h-8 w-8">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      {project.featured && (
        <div className="absolute top-3 right-3">
          <Badge className="bg-primary text-primary-foreground">Featured</Badge>
        </div>
      )}
    </div>
  );
}
