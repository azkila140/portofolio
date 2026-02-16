export interface BilingualText {
    en: string
    ar: string
}

export interface MediaProject {
    id: string
    title: BilingualText
    platform: BilingualText
    description: BilingualText
    metrics: {
        label: BilingualText
        value: string
    }[]
    tags: string[]
    image: string
    link?: string
    strategy: BilingualText
    priority: number
}

export interface SoftwareProject {
    id: string
    title: BilingualText
    subtitle: BilingualText
    description: BilingualText
    metrics: {
        label: BilingualText
        value: string
    }[]
    tags: string[]
    image: string
    link?: string
    highlights: BilingualText[]
    priority: number
}

export const mediaProjects: MediaProject[] = [
    {
        id: "visionreset",
        title: { en: "VisionReset", ar: "فيجن ريسيت" },
        platform: { en: "YouTube", ar: "يوتيوب" },
        description: {
            en: "AI-powered animation channel leveraging cutting-edge tools (Runway, Midjourney, ElevenLabs) for viral content creation. Achieved 108M+ views through strategic content optimization and algorithm mastery.",
            ar: "قناة رسوم متحركة مدعومة بالذكاء الاصطناعي تستخدم أحدث الأدوات (Runway، Midjourney، ElevenLabs) لإنشاء محتوى فيروسي. حققت أكثر من 108 مليون مشاهدة من خلال تحسين المحتوى الاستراتيجي وإتقان الخوارزميات.",
        },
        metrics: [
            { label: { en: "Total Views", ar: "إجمالي المشاهدات" }, value: "108M+" },
            { label: { en: "Subscribers", ar: "المشتركون" }, value: "108K+" },
            { label: { en: "Retention", ar: "معدل المشاهدة" }, value: "Top 1%" },
        ],
        tags: ["AI Animation", "YouTube", "CapCut", "Viral Strategy"],
        image: "/images/visionreset-logo.jpg",
        link: "https://youtube.com/@visionreset",
        strategy: {
            en: "Hybrid AI workflow combining Runway for video generation, Midjourney for assets, and CapCut for final editing. Focus on high-retention storytelling with strategic hook placement.",
            ar: "سير عمل هجين بالذكاء الاصطناعي يجمع بين Runway لتوليد الفيديو، وMidjourney للأصول، وCapCut للتحرير النهائي. التركيز على سرد القصص عالي الاحتفاظ مع وضع خطافات استراتيجية.",
        },
        priority: 1,
    },
    {
        id: "cinestoriex",
        title: { en: "Cinestoriex", ar: "سينستوريكس" },
        platform: { en: "TikTok & Facebook", ar: "تيك توك وفيسبوك" },
        description: {
            en: "Viral short-form content brand specializing in cinematic storytelling. Achieved 290K+ TikTok followers and 380K+ Facebook followers in under 12 months through mastery of velocity editing and platform algorithms.",
            ar: "علامة تجارية للمحتوى القصير الفيروسي متخصصة في السرد السينمائي. حققت أكثر من 290 ألف متابع على TikTok و380 ألف متابع على Facebook في أقل من 12 شهرًا من خلال إتقان التحرير السريع وخوارزميات المنصة.",
        },
        metrics: [
            { label: { en: "TikTok Followers", ar: "متابعو تيك توك" }, value: "290K+" },
            { label: { en: "FB Followers", ar: "متابعو فيسبوك" }, value: "380K+" },
            { label: { en: "Total Views", ar: "إجمالي المشاهدات" }, value: "250M+" },
        ],
        tags: ["TikTok", "Facebook", "CapCut Pro", "Velocity Editing"],
        image: "/images/cinestoriex-logo.jpg",
        link: "https://tiktok.com/@cinestoriex",
        strategy: {
            en: "Platform-specific optimization with velocity editing techniques. Strategic posting times based on audience analytics. Cross-platform content adaptation for maximum reach.",
            ar: "تحسين خاص بالمنصة مع تقنيات التحرير السريع. أوقات نشر استراتيجية بناءً على تحليلات الجمهور. تكييف المحتوى عبر المنصات لأقصى وصول.",
        },
        priority: 1,
    },
    {
        id: "deeppast",
        title: { en: "DeepPastStories", ar: "قصص الماضي العميق" },
        platform: { en: "YouTube", ar: "يوتيوب" },
        description: {
            en: "Long-form documentary channel focusing on historical narratives. Achieved 18.6M+ views through in-depth research, cinematic production, and SEO optimization for evergreen content.",
            ar: "قناة وثائقية طويلة تركز على الروايات التاريخية. حققت أكثر من 18.6 مليون مشاهدة من خلال البحث المتعمق والإنتاج السينمائي وتحسين محركات البحث للمحتوى الدائم.",
        },
        metrics: [
            { label: { en: "Total Views", ar: "إجمالي المشاهدات" }, value: "18.6M+" },
            { label: { en: "Avg. Watch Time", ar: "متوسط وقت المشاهدة" }, value: "12+ min" },
            { label: { en: "Growth YoY", ar: "النمو السنوي" }, value: "300%" },
        ],
        tags: ["Documentary", "Long-form", "SEO", "Evergreen"],
        image: "/images/deeppast-logo.jpg",
        strategy: {
            en: "SEO-first approach with keyword research for evergreen topics. High production value with professional voiceover and cinematic editing. Focus on watch time optimization.",
            ar: "نهج يركز على SEO مع البحث عن الكلمات الرئيسية للمواضيع الدائمة. قيمة إنتاجية عالية مع تعليق صوتي احترافي وتحرير سينمائي. التركيز على تحسين وقت المشاهدة.",
        },
        priority: 1,
    },
]

