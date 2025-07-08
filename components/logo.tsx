"use client"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "white" | "dark"
  showText?: boolean
}

export function Logo({ className = "", size = "md", variant = "default", showText = true }: LogoProps) {
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

  const getColors = () => {
    switch (variant) {
      case "white":
        return {
          primary: "#ffffff",
          secondary: "#f0f9ff",
          accent: "#22c55e",
          text: "text-white",
        }
      case "dark":
        return {
          primary: "#1f2937",
          secondary: "#374151",
          accent: "#22c55e",
          text: "text-gray-900",
        }
      default:
        return {
          primary: "#22c55e",
          secondary: "#16a34a",
          accent: "#ffffff",
          text: "text-gray-900",
        }
    }
  }

  const colors = getColors()

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Background Circle with Gradient */}
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.accent} />
              <stop offset="100%" stopColor={colors.accent} stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Main Circle Background */}
          <circle cx="32" cy="32" r="30" fill="url(#bgGradient)" stroke={colors.accent} strokeWidth="2" />

          {/* AI Brain Circuit Pattern */}
          <g stroke={colors.accent} strokeWidth="1.5" fill="none" opacity="0.6">
            {/* Circuit lines */}
            <path d="M20 24 L28 24 L32 20 L36 24 L44 24" />
            <path d="M20 32 L24 32 L28 28 L36 28 L40 32 L44 32" />
            <path d="M20 40 L28 40 L32 44 L36 40 L44 40" />

            {/* Circuit nodes */}
            <circle cx="20" cy="24" r="2" fill={colors.accent} />
            <circle cx="32" cy="20" r="2" fill={colors.accent} />
            <circle cx="44" cy="24" r="2" fill={colors.accent} />
            <circle cx="24" cy="32" r="2" fill={colors.accent} />
            <circle cx="40" cy="32" r="2" fill={colors.accent} />
            <circle cx="20" cy="40" r="2" fill={colors.accent} />
            <circle cx="32" cy="44" r="2" fill={colors.accent} />
            <circle cx="44" cy="40" r="2" fill={colors.accent} />
          </g>

          {/* Central Dumbbell Icon */}
          <g fill={colors.accent}>
            {/* Dumbbell weights */}
            <rect x="26" y="28" width="4" height="8" rx="2" />
            <rect x="34" y="28" width="4" height="8" rx="2" />

            {/* Dumbbell bar */}
            <rect x="28" y="31" width="8" height="2" rx="1" />

            {/* Weight plates */}
            <rect x="24" y="29" width="2" height="6" rx="1" />
            <rect x="38" y="29" width="2" height="6" rx="1" />
          </g>

          {/* Pulse/Energy Lines */}
          <g stroke={colors.accent} strokeWidth="2" fill="none" opacity="0.8">
            <path d="M16 32 Q20 28 24 32 T32 32" strokeLinecap="round" />
            <path d="M32 32 Q36 28 40 32 T48 32" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSizeClasses[size]} ${colors.text} leading-tight`}>Wellnity</span>
          <span
            className={`font-medium text-green-600 ${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : size === "lg" ? "text-base" : "text-lg"} leading-none`}
          >
            AI
          </span>
        </div>
      )}
    </div>
  )
}
