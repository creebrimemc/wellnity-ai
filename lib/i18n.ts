export type Language = "en" | "tr"

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      pricing: "Pricing",
      download: "Download",
      login: "Login",
      getStarted: "Get Started",
    },
    // Home Page
    home: {
      badge: "AI-Powered Fitness Revolution",
      title: "Your Personal",
      titleHighlight: "AI Fitness",
      titleEnd: "Coach",
      subtitle:
        "Transform your fitness journey with personalized AI coaching, smart workout plans, and real-time form correction.",
      cta: "Start Free Forever",
      downloadApp: "Download App",
      rating: "4.9/5 from 10,000+ users",
      whyChoose: "Why Choose Wellnity AI?",
      whySubtitle: "Experience the future of fitness with our cutting-edge AI technology",
      features: {
        aiTrainer: {
          title: "AI Personal Trainer",
          description: "Get personalized workout plans adapted to your fitness level, goals, and preferences",
        },
        formCorrection: {
          title: "Smart Form Correction",
          description: "Real-time AI analysis ensures perfect form and prevents injuries during workouts",
        },
        community: {
          title: "Community Support",
          description: "Connect with like-minded fitness enthusiasts and share your progress",
        },
      },
      stats: {
        activeUsers: "Active Users",
        completedWorkouts: "Completed Workouts",
        userSatisfaction: "User Satisfaction",
        aiSupport: "AI Support",
      },
      ctaSection: {
        title: "Ready to Transform Your Fitness Journey?",
        subtitle: "Join thousands of users who have achieved their fitness goals with Wellnity AI",
        cta: "Start Free Forever",
        learnMore: "Learn More",
      },
    },
    // About Page
    about: {
      badge: "About Wellnity AI",
      title: "Revolutionizing Fitness with",
      titleHighlight: "Artificial Intelligence",
      subtitle:
        "We believe everyone deserves access to personalized, intelligent fitness coaching. Our mission is to make professional-grade fitness guidance accessible to everyone, everywhere, anytime.",
      story: {
        title: "Our Story",
        content: [
          "Founded in 2023 by a team of fitness enthusiasts and AI researchers, Wellnity AI was born from a simple observation: traditional fitness apps were one-size-fits-all, but every body is unique.",
          "To create a truly personalized experience, we combined cutting-edge artificial intelligence with decades of fitness expertise. Our AI doesn't just count reps - it understands your form, adapts to your progress, and evolves with your fitness journey.",
          "Today, we're proud to serve over 50,000 users worldwide, helping them achieve their fitness goals with the power of AI.",
        ],
      },
      values: {
        title: "Our Values",
        subtitle: "The principles that guide everything we do",
        innovation: {
          title: "Innovation",
          description: "We constantly push the boundaries of what's possible with AI and fitness technology",
        },
        inclusion: {
          title: "Inclusion",
          description: "Fitness is for everyone, regardless of age, ability, or experience level",
        },
        privacy: {
          title: "Privacy",
          description: "Your health data is sacred. We use enterprise-grade security to protect your information",
        },
        results: {
          title: "Results",
          description: "We're obsessed with helping you achieve real, measurable fitness outcomes",
        },
        simplicity: {
          title: "Simplicity",
          description: "Complex AI technology should feel simple and intuitive to use",
        },
        excellence: {
          title: "Excellence",
          description: "We strive for excellence in every aspect of our product and service",
        },
      },
      team: {
        title: "Meet Our Team",
        subtitle: "The experts behind Wellnity AI",
        members: {
          sarah: {
            name: "Sarah Chen",
            role: "CEO & Co-Founder",
            bio: "Former Google AI researcher with 10+ years of experience in machine learning and fitness technology",
          },
          marcus: {
            name: "Marcus Rodriguez",
            role: "CTO & Co-Founder",
            bio: "Certified personal trainer and software engineer who combines fitness expertise with technology",
          },
          emily: {
            name: "Dr. Emily Watson",
            role: "Head of Sports Science",
            bio: "PhD in Exercise Physiology, former Olympic team consultant with 15+ years of experience",
          },
        },
      },
    },
    // Pricing Page
    pricing: {
      badge: "Simple Pricing",
      title: "Choose Your",
      titleHighlight: "Fitness Plan",
      subtitle:
        "Start with a free trial, then choose the plan that fits your fitness goals. All plans include our AI personal trainer and form correction technology.",
      plans: {
        free: {
          name: "Free Forever",
          description: "Always free, no time limit",
          price: "Free",
          period: "Forever",
          cta: "Start Free",
          features: ["Basic AI workout plans", "Form correction (5 sessions)", "Progress tracking", "Community access"],
          notIncluded: ["Advanced AI coaching", "Nutrition planning"],
        },
        pro: {
          name: "Pro",
          description: "For serious fitness enthusiasts",
          price: "$19",
          period: "/month",
          cta: "Get Started",
          popular: "Most Popular",
          features: [
            "Unlimited AI workout plans",
            "Unlimited form correction",
            "Advanced progress analytics",
            "Nutrition planning",
            "Priority support",
            "Offline workout downloads",
          ],
        },
        elite: {
          name: "Elite",
          description: "For professional athletes",
          price: "$49",
          period: "/month",
          cta: "Get Started",
          features: [
            "Everything in Pro",
            "One-on-one AI coaching sessions",
            "Custom meal planning",
            "Recovery optimization",
            "Performance analytics",
            "24/7 priority support",
          ],
        },
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: {
          cancel: {
            question: "Can I cancel anytime?",
            answer:
              "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
          },
          reallyFree: {
            question: "Is the free plan really free forever?",
            answer:
              "Yes! Our free plan is completely free with no time limit. You can upgrade to Pro or Elite anytime to unlock additional features.",
          },
          refund: {
            question: "Do you offer refunds?",
            answer:
              "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund.",
          },
          changePlans: {
            question: "Can I change plans later?",
            answer: "You can upgrade or downgrade your plan anytime from your account settings.",
          },
        },
      },
    },
    // Download Page
    download: {
      badge: "Download Now",
      title: "Download Wellnity AI to",
      titleHighlight: "Your Phone",
      subtitle:
        "Download the Wellnity AI app and start your personalized fitness journey today. Available on iOS and Android.",
      appStore: "App Store",
      googlePlay: "Google Play",
      rating: "4.9/5 rating with 10,000+ downloads",
      features: {
        title: "Everything You Need in One App",
        subtitle: "Experience the full power of AI-powered fitness coaching in your pocket",
        aiTrainer: {
          title: "AI Personal Trainer",
          description: "Get real-time coaching and form correction during your workouts",
        },
        customPlans: {
          title: "Custom Workout Plans",
          description: "Personalized routines that adapt to your progress and preferences",
        },
        progress: {
          title: "Progress Tracking",
          description: "Detailed analytics and insights to track your fitness journey",
        },
      },
      screenshots: {
        title: "See It in Action",
        subtitle: "Take a look at the Wellnity AI app interface",
        workout: {
          title: "AI Workout Coach",
          description: "Real-time form analysis and coaching during your workouts",
        },
        progress: {
          title: "Progress Dashboard",
          description: "Track your development with detailed analytics and insights",
        },
        community: {
          title: "Community Hub",
          description: "Connect with other users and share your fitness journey",
        },
      },
      requirements: {
        title: "System Requirements",
        subtitle: "Make sure your device is compatible",
        ios: {
          title: "iOS Requirements",
          items: [
            "iOS 14.0 or later",
            "iPhone 8 or newer",
            "Minimum 2GB RAM",
            "500MB free storage",
            "Camera access for form analysis",
          ],
        },
        android: {
          title: "Android Requirements",
          items: [
            "Android 8.0 (API level 26) or later",
            "Minimum 3GB RAM",
            "500MB free storage",
            "Camera access for form analysis",
            "OpenGL ES 3.0 support",
          ],
        },
      },
      cta: {
        title: "Ready to Start Your Fitness Journey?",
        subtitle: "Download Wellnity AI now and get your first week free",
      },
    },
    // Auth Pages
    auth: {
      login: {
        title: "Login",
        subtitle: "Sign in to your account",
        email: "Email Address",
        emailPlaceholder: "example@email.com",
        password: "Password",
        passwordPlaceholder: "Enter your password",
        forgotPassword: "Forgot password?",
        loginButton: "Sign In",
        loggingIn: "Signing in...",
        noAccount: "Don't have an account?",
        signUp: "Sign up",
        invalidCredentials: "Invalid email or password",
        loginError: "An error occurred during login",
      },
      signup: {
        badge: "Start Your Journey",
        title: "Join Wellnity AI Today",
        subtitle: "Start your free forever plan today. No credit card required.",
        firstName: "First Name",
        lastName: "Last Name",
        username: "Username",
        usernamePlaceholder: "username",
        email: "Email Address",
        emailPlaceholder: "example@email.com",
        password: "Password",
        passwordPlaceholder: "Create a strong password",
        confirmPassword: "Confirm Password",
        confirmPasswordPlaceholder: "Re-enter your password",
        fitnessLevel: "Current Fitness Level",
        fitnessLevelPlaceholder: "Select your fitness level",
        goals: "Primary Fitness Goal",
        goalsPlaceholder: "Select your primary goal",
        fitnessLevels: {
          beginner: "Beginner",
          intermediate: "Intermediate",
          advanced: "Advanced",
          athlete: "Athlete",
        },
        goalOptions: {
          "weight-loss": "Weight Loss",
          "muscle-gain": "Muscle Gain",
          endurance: "Build Endurance",
          strength: "Strength Training",
          general: "General Fitness",
        },
        passwordRequirements: "Must contain at least 8 characters, uppercase, lowercase, number and special character",
        agreeToTerms: "I agree to the",
        termsOfService: "Terms of Service",
        and: "and",
        privacyPolicy: "Privacy Policy",
        createAccount: "Start Free",
        creatingAccount: "Creating account...",
        alreadyHaveAccount: "Already have an account?",
        signIn: "Sign in",
        continueWith: "Or continue with",
        google: "Google",
        apple: "Apple",
        success: {
          title: "Registration Successful!",
          message: "Your account has been created successfully. Redirecting to login page...",
        },
        benefits: {
          title: "What's included in your free account:",
          items: [
            "Forever free plan",
            "Unlimited AI coaching sessions",
            "Access to all workout programs",
            "Progress tracking and analytics",
            "Community access",
          ],
        },
        features: {
          aiCoaching: {
            title: "Personalized AI Coaching",
            description: "Get workout plans tailored specifically to your fitness level and goals",
          },
          formCorrection: {
            title: "Real-time Form Correction",
            description: "AI-powered form analysis to prevent injuries and maximize results",
          },
          progressTracking: {
            title: "Progress Tracking",
            description: "Advanced analytics to track your fitness journey and celebrate milestones",
          },
          communitySupport: {
            title: "Community Support",
            description: "Connect with like-minded fitness enthusiasts and share your progress",
          },
        },
      },
      forgotPassword: {
        title: "Forgot Password",
        subtitle: "Enter your email address and we'll send you a password reset link",
        successSubtitle: "Password reset link sent",
        email: "Email Address",
        emailPlaceholder: "example@email.com",
        sendResetLink: "Send Password Reset Link",
        sending: "Sending...",
        backToLogin: "Back to login",
        success: {
          title: "Email Sent",
          message:
            "If this email address is registered in our system, a password reset link has been sent. Please check your email.",
        },
        tryAgain: "Try Again",
      },
    },
    // Profile Page
    profile: {
      title: "My Profile",
      subtitle: "Manage your account information",
      logout: "Logout",
      tabs: {
        profile: "Profile Information",
        security: "Security",
      },
      overview: {
        title: "Profile Overview",
        fullName: "Full Name",
        email: "Email",
        memberSince: "Member Since",
        fitnessLevel: "Fitness Level",
        goal: "Goal",
        lastLogin: "Last Login",
        verified: "Verified",
        unverified: "Unverified",
      },
      edit: {
        title: "Edit Profile",
        subtitle: "Update your personal information",
        firstName: "First Name",
        lastName: "Last Name",
        fitnessLevel: "Fitness Level",
        goals: "Goal",
        updateProfile: "Update Profile",
        updating: "Updating...",
        success: "Profile updated successfully",
      },
      security: {
        title: "Security Settings",
        subtitle: "Manage your account security",
        password: {
          title: "Password",
          lastUpdated: "Last updated: Unknown",
          changePassword: "Change Password",
        },
        changePasswordForm: {
          title: "Change Password",
          currentPassword: "Current Password",
          newPassword: "New Password",
          confirmPassword: "Confirm New Password",
          updatePassword: "Update Password",
          cancel: "Cancel",
          success: "Password updated successfully",
        },
        emailVerification: {
          title: "Email Verification",
          verified: "Your email address is verified",
          unverified: "Your email address is not verified",
          sendVerification: "Send Verification Email",
        },
        deleteAccount: {
          title: "Delete Account",
          description: "Permanently delete your account. This action cannot be undone.",
          button: "Delete Account",
        },
      },
      fitnessLevels: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
        athlete: "Athlete",
      },
      goals: {
        "weight-loss": "Weight Loss",
        "muscle-gain": "Muscle Gain",
        endurance: "Endurance",
        strength: "Strength Training",
        general: "General Fitness",
      },
    },
    // Support
    support: {
      title: "Need Help?",
      subtitle: "We're here to help you on your fitness journey",
      onlineNow: "Online Now",
      avgResponse: "Average response time: 2 minutes",
      liveChat: {
        title: "Live Chat",
        description: "Chat with our support team",
      },
      emailSupport: {
        title: "Email Support",
        description: "support@wellnityai.com",
      },
      phoneSupport: {
        title: "Phone Support",
        description: "+1 (555) 123-4567",
      },
      helpCenter: {
        title: "Help Center",
        description: "Browse FAQs and guides",
      },
      emergency: "Need urgent help? Call us directly:",
    },
    // Footer
    footer: {
      description: "Your AI-powered fitness companion for a healthier, stronger you.",
      product: "Product",
      features: "Features",
      pricing: "Pricing",
      downloadApp: "Download App",
      api: "API",
      company: "Company",
      about: "About",
      careers: "Careers",
      blog: "Blog",
      press: "Press",
      support: "Support",
      helpCenter: "Help Center",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookies",
      allRightsReserved: "All rights reserved.",
    },
    // Common
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      confirm: "Confirm",
      back: "Back",
      next: "Next",
      previous: "Previous",
      close: "Close",
      open: "Open",
    },
  },
  tr: {
    // Navigation
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      pricing: "Fiyatlandırma",
      download: "İndir",
      login: "Giriş Yap",
      getStarted: "Başlayın",
    },
    // Home Page
    home: {
      badge: "AI Destekli Fitness Devrimi",
      title: "Kişisel",
      titleHighlight: "AI Fitness",
      titleEnd: "Koçunuz",
      subtitle:
        "Kişiselleştirilmiş AI koçluğu, akıllı antrenman planları ve gerçek zamanlı form düzeltmesi ile fitness yolculuğunuzu dönüştürün.",
      cta: "Sonsuza Kadar Ücretsiz Başlayın",
      downloadApp: "Uygulamayı İndir",
      rating: "10.000+ kullanıcıdan 4.9/5",
      whyChoose: "Neden Wellnity AI'ı Seçmelisiniz?",
      whySubtitle: "Son teknoloji AI teknolojimizle fitness'ın geleceğini deneyimleyin",
      features: {
        aiTrainer: {
          title: "AI Kişisel Antrenör",
          description:
            "Fitness seviyenize, hedeflerinize ve tercihlerinize uyarlanmış kişiselleştirilmiş antrenman planları alın",
        },
        formCorrection: {
          title: "Akıllı Form Düzeltmesi",
          description: "Gerçek zamanlı AI analizi mükemmel form sağlar ve antrenmanlar sırasında yaralanmaları önler",
        },
        community: {
          title: "Topluluk Desteği",
          description: "Benzer düşünen fitness meraklılarıyla bağlantı kurun ve ilerlemenizi paylaşın",
        },
      },
      stats: {
        activeUsers: "Aktif Kullanıcı",
        completedWorkouts: "Tamamlanan Antrenman",
        userSatisfaction: "Kullanıcı Memnuniyeti",
        aiSupport: "AI Desteği",
      },
      ctaSection: {
        title: "Fitness Yolculuğunuzu Dönüştürmeye Hazır mısınız?",
        subtitle: "Wellnity AI ile fitness hedeflerine ulaşan binlerce kullanıcıya katılın",
        cta: "Sonsuza Kadar Ücretsiz Başlayın",
        learnMore: "Daha Fazla Bilgi",
      },
    },
    // About Page
    about: {
      badge: "Wellnity AI Hakkında",
      title: "Fitness'ı",
      titleHighlight: "Yapay Zeka",
      titleEnd: "ile Devrimleştiriyoruz",
      subtitle:
        "Herkesin kişiselleştirilmiş, akıllı fitness koçluğuna erişimi olması gerektiğine inanıyoruz. Misyonumuz, profesyonel kalitede fitness rehberliğini herkese, her yerde, her zaman erişilebilir kılmaktır.",
      story: {
        title: "Hikayemiz",
        content: [
          "2023 yılında fitness meraklıları ve AI araştırmacılarından oluşan bir ekip tarafından kurulan Wellnity AI, basit bir gözlemden doğdu: geleneksel fitness uygulamaları herkese uyan tek boyutluydu, ancak her vücut benzersizdir.",
          "Gerçekten kişiselleştirilmiş bir deneyim yaratmak için son teknoloji yapay zekayı onlarca yıllık fitness uzmanlığıyla birleştirdik. AI'ımız sadece tekrar saymıyor - formunuzu anlıyor, ilerlemenize uyum sağlıyor ve fitness yolculuğunuzla birlikte gelişiyor.",
          "Bugün, dünya çapında 50.000'den fazla kullanıcıya hizmet vermekten gurur duyuyoruz ve onların AI'ın gücüyle fitness hedeflerine ulaşmalarına yardımcı oluyoruz.",
        ],
      },
      values: {
        title: "Değerlerimiz",
        subtitle: "Yaptığımız her şeye rehberlik eden ilkeler",
        innovation: {
          title: "İnovasyon",
          description: "AI ve fitness teknolojisiyle mümkün olanın sınırlarını sürekli zorluyoruz",
        },
        inclusion: {
          title: "Kapsayıcılık",
          description: "Fitness, yaş, yetenek veya deneyim seviyesi fark etmeksizin herkes içindir",
        },
        privacy: {
          title: "Gizlilik",
          description:
            "Sağlık verileriniz kutsaldır. Bilgilerinizi korumak için kurumsal düzeyde güvenlik kullanıyoruz",
        },
        results: {
          title: "Sonuçlar",
          description: "Gerçek, ölçülebilir fitness sonuçları elde etmenize yardımcı olmaya takıntılıyız",
        },
        simplicity: {
          title: "Sadelik",
          description: "Karmaşık AI teknolojisi basit ve sezgisel kullanım hissi vermelidir",
        },
        excellence: {
          title: "Mükemmellik",
          description: "Ürünümüzün ve hizmetimizin her alanında mükemmellik için çabalıyoruz",
        },
      },
      team: {
        title: "Ekibimizle Tanışın",
        subtitle: "Wellnity AI'ın arkasındaki uzmanlar",
        members: {
          sarah: {
            name: "Sarah Chen",
            role: "CEO ve Kurucu Ortak",
            bio: "Makine öğrenmesi ve fitness teknolojisinde 10+ yıl deneyime sahip eski Google AI araştırmacısı",
          },
          marcus: {
            name: "Marcus Rodriguez",
            role: "CTO ve Kurucu Ortak",
            bio: "Fitness uzmanlığını teknoloji ile birleştiren sertifikalı kişisel antrenör ve yazılım mühendisi",
          },
          emily: {
            name: "Dr. Emily Watson",
            role: "Spor Bilimleri Başkanı",
            bio: "Egzersiz Fizyolojisi doktoru, 15+ yıl deneyime sahip eski Olimpik takım danışmanı",
          },
        },
      },
    },
    // Pricing Page
    pricing: {
      badge: "Basit Fiyatlandırma",
      title: "",
      titleHighlight: "Fitness Planınızı",
      titleEnd: "Seçin",
      subtitle:
        "Ücretsiz deneme ile başlayın, ardından fitness hedeflerinize uygun planı seçin. Tüm planlar AI kişisel antrenörümüzü ve form düzeltme teknolojimizi içerir.",
      plans: {
        free: {
          name: "Sonsuza Kadar Ücretsiz",
          description: "Her zaman ücretsiz, zaman sınırı yok",
          price: "Ücretsiz",
          period: "Sonsuza Kadar",
          cta: "Ücretsiz Başlayın",
          features: ["Temel AI antrenman planları", "Form düzeltmesi (5 seans)", "İlerleme takibi", "Topluluk erişimi"],
          notIncluded: ["Gelişmiş AI koçluğu", "Beslenme planlaması"],
        },
        pro: {
          name: "Pro",
          description: "Ciddi fitness meraklıları için",
          price: "₺199",
          period: "/ay",
          cta: "Başlayın",
          popular: "En Popüler",
          features: [
            "Sınırsız AI antrenman planları",
            "Sınırsız form düzeltmesi",
            "Gelişmiş ilerleme analitiği",
            "Beslenme planlaması",
            "Öncelikli destek",
            "Çevrimdışı antrenman indirmeleri",
          ],
        },
        elite: {
          name: "Elite",
          description: "Profesyonel sporcular için",
          price: "₺499",
          period: "/ay",
          cta: "Başlayın",
          features: [
            "Pro'daki her şey",
            "Bire bir AI koçluk seansları",
            "Özel yemek planlaması",
            "Toparlanma optimizasyonu",
            "Performans analitiği",
            "7/24 öncelikli destek",
          ],
        },
      },
      faq: {
        title: "Sıkça Sorulan Sorular",
        questions: {
          cancel: {
            question: "İstediğim zaman iptal edebilir miyim?",
            answer:
              "Evet, aboneliğinizi istediğiniz zaman iptal edebilirsiniz. Uzun vadeli sözleşme veya iptal ücreti yoktur.",
          },
          reallyFree: {
            question: "Ücretsiz plan gerçekten sonsuza kadar ücretsiz mi?",
            answer:
              "Evet! Ücretsiz planımız zaman sınırı olmaksızın tamamen ücretsizdir. Ek özelliklerin kilidini açmak için istediğiniz zaman Pro veya Elite'e yükseltebilirsiniz.",
          },
          refund: {
            question: "Para iadesi sunuyor musunuz?",
            answer:
              "Tüm ücretli planlar için 30 günlük para iade garantisi sunuyoruz. Memnun kalmazsanız, tam iade için destek ekibimizle iletişime geçin.",
          },
          changePlans: {
            question: "Planları daha sonra değiştirebilir miyim?",
            answer: "Hesap ayarlarınızdan istediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz.",
          },
        },
      },
    },
    // Download Page
    download: {
      badge: "Şimdi İndirin",
      title: "Wellnity AI'ı",
      titleHighlight: "Telefonunuza İndirin",
      subtitle:
        "Wellnity AI uygulamasını indirin ve bugün kişiselleştirilmiş fitness yolculuğunuzu başlatın. iOS ve Android'de mevcut.",
      appStore: "App Store",
      googlePlay: "Google Play",
      rating: "10.000+ indirme ile 4.9/5 puan",
      features: {
        title: "İhtiyacınız Olan Her Şey Tek Uygulamada",
        subtitle: "AI destekli fitness koçluğunun tüm gücünü cebinizde deneyimleyin",
        aiTrainer: {
          title: "AI Kişisel Antrenör",
          description: "Antrenmanlarınız sırasında gerçek zamanlı koçluk ve form düzeltmesi alın",
        },
        customPlans: {
          title: "Özel Antrenman Planları",
          description: "İlerlemenize ve tercihlerinize uyum sağlayan kişiselleştirilmiş rutinler",
        },
        progress: {
          title: "İlerleme Takibi",
          description: "Fitness yolculuğunuzu izlemek için detaylı analitik ve içgörüler",
        },
      },
      screenshots: {
        title: "Aksiyonda Görün",
        subtitle: "Wellnity AI uygulama arayüzüne bir göz atın",
        workout: {
          title: "AI Antrenman Koçu",
          description: "Antrenmanlarınız sırasında gerçek zamanlı form analizi ve koçluk",
        },
        progress: {
          title: "İlerleme Panosu",
          description: "Detaylı analitik ve içgörülerle gelişiminizi takip edin",
        },
        community: {
          title: "Topluluk Merkezi",
          description: "Diğer kullanıcılarla bağlantı kurun ve fitness yolculuğunuzu paylaşın",
        },
      },
      requirements: {
        title: "Sistem Gereksinimleri",
        subtitle: "Cihazınızın uyumlu olduğundan emin olun",
        ios: {
          title: "iOS Gereksinimleri",
          items: [
            "iOS 14.0 veya üzeri",
            "iPhone 8 veya daha yeni",
            "Minimum 2GB RAM",
            "500MB boş depolama",
            "Form analizi için kamera erişimi",
          ],
        },
        android: {
          title: "Android Gereksinimleri",
          items: [
            "Android 8.0 (API seviye 26) veya üzeri",
            "Minimum 3GB RAM",
            "500MB boş depolama",
            "Form analizi için kamera erişimi",
            "OpenGL ES 3.0 desteği",
          ],
        },
      },
      cta: {
        title: "Fitness Yolculuğunuzu Başlatmaya Hazır mısınız?",
        subtitle: "Wellnity AI'ı şimdi indirin ve ilk haftanızı ücretsiz alın",
      },
    },
    // Auth Pages
    auth: {
      login: {
        title: "Giriş Yap",
        subtitle: "Hesabınıza giriş yapın",
        email: "E-posta Adresi",
        emailPlaceholder: "ornek@email.com",
        password: "Şifre",
        passwordPlaceholder: "Şifrenizi girin",
        forgotPassword: "Şifremi unuttum",
        loginButton: "Giriş Yap",
        loggingIn: "Giriş yapılıyor...",
        noAccount: "Hesabınız yok mu?",
        signUp: "Kayıt olun",
        invalidCredentials: "Geçersiz e-posta veya şifre",
        loginError: "Giriş yapılırken bir hata oluştu",
      },
      signup: {
        badge: "Yolculuğunuzu Başlatın",
        title: "Bugün Wellnity AI'a Katılın",
        subtitle: "Bugün sonsuza kadar ücretsiz planınızı başlatın. Kredi kartı gerekmez.",
        firstName: "Ad",
        lastName: "Soyad",
        username: "Kullanıcı Adı",
        usernamePlaceholder: "kullanici_adi",
        email: "E-posta Adresi",
        emailPlaceholder: "ornek@email.com",
        password: "Şifre",
        passwordPlaceholder: "Güçlü bir şifre oluşturun",
        confirmPassword: "Şifre Onayı",
        confirmPasswordPlaceholder: "Şifrenizi tekrar girin",
        fitnessLevel: "Mevcut Fitness Seviyesi",
        fitnessLevelPlaceholder: "Fitness seviyenizi seçin",
        goals: "Birincil Fitness Hedefi",
        goalsPlaceholder: "Birincil hedefinizi seçin",
        fitnessLevels: {
          beginner: "Başlangıç",
          intermediate: "Orta",
          advanced: "İleri",
          athlete: "Atlet",
        },
        goalOptions: {
          "weight-loss": "Kilo Verme",
          "muscle-gain": "Kas Kazanımı",
          endurance: "Dayanıklılığı Artırma",
          strength: "Güç Geliştirme",
          general: "Genel Fitness",
        },
        passwordRequirements: "En az 8 karakter, büyük harf, küçük harf, rakam ve özel karakter içermelidir",
        agreeToTerms: "Kabul ediyorum",
        termsOfService: "Hizmet Şartları",
        and: "ve",
        privacyPolicy: "Gizlilik Politikası",
        createAccount: "Ücretsiz Başlayın",
        creatingAccount: "Hesap oluşturuluyor...",
        alreadyHaveAccount: "Zaten hesabınız var mı?",
        signIn: "Giriş yapın",
        continueWith: "Veya şununla devam edin",
        google: "Google",
        apple: "Apple",
        success: {
          title: "Kayıt Başarılı!",
          message: "Hesabınız başarıyla oluşturuldu. Giriş sayfasına yönlendiriliyorsunuz...",
        },
        benefits: {
          title: "Ücretsiz hesabınızda neler var:",
          items: [
            "Sonsuza kadar ücretsiz plan",
            "Sınırsız AI koçluk seansları",
            "Tüm antrenman programlarına erişim",
            "İlerleme takibi ve analitik",
            "Topluluk erişimi",
          ],
        },
        features: {
          aiCoaching: {
            title: "Kişiselleştirilmiş AI Koçluğu",
            description: "Fitness seviyenize ve hedeflerinize özel olarak uyarlanmış antrenman planları alın",
          },
          formCorrection: {
            title: "Gerçek Zamanlı Form Düzeltmesi",
            description: "Yaralanmaları önlemek ve sonuçları maksimize etmek için AI destekli form analizi",
          },
          progressTracking: {
            title: "İlerleme Takibi",
            description: "Fitness yolculuğunuzu izlemek ve kilometre taşlarını kutlamak için gelişmiş analitik",
          },
          communitySupport: {
            title: "Topluluk Desteği",
            description: "Benzer düşünen fitness meraklılarıyla bağlantı kurun ve ilerlemenizi paylaşın",
          },
        },
      },
      forgotPassword: {
        title: "Şifremi Unuttum",
        subtitle: "E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim",
        successSubtitle: "Şifre sıfırlama bağlantısı gönderildi",
        email: "E-posta Adresi",
        emailPlaceholder: "ornek@email.com",
        sendResetLink: "Şifre Sıfırlama Bağlantısı Gönder",
        sending: "Gönderiliyor...",
        backToLogin: "Giriş sayfasına dön",
        success: {
          title: "E-posta Gönderildi",
          message:
            "Eğer bu e-posta adresi sistemimizde kayıtlıysa, şifre sıfırlama bağlantısı gönderilmiştir. E-posta kutunuzu kontrol edin.",
        },
        tryAgain: "Tekrar Dene",
      },
    },
    // Profile Page
    profile: {
      title: "Profilim",
      subtitle: "Hesap bilgilerinizi yönetin",
      logout: "Çıkış Yap",
      tabs: {
        profile: "Profil Bilgileri",
        security: "Güvenlik",
      },
      overview: {
        title: "Profil Özeti",
        fullName: "Ad Soyad",
        email: "E-posta",
        memberSince: "Üyelik Tarihi",
        fitnessLevel: "Fitness Seviyesi",
        goal: "Hedef",
        lastLogin: "Son Giriş",
        verified: "Doğrulandı",
        unverified: "Doğrulanmadı",
      },
      edit: {
        title: "Profil Düzenle",
        subtitle: "Kişisel bilgilerinizi güncelleyin",
        firstName: "Ad",
        lastName: "Soyad",
        fitnessLevel: "Fitness Seviyesi",
        goals: "Hedef",
        updateProfile: "Profili Güncelle",
        updating: "Güncelleniyor...",
        success: "Profil başarıyla güncellendi",
      },
      security: {
        title: "Güvenlik Ayarları",
        subtitle: "Hesap güvenliğinizi yönetin",
        password: {
          title: "Şifre",
          lastUpdated: "Son güncelleme: Bilinmiyor",
          changePassword: "Şifre Değiştir",
        },
        changePasswordForm: {
          title: "Şifre Değiştir",
          currentPassword: "Mevcut Şifre",
          newPassword: "Yeni Şifre",
          confirmPassword: "Yeni Şifre Onayı",
          updatePassword: "Şifreyi Güncelle",
          cancel: "İptal",
          success: "Şifre başarıyla güncellendi",
        },
        emailVerification: {
          title: "E-posta Doğrulama",
          verified: "E-posta adresiniz doğrulandı",
          unverified: "E-posta adresiniz doğrulanmadı",
          sendVerification: "Doğrulama E-postası Gönder",
        },
        deleteAccount: {
          title: "Hesabı Sil",
          description: "Hesabınızı kalıcı olarak silin. Bu işlem geri alınamaz.",
          button: "Hesabı Sil",
        },
      },
      fitnessLevels: {
        beginner: "Başlangıç",
        intermediate: "Orta",
        advanced: "İleri",
        athlete: "Atlet",
      },
      goals: {
        "weight-loss": "Kilo Verme",
        "muscle-gain": "Kas Kazanımı",
        endurance: "Dayanıklılık",
        strength: "Güç Geliştirme",
        general: "Genel Fitness",
      },
    },
    // Support
    support: {
      title: "Yardıma İhtiyacınız Var?",
      subtitle: "Fitness yolculuğunuzda size yardımcı olmak için buradayız",
      onlineNow: "Şimdi Çevrimiçi",
      avgResponse: "Ortalama yanıt süresi: 2 dakika",
      liveChat: {
        title: "Canlı Sohbet",
        description: "Destek ekibimizle sohbet edin",
      },
      emailSupport: {
        title: "E-posta Desteği",
        description: "support@wellnityai.com",
      },
      phoneSupport: {
        title: "Telefon Desteği",
        description: "+1 (555) 123-4567",
      },
      helpCenter: {
        title: "Yardım Merkezi",
        description: "SSS ve kılavuzlara göz atın",
      },
      emergency: "Acil yardıma mı ihtiyacınız var? Bizi doğrudan arayın:",
    },
    // Footer
    footer: {
      description: "Daha sağlıklı ve güçlü bir sen için AI destekli fitness arkadaşın.",
      product: "Ürün",
      features: "Özellikler",
      pricing: "Fiyatlandırma",
      downloadApp: "Uygulamayı İndir",
      api: "API",
      company: "Şirket",
      about: "Hakkımızda",
      careers: "Kariyer",
      blog: "Blog",
      press: "Basın",
      support: "Destek",
      helpCenter: "Yardım Merkezi",
      contact: "İletişim",
      privacy: "Gizlilik Politikası",
      terms: "Hizmet Şartları",
      cookies: "Çerezler",
      allRightsReserved: "Tüm hakları saklıdır.",
    },
    // Common
    common: {
      loading: "Yükleniyor...",
      error: "Hata",
      success: "Başarılı",
      cancel: "İptal",
      save: "Kaydet",
      edit: "Düzenle",
      delete: "Sil",
      confirm: "Onayla",
      back: "Geri",
      next: "İleri",
      previous: "Önceki",
      close: "Kapat",
      open: "Aç",
    },
  },
}

export function useTranslation(lang: Language = "tr") {
  return translations[lang]
}
