"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, ExternalLink, Github, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { useParams } from "next/navigation";

// Project data (same as in projects/page.tsx)
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
    completionDate: "2023-06-15",
    client: "Fikefit",
    role: "Lead Developer, Mobile",
    features: [
      "Offline Access: Access workouts and content anytime, even without an internet connection.",
      "In-App Purchases: Access premium content, subscription options, and fitness programs.",
      "Apple Pay Integration: Convenient subscription payments with Apple Pay.",
      "Social Features: Connect with friends, share achievements, and join fitness challenges.",
    ],
    challenges:
      "Ensuring seamless offline access to content and workouts. We implemented an efficient caching mechanism to store content locally and sync when the internet is available.",
    screenshots: [
      "/fikefit1.webp?height=400&width=600",
      "/fikefit2.webp?height=400&width=600",
      "/fikefit3.webp?height=400&width=600",
    ],
  },
  {
    id: "health",
    title: "OaklyCare – Smarter, Reliable Aging Care",
    description:
      "OaklyCare is transforming home health in Nigeria with AI-driven care, on-demand services, and seamless automation for faster, personalized, and transparent care.",
    longDescription:
      "OaklyCare is redefining home health in Nigeria with AI-driven care, on-demand services, and automated workflows for fast, personalized, and transparent care. Book caregivers instantly, track services in real-time, and manage everything through our intuitive mobile app.",
    tags: [
      "Next.js",
      "React Native",
      "Firebase",
      "Redux",
      "HealthKit",
      "Google Fit",
      // "Machine Learning",
    ],
    image: "/oakly.png?height=600&width=800",
    demoUrl: "https://www.oaklycare.com/",
    githubUrl: "https://github.com/",
    category: "web, mobile",
    featured: true,
    completionDate: "2025-06-30",
    client: "Oaklycare",
    role: "Lead Developer, Web & Mobile",
    features: [
      "Smart, tailored care plans.",
      "Instant booking & secure payments.",
      "Faster, paperless coordination.",
      "Real-time tracking & documentation.",
      "Manage care anytime, anywhere",
      "Push notifications for reminders",
      "OaklyCare: Quality Care, When You Need It.",
    ],
    challenges:
      "Integrating with various health devices and ensuring data accuracy was a significant challenge. We are developing a unified API layer that could normalize data from different sources while maintaining accuracy and reliability.",
    screenshots: [
      "/oakly1.png?height=400&width=600",
      "/oakly2.png?height=400&width=600",
      "/oakly3.png?height=400&width=600",
    ],
  },
  {
    id: "room",
    title: "ROOM – Smarter Form Creation & Data Management",
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
    completionDate: "2025-05-31",
    client: "ROOM",
    role: "Full Stack Developer",
    features: [
      "Customizable Form Creation: Create dynamic, multi-step forms with ease",
      "Real-Time Analytics: Instant data visualization with built-in reporting features.",
      "Multi-Device Support: Fully responsive design for desktop, tablet, and mobile use.",
      "Flexible Export Options: Export form data to Excel, CSV, or PDF formats.",
      "Streamlined processes for data collection and form management.",
    ],
    challenges:
      "Building user-friendly, customizable forms with multiple input types. We developed an intuitive form builder with real-time preview and flexible input options.",
    screenshots: [
      "/room1.png?height=400&width=600",
      "/room2.png?height=400&width=600",
      "/room3.png?height=400&width=600",
    ],
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
    completionDate: "2025-04-30",
    client: "Techmita",
    role: "Full Stack Developer",
    features: [
      "Task-Based Earning",
      "Real-Time Earnings Tracker",
      "Analytics & Reports",
      "Referral System",
      "Payment Integration: Secure payment methods for easy withdrawal of earnings, supporting local payment systems.",
    ],
    challenges:
      "Handling a large volume of tasks and ensuring users can easily find available opportunities. We developed an efficient task management system with filters and categories, allowing users to quickly search and find tasks based on their preferences.",
    screenshots: [
      "/earn1.png?height=400&width=600",
      "/earn2.png?height=400&width=600",
      "/earn3.png?height=400&width=600",
    ],
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
    completionDate: "2024-30-04",
    client: "Premium Models",
    role: "Mobile Developer",
    features: [
      "Real-time messaging",
      "Instant booking system & secure payments.",
      "Push notifications",
      "Job market place",
      "Subscription",
    ],
    challenges:
      "Ensuring the platform could handle growing user base and task volume. We optimized the backend infrastructure and used cloud-based services for auto-scaling to handle increased traffic without compromising performance.",
    screenshots: [
      "/pm1.webp?height=400&width=600",
      "/pm2.webp?height=400&width=600",
      "/pm3.webp?height=400&width=600",
    ],
  },
  {
    id: "aegiscribe",
    title: "Aegiscribe",
    description:
      "Aegiscribe is a digital library platform designed to revolutionize secure book publishing and digital product sales.",
    longDescription:
      "Aegiscribe is a digital library platform designed to revolutionize secure book publishing and digital product sales. Focused on providing a seamless reading and publishing experience, it allows authors and publishers to protect their work with advanced Digital Rights Management (DRM) technology while offering personalized recommendations to readers. The platform is accessible across devices, ensuring an optimized reading experience and easy management of content. Aegiscribe serves as a bridge between digital content creators and readers, promoting a secure, interactive, and engaging environment for both parties.",
    tags: [
      "Next.js",
      "React Native",
      "Django",
      "PostgreSQL",
      "Redux",
      "Chart.js",
    ],
    image: "/aegis.png?height=600&width=800",
    demoUrl: "#",
    githubUrl: "https://github.com/",
    category: "mobile, web",
    featured: false,
    completionDate: "2023-03-12",
    client: "DigitalGrowth Marketing",
    role: "Full Stack Developer",
    features: [
      "Secure Book Publishing",
      "Personalized Recommendations",
      "Cross-Device Compatibility",
      "Publisher Dashboard",
      "Reader Dashboard",
      "Community Engagement",
      "Social Sharing: Users can share book recommendations or favorite reads through social channels directly from the platform.",
      "E-commerce Integration: Secure payment gateways for readers to purchase books directly from the platform, with multiple pricing models (pay-per-book or subscription).",
    ],
    challenges:
      "Ensuring books and digital content were adequately protected from unauthorized sharing and piracy. We are integrating robust DRM protection, encrypting files and implementing restrictions on copying, printing, and sharing to maintain content integrity.",
    screenshots: [
      "/aegis.png?height=400&width=600",
      "/aegis.png?height=400&width=600",
      "/aegis.png?height=400&width=600",
    ],
  },
  // {
  //   id: "inventory-app",
  //   title: "Inventory Management App",
  //   description: "Mobile application for inventory tracking with barcode scanning and real-time stock updates.",
  //   longDescription:
  //     "This inventory management app helps businesses keep track of their inventory levels in real-time. It includes barcode scanning functionality, stock level alerts, purchase order management, and supplier information. The app works offline and syncs data when connected, making it suitable for warehouses with limited connectivity.",
  //   tags: ["Flutter", "Firebase", "BLoC Pattern", "Barcode Scanning", "Cloud Functions"],
  //   image: "/placeholder.svg?height=600&width=800",
  //   demoUrl: "https://example.com/inventory-demo",
  //   githubUrl: "https://github.com/example/inventory-app",
  //   category: "mobile",
  //   featured: false,
  //   completionDate: "2023-07-20",
  //   client: "SupplyChain Solutions",
  //   role: "Mobile Developer",
  //   features: [
  //     "Barcode and QR code scanning",
  //     "Real-time inventory tracking",
  //     "Stock level alerts and notifications",
  //     "Purchase order management",
  //     "Supplier information and ordering",
  //     "Offline functionality with data syncing",
  //     "Inventory reports and analytics",
  //     "Multi-location support",
  //   ],
  //   challenges:
  //     "Ensuring reliable offline functionality while maintaining data integrity was challenging. We implemented a robust local database with conflict resolution strategies to handle cases where multiple users modified the same inventory items while offline.",
  //   screenshots: [
  //     "/placeholder.svg?height=400&width=600",
  //     "/placeholder.svg?height=400&width=600",
  //     "/placeholder.svg?height=400&width=600",
  //   ],
  // },
  // {
  //   id: "iot-dashboard",
  //   title: "IoT Monitoring Dashboard",
  //   description: "Real-time dashboard for monitoring IoT devices with alerts and data visualization.",
  //   longDescription:
  //     "This IoT monitoring dashboard provides a centralized interface for monitoring connected devices. It displays real-time data from sensors, allows configuration of alert thresholds, and provides historical data analysis. The dashboard includes customizable widgets, interactive charts, and automated reporting features to help businesses make data-driven decisions.",
  //   tags: ["React", "Node.js", "MQTT", "WebSockets", "InfluxDB", "Grafana"],
  //   image: "/placeholder.svg?height=600&width=800",
  //   demoUrl: "https://example.com/iot-demo",
  //   githubUrl: "https://github.com/example/iot-dashboard",
  //   category: "web",
  //   featured: false,
  //   completionDate: "2023-10-08",
  //   client: "SmartFactory Technologies",
  //   role: "IoT Developer",
  //   features: [
  //     "Real-time sensor data visualization",
  //     "Historical data analysis",
  //     "Alert configuration and notifications",
  //     "Device management and configuration",
  //     "Customizable dashboard widgets",
  //     "Automated reporting",
  //     "Data export capabilities",
  //     "User access control",
  //   ],
  //   challenges:
  //     "Handling the high volume of real-time data from hundreds of sensors while maintaining dashboard responsiveness was challenging. We implemented a time-series database with data downsampling and efficient querying to ensure smooth performance even with large datasets.",
  //   screenshots: [
  //     "/placeholder.svg?height=400&width=600",
  //     "/placeholder.svg?height=400&width=600",
  //     "/placeholder.svg?height=400&width=600",
  //   ],
  // },
];

export default function ProjectDetailPage() {
  const params = useParams();

  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 container px-4 md:px-6 py-12">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <p className="mt-4">The project you're looking for doesn't exist.</p>
          <Button asChild className="mt-6">
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-12">
          <div className="flex items-center gap-2 mb-8">
            <Button asChild variant="ghost" size="sm" className="gap-1">
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="rounded-lg overflow-hidden border">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-8">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="mt-4 text-muted-foreground">
                  {project.longDescription}
                </p>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">
                    Challenges & Solutions
                  </h2>
                  <p>{project.challenges}</p>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {project.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden border"
                      >
                        <img
                          src={screenshot || "/placeholder.svg"}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg border bg-card p-6 sticky top-20">
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        Completed:{" "}
                        {new Date(project.completionDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                          }
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span>Client: {project.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Tag className="h-4 w-4" />
                      <span>Role: {project.role}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {project.demoUrl && (
                      <Button asChild className="w-full">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild variant="outline" className="w-full">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Source Code
                        </a>
                      </Button>
                    )}
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="text-sm font-medium mb-2">
                      Need a similar project?
                    </h3>
                    <Button asChild className="w-full">
                      <Link href="/#contact">Contact Me</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
