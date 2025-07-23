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
          gradient1: "#ffffff",
          gradient2: "#e0f2fe",
        }
      case "dark":
        return {
          primary: "#1f2937",
          secondary: "#374151",
          accent: "#22c55e",
          text: "text-gray-900",
          gradient1: "#1f2937",
          gradient2: "#374151",
        }
      default:
        return {
          primary: "#22c55e",
          secondary: "#16a34a",
          accent: "#ffffff",
          text: "text-gray-900",
          gradient1: "#22c55e",
          gradient2: "#059669",
        }
    }
  }

  const colors = getColors()

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Enhanced Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            {/* Enhanced Gradients */}
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.gradient1} />
              <stop offset="50%" stopColor={colors.secondary} />
              <stop offset="100%" stopColor={colors.gradient2} />
            </linearGradient>

            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.accent} />
              <stop offset="100%" stopColor={colors.accent} stopOpacity="0.8" />
            </linearGradient>

            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={colors.accent} stopOpacity="0.3" />
              <stop offset="70%" stopColor={colors.accent} stopOpacity="0.1" />
              <stop offset="100%" stopColor={colors.accent} stopOpacity="0" />
            </radialGradient>

            {/* Shadow Filter */}
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* Glow Effect Background */}
          <circle cx="40" cy="40" r="35" fill="url(#glowGradient)" />

          {/* Main Circular Background with Enhanced Design */}
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="url(#primaryGradient)"
            stroke={colors.accent}
            strokeWidth="2.5"
            filter="url(#dropShadow)"
          />

          {/* Inner Ring for Depth */}
          <circle cx="40" cy="40" r="28" fill="none" stroke={colors.accent} strokeWidth="1" opacity="0.3" />

          {/* AI Neural Network Pattern */}
          <g stroke={colors.accent} strokeWidth="1.8" fill="none" opacity="0.7">
            {/* Central Hub */}
            <circle cx="40" cy="40" r="3" fill={colors.accent} />

            {/* Neural Connections - Organic flowing lines */}
            <path d="M25 25 Q32 30 40 25 Q48 20 55 25" strokeLinecap="round" />
            <path d="M25 40 Q30 35 40 40 Q50 45 55 40" strokeLinecap="round" />
            <path d="M25 55 Q32 50 40 55 Q48 60 55 55" strokeLinecap="round" />

            {/* Vertical connections */}
            <path d="M40 25 Q35 32 40 40 Q45 48 40 55" strokeLinecap="round" />

            {/* Diagonal connections */}
            <path d="M30 30 Q35 35 40 40 Q45 45 50 50" strokeLinecap="round" />
            <path d="M50 30 Q45 35 40 40 Q35 45 30 50" strokeLinecap="round" />

            {/* Neural Nodes */}
            <circle cx="25" cy="25" r="2.5" fill={colors.accent} />
            <circle cx="55" cy="25" r="2.5" fill={colors.accent} />
            <circle cx="25" cy="40" r="2.5" fill={colors.accent} />
            <circle cx="55" cy="40" r="2.5" fill={colors.accent} />
            <circle cx="25" cy="55" r="2.5" fill={colors.accent} />
            <circle cx="55" cy="55" r="2.5" fill={colors.accent} />
            <circle cx="40" cy="25" r="2.5" fill={colors.accent} />
            <circle cx="40" cy="55" r="2.5" fill={colors.accent} />
            <circle cx="30" cy="30" r="2" fill={colors.accent} />
            <circle cx="50" cy="30" r="2" fill={colors.accent} />
            <circle cx="30" cy="50" r="2" fill={colors.accent} />
            <circle cx="50" cy="50" r="2" fill={colors.accent} />
          </g>

          {/* Modern Fitness Symbol - Stylized Dumbbell */}
          <g fill={colors.accent}>
            {/* Dumbbell Handle */}
            <rect x="32" y="38" width="16" height="4" rx="2" />

            {/* Left Weight - Modern hexagonal design */}
            <path d="M28 32 L32 35 L32 45 L28 48 L24 45 L24 35 Z" />

            {/* Right Weight - Modern hexagonal design */}
            <path d="M52 32 L56 35 L56 45 L52 48 L48 45 L48 35 Z" />

            {/* Weight Details for depth */}
            <rect x="26" y="36" width="2" height="8" rx="1" opacity="0.6" />
            <rect x="52" y="36" width="2" height="8" rx="1" opacity="0.6" />
          </g>

          {/* Dynamic Energy Pulses */}
          <g stroke={colors.accent} strokeWidth="2.5" fill="none" opacity="0.9" strokeLinecap="round">
            {/* Energy waves emanating from center */}
            <path d="M15 40 Q20 35 25 40 Q30 45 35 40">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M45 40 Q50 35 55 40 Q60 45 65 40">
              <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M40 15 Q35 20 40 25 Q45 30 40 35">
              <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite" />
            </path>
            <path d="M40 45 Q35 50 40 55 Q45 60 40 65">
              <animate attributeName="opacity" values="0.9;0.6;0.9" dur="2.5s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Subtle Rotating Elements for AI Feel */}
          <g opacity="0.4">
            <circle cx="40" cy="40" r="20" stroke={colors.accent} strokeWidth="0.5" fill="none" strokeDasharray="2 4">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 40 40;360 40 40"
                dur="20s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="40" cy="40" r="24" stroke={colors.accent} strokeWidth="0.5" fill="none" strokeDasharray="1 6">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="360 40 40;0 40 40"
                dur="25s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      </div>

      {/* Enhanced Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSizeClasses[size]} ${colors.text} leading-tight tracking-tight`}>
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
