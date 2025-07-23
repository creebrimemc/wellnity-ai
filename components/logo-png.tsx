"use client"

import Image from "next/image"

interface LogoPngProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "white" | "dark"
  showText?: boolean
}

export function LogoPng({ className = "", size = "md", variant = "default", showText = true }: LogoPngProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  }

  const getTextColor = () => {
    switch (variant) {
      case "white":
        return "text-white"
      case "dark":
        return "text-gray-900"
      default:
        return "text-gray-900"
    }
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* PNG Logo */}
      <div className={sizeClasses[size]}>
        <Image
          src="/images/wellnity-logo.png"
          alt="Wellnity AI Logo"
          width={64}
          height={64}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSizeClasses[size]} ${getTextColor()} leading-tight tracking-tight`}>
            Well<span className="text-green-600">nity</span>
          </span>
          <span
            className={`font-semibold text-green-600 ${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : size === "lg" ? "text-base" : "text-lg"} leading-none tracking-wider opacity-90`}
          >
            AI
          </span>
        </div>
      )}
    </div>
  )
}
