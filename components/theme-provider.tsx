"use client"

import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  // Initialize theme from localStorage or default
  const [theme, setThemeState] = useState<Theme>(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      try {
        const storedTheme = localStorage.getItem(storageKey) as Theme | null
        return storedTheme || defaultTheme
      } catch (error) {
        console.warn("Error reading theme from localStorage:", error)
        return defaultTheme
      }
    }
    return defaultTheme
  })

  const [mounted, setMounted] = useState(false)

  // Function to set theme and save to localStorage
  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme)
      // Save to localStorage
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(storageKey, newTheme)
        } catch (error) {
          console.warn("Error saving theme to localStorage:", error)
        }
      }
    },
    [storageKey],
  )

  // Apply theme to document
  const applyTheme = React.useCallback(
    (newTheme: Theme) => {
      const root = window.document.documentElement

      // Function to remove all theme classes
      const removeThemeClasses = () => {
        root.classList.remove("light", "dark")
      }

      if (disableTransitionOnChange) {
        root.classList.add("disable-transitions")
      }

      removeThemeClasses()

      if (newTheme === "system" && enableSystem) {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        root.classList.add(systemTheme)
      } else {
        root.classList.add(newTheme)
      }

      if (disableTransitionOnChange) {
        // Force a reflow
        window.getComputedStyle(root).getPropertyValue("opacity")
        root.classList.remove("disable-transitions")
      }
    },
    [disableTransitionOnChange, enableSystem],
  )

  // Once mounted, we can safely apply the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Apply theme when it changes
  useEffect(() => {
    if (!mounted) return
    applyTheme(theme)
  }, [theme, mounted, applyTheme])

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted || !enableSystem) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, enableSystem, mounted, applyTheme])

  // Provide the theme context
  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}

