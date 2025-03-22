"use client"

import { motion } from "framer-motion"

const skills = [
  // "Vue.js", "Angular",
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS3/SASS", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  // "Ruby on Rails", "PHP",
  {
    category: "Backend",
    items: ["Node.js", "Express", "Django", "Java/SpringBoot", "Python", "GraphQL", "REST API"],
  },
  // "Swift", "Kotlin",
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "iOS", "Android"],
  },
  // "Redis", "Elasticsearch"
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase",],
  },
  // "Google Cloud", "Azure", "Kubernetes",
  {
    category: "DevOps",
    items: ["Docker", "AWS", "CI/CD", "Git", "GitHub Actions"],
  },
  {
    category: "Tools",
    items: ["VS Code", "Figma", "Adobe XD", "Postman", "Jira", "Notion"],
  },
]

export default function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid gap-0 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {skills.map((skillGroup) => (
        <motion.div key={skillGroup.category} variants={item} className="bg-card rounded-lg p-4 md:p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

