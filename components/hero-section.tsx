"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Mouse position
    const mouse = {
      x: 0,
      y: 0,
    };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      distance: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 5 + 1;
        this.density = Math.random() * 30 + 1;
        this.distance = 0;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 50%)`;
      }

      update() {
        // Calculate distance between mouse and particle
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        this.distance = Math.sqrt(dx * dx + dy * dy);

        const forceDirectionX = dx / this.distance;
        const forceDirectionY = dy / this.distance;
        const maxDistance = 100;
        const force = (maxDistance - this.distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        if (this.distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Create particle array
    const particlesArray: Particle[] = [];
    const numberOfParticles = 200;

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    };

    init();

    // Connect particles with lines
    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            if (ctx) {
              ctx.strokeStyle = `rgba(100, 150, 255, ${1 - distance / 120})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      connect();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="inline-block">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="px-4 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium mb-4 inline-block"
              >
                Full Stack Developer
              </motion.span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none"
            >
              Crafting Digital <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500">
                Experiences
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-[600px] text-muted-foreground md:text-xl"
            >
              I build innovative web & mobile solutions that solve real-world
              problems and deliver exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <Button asChild size="lg" className="font-medium">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://docs.google.com/document/d/1DxMZOAtn5BzzaHpTepEdY4oZhRoFYTE8/edit?usp=sharing&ouid=115072651497422935732&rtpof=true&sd=true"
                  target="_blank"
                  className="group"
                >
                  Download CV
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-8 flex items-center gap-8"
            >
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">
                  JS
                </div>
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs font-medium text-indigo-500">
                  TS
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-medium text-blue-500">
                  R
                </div>
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-xs font-medium text-green-500">
                  N
                </div>
              </div>
              <span className="text-sm text-muted-foreground">
                Tech stack expertise
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-indigo-500 opacity-20 blur-2xl"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center">
                    <div className="absolute inset-[6px] rounded-full bg-background flex items-center justify-center">
                      <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-indigo-500">
                        &lt;/&gt;
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-8 right-8 bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Currently accepting new projects and collaborations
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