export const softwareProjects: SoftwareProject[] = [
    {
        id: "dubai-estates",
        title: { en: "Dubai Prime Estates", ar: "دبي برايم استيتس" },
        subtitle: { en: "Enterprise Real Estate Platform", ar: "منصة عقارات للمؤسسات" },
        description: {
            en: "Enterprise-grade luxury real estate platform engineered as a 'Sales Machine' with Next.js 16, automated lead routing, real-time analytics, and anti-cloning security. Achieved 100/100 Lighthouse performance with 0.8s load time.",
            ar: "منصة عقارات فاخرة على مستوى المؤسسات مصممة كـ 'آلة مبيعات' مع Next.js 16، توجيه تلقائي للعملاء المحتملين، تحليلات في الوقت الفعلي، وأمان ضد الاستنساخ. حققت أداء 100/100 في Lighthouse مع وقت تحميل 0.8 ثانية.",
        },
        metrics: [
            { label: { en: "Performance", ar: "الأداء" }, value: "100/100" },
            { label: { en: "Load Time", ar: "وقت التحميل" }, value: "0.8s" },
            { label: { en: "Conversions", ar: "التحويلات" }, value: "+40%" },
        ],
        tags: ["Next.js 16", "TypeScript", "Tailwind", "Framer Motion", "SEO"],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
        link: "https://realestatelikecandy.netlify.app/",
        highlights: [
            {
                en: "Next.js 16 App Router with server-side rendering",
                ar: "Next.js 16 App Router مع العرض من جانب الخادم",
            },
            {
                en: "Anti-cloning middleware protection",
                ar: "حماية middleware ضد الاستنساخ",
            },
            {
                en: "Intelligent lead routing and CRM integration",
                ar: "توجيه ذكي للعملاء المحتملين وتكامل CRM",
            },
            {
                en: "100/100 Lighthouse score (Performance, SEO, Accessibility)",
                ar: "درجة 100/100 في Lighthouse (الأداء، SEO، إمكانية الوصول)",
            },
        ],
        priority: 1,
    },
    {
        id: "frekholito",
        title: { en: "Frekholito.live", ar: "فريكوليتو" },
        subtitle: { en: "LMS SaaS Platform", ar: "منصة تعليمية SaaS" },
        description: {
            en: "Full-stack Learning Management System built with Next.js 14 and Supabase. Scalable architecture supporting 200+ active students with real-time progress tracking, video streaming, and interactive course delivery.",
            ar: "نظام إدارة تعلم كامل مبني بـ Next.js 14 وSupabase. بنية قابلة للتوسع تدعم أكثر من 200 طالب نشط مع تتبع التقدم في الوقت الفعلي وبث الفيديو وتقديم الدورات التفاعلية.",
        },
        metrics: [
            { label: { en: "Active Students", ar: "الطلاب النشطون" }, value: "200+" },
            { label: { en: "Completion Rate", ar: "معدل الإكمال" }, value: "85%" },
            { label: { en: "Uptime", ar: "وقت التشغيل" }, value: "99.9%" },
        ],
        tags: ["Next.js", "Supabase", "TypeScript", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
        link: "https://frekholito.live",
        highlights: [
            {
                en: "Row-Level Security (RLS) for multi-tenant data isolation",
                ar: "أمان على مستوى الصف (RLS) لعزل البيانات متعددة المستأجرين",
            },
            {
                en: "Real-time progress tracking with Supabase Realtime",
                ar: "تتبع التقدم في الوقت الفعلي مع Supabase Realtime",
            },
            {
                en: "Video streaming with adaptive bitrate",
                ar: "بث الفيديو مع معدل بت تكيفي",
            },
            {
                en: "Automated email notifications and certificates",
                ar: "إشعارات بريد إلكتروني وشهادات تلقائية",
            },
        ],
        priority: 2,
    },
    {
        id: "inventory-saas",
        title: { en: "Inventory Management SaaS", ar: "نظام إدارة المخزون" },
        subtitle: { en: "Enterprise RBAC System", ar: "نظام RBAC للمؤسسات" },
        description: {
            en: "Multi-tenant inventory management system with Role-Based Access Control. Dockerized deployment on VPS with automated backups and monitoring. Supports complex permission hierarchies and audit logging.",
            ar: "نظام إدارة مخزون متعدد المستأجرين مع التحكم في الوصول القائم على الأدوار. نشر Docker على VPS مع نسخ احتياطية ومراقبة تلقائية. يدعم تسلسلات الأذونات المعقدة وتسجيل التدقيق.",
        },
        metrics: [
            { label: { en: "Active Tenants", ar: "المستأجرون النشطون" }, value: "15+" },
            { label: { en: "Transactions/Day", ar: "المعاملات/اليوم" }, value: "5,000+" },
            { label: { en: "Response Time", ar: "وقت الاستجابة" }, value: "<200ms" },
        ],
        tags: ["Docker", "RBAC", "PostgreSQL", "VPS"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
        highlights: [
            {
                en: "Fine-grained RBAC with custom permission sets",
                ar: "RBAC دقيق مع مجموعات أذونات مخصصة",
            },
            {
                en: "Docker Compose orchestration for easy deployment",
                ar: "تنسيق Docker Compose للنشر السهل",
            },
            {
                en: "Automated daily backups to S3-compatible storage",
                ar: "نسخ احتياطية يومية تلقائية إلى تخزين متوافق مع S3",
            },
            {
                en: "Comprehensive audit trail for compliance",
                ar: "مسار تدقيق شامل للامتثال",
            },
        ],
        priority: 3,
    },
]

export const stats = [
    {
        label: { en: "Total Organic Views", ar: "إجمالي المشاهدات العضوية" },
        value: "700M+",
    },
    {
        label: { en: "Content Experience", ar: "خبرة في المحتوى" },
        value: "15+ Years",
    },
    {
        label: { en: "Students Trained", ar: "طلاب مدربون" },
        value: "200+",
    },
]

export const personalInfo = {
    name: { en: "El Mehdi Noreddine", ar: "المهدي نور الدين" },
    title: {
        en: "Digital Growth Director & Content Strategist",
        ar: "مدير النمو الرقمي واستراتيجي المحتوى",
    },
    tagline: {
        en: "I Build Digital Empires. 700M+ Organic Views.",
        ar: "أبني إمبراطوريات رقمية. أكثر من 700 مليون مشاهدة.",
    },
    bio: {
        en: "Senior Full-Stack Developer with 15+ years building enterprise-grade applications (Next.js, TypeScript, Supabase). I also engineer viral content strategies that generated 700M+ views. Unique dual expertise: technical architecture + growth hacking.",
        ar: "مطور Full-Stack أول مع أكثر من 15 عامًا في بناء تطبيقات على مستوى المؤسسات (Next.js، TypeScript، Supabase). أقوم أيضًا بهندسة استراتيجيات محتوى فيروسي حققت أكثر من 700 مليون مشاهدة. خبرة مزدوجة فريدة: البنية المعمارية التقنية + اختراق النمو.",
    },
    gccContext: {
        ar: "خبرة في بناء منصات عالية الأداء للأسواق الراقية في دول مجلس التعاون الخليجي. فهم عميق للمتطلبات التقنية والثقافية للمنطقة.",
    },
    location: { en: "Agadir, Morocco", ar: "أكادير، المغرب" },
    relocation: {
        en: "Available for Relocation (Canada Visa Holder)",
        ar: "متاح للانتقال (حامل تأشيرة كندا)",
    },
    email: "sasibora150@gmail.com",
    phone: "+212 708 060 440",
    social: {
        youtube: "https://youtube.com/@visionreset",
        tiktok: "https://tiktok.com/@cinestoriex",
        facebook: "https://facebook.com/cinestoriex",
        linkedin: "https://www.linkedin.com/in/el-mehdi-noreddine-055a85230/",
    },
}
