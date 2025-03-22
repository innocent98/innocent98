"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Globe, LineChart, Search, Target, Users } from "lucide-react"

export default function MarketingSection() {
  return (
    <Tabs defaultValue="seo" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="seo">SEO Strategy</TabsTrigger>
        <TabsTrigger value="ads">Google Ads</TabsTrigger>
        <TabsTrigger value="social">Social Media</TabsTrigger>
      </TabsList>
      <TabsContent value="seo">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Search className="h-6 w-6 text-primary" />
              <CardTitle>Keyword Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Strategic keyword research and implementation to target high-value search terms relevant to your
                development services.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Globe className="h-6 w-6 text-primary" />
              <CardTitle>Technical SEO</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Optimized site structure, meta tags, and schema markup to ensure search engines can effectively crawl
                and index your product.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <BarChart3 className="h-6 w-6 text-primary" />
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Regular analysis of search rankings, traffic, and user behavior to continuously refine your SEO
                strategy.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </TabsContent>
      <TabsContent value="ads">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Target className="h-6 w-6 text-primary" />
              <CardTitle>Targeted Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Precision-targeted Google Ads campaigns focused on your businesses.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle>Audience Segmentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Custom audience segments based on industry, company size, and specific development needs to maximize ad
                relevance.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <LineChart className="h-6 w-6 text-primary" />
              <CardTitle>Performance Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprehensive analytics and conversion tracking to measure ROI and continuously optimize your ad spend.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </TabsContent>
      <TabsContent value="social">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <CardTitle>LinkedIn Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Professional content strategy focused on showcasing your business expertise and connecting with
                potential clients.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <CardTitle>Twitter Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Regular sharing of business insights, business updates, and industry news to build your professional
                network.
              </p>
            </CardContent>
          </Card>
          {/* <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <CardTitle>GitHub Presence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Optimized GitHub profile and repositories to showcase your code quality and development process to
                potential clients.
              </p>
            </CardContent>
          </Card> */}
        </motion.div>
      </TabsContent>
    </Tabs>
  )
}

