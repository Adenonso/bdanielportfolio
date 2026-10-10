export type Category = "Mobile Apps" | "Technical Writing" | "Research" | "Video";
export const categories: Array<"All" | Category> = ["All", "Mobile Apps", "Technical Writing", "Research", "Video"];

export interface Project {
  slug: string;
  title: string;
  type: string;
  meta: string;
  category: Category;
  image?: string;
  tone: string;
  to: string;
}

// Drop matching images into /public/images — gradients show until then.
export const projects: Project[] = [
  { slug: "naija-foodie", title: "Naija Foodie", type: "Mobile App", meta: "Food • Lifestyle", category: "Mobile Apps", image: "/images/naija-foodie.png", tone: "from-[#4a2e14] to-[#120b06]", to: "/work/naija-foodie" },
  { slug: "fintech-app", title: "Fintech App", type: "Mobile App", meta: "Banking • Finance", category: "Mobile Apps", image: "/images/fintech-app.png", tone: "from-[#1d2f55] to-[#0a0f1e]", to: "/work/fintech-app" },
  { slug: "youfit", title: "YouFit", type: "Mobile App", meta: "Health • Fitness", category: "Mobile Apps", image: "/images/youfit.png", tone: "from-[#5a22a8] to-[#14072b]", to: "/work/youfit" },
  { slug: "technical-articles", title: "Technical Articles", type: "Writing", meta: "Tech • Education", category: "Technical Writing", image: "/images/technical-articles.png", tone: "from-[#2b2f38] to-[#0e0f12]", to: "/writing" },
  { slug: "cng-plant-research", title: "CNG Plant Research", type: "Research", meta: "Energy • Engineering", category: "Research", image: "/images/cng-research.png", tone: "from-[#3a3d44] to-[#101114]", to: "/writing" },
  { slug: "video-editing", title: "Video Editing (Reels)", type: "Video", meta: "Creative • Storytelling", category: "Video", image: "/images/video-reels.png", tone: "from-[#3d2a1e] to-[#0f0a07]", to: "/video" },
];

export interface CaseStudyData {
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  images: [string, string];
  steps: { title: string; body: string }[];
  features: { key: "auth" | "list" | "order" | "track" | "push"; label: string }[];
  stack: ("Flutter" | "Dart" | "Firebase" | "REST APIs" | "Git" | "Figma")[];
}

const features: CaseStudyData["features"] = [
  { key: "auth", label: "User Authentication" },
  { key: "list", label: "Restaurant Listings" },
  { key: "order", label: "Food Ordering" },
  { key: "track", label: "Live Tracking" },
  { key: "push", label: "Push Notifications" },
];

// TODO: Fintech App and YouFit copy below is placeholder — replace with the real case studies.
const placeholder = (title: string, subtitle: string, images: [string, string]): CaseStudyData => ({
  title,
  subtitle,
  summary: "Add a one-line summary of what this app does and who it is for.",
  tags: ["Flutter", "Dart", "Firebase"],
  images,
  steps: [
    { title: "The Problem", body: "Describe the problem this app set out to solve." },
    { title: "My Approach", body: "Explain the research, design and planning behind it." },
    { title: "The Build", body: "Summarise the tools, architecture and key technical decisions." },
    { title: "The Outcome", body: "Share the result: what shipped and what it achieved." },
  ],
  features: features,
  stack: ["Flutter", "Dart", "Firebase", "Git"],
});

export const caseStudies: Record<string, CaseStudyData> = {
  "naija-foodie": {
    title: "Naija Foodie",
    subtitle: "Mobile App  •  Food & Lifestyle",
    summary: "A food discovery and delivery app built to help users find and order the best local and international dishes across Nigeria.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "Git"],
    images: ["/images/naija-foodie-1.png", "/images/naija-foodie-2.png"],
    steps: [
      { title: "The Problem", body: "Food discovery in Nigeria is fragmented. Users struggle to find reliable restaurants, view menus, and place orders in one seamless experience." },
      { title: "My Approach", body: "I researched user needs, studied competitors, designed a simple and intuitive UI/UX, and built the app with a focus on performance, offline support and a smooth ordering flow." },
      { title: "The Build", body: "Built with Flutter for a clean interface and smooth navigation, with Firebase for authentication and real-time data, REST APIs for restaurant data, and Git for version control." },
      { title: "The Outcome", body: "A functional app with a clean interface, smooth user flow, and essential features like restaurant listings, search, ordering and notifications." },
    ],
    features,
    stack: ["Flutter", "Dart", "Firebase", "REST APIs", "Git"],
  },
  "fintech-app": placeholder("Fintech App", "Mobile App  •  Banking & Finance", ["/images/fintech-app-1.png", "/images/fintech-app-2.png"]),
  youfit: placeholder("YouFit", "Mobile App  •  Health & Fitness", ["/images/youfit-1.png", "/images/youfit-2.png"]),
};

export const featuredArticle = {
  title: "How IoT Applications Are Reshaping Construction, Manufacturing, and Agriculture",
  excerpt: "Explore how IoT is transforming key industries and creating smarter, more efficient systems.",
  image: "/images/article-iot.png",
};

export const articles = [
  { title: "Aerospace Technology: The Crest of Engineering", meta: "Tech  •  8 min read", image: "/images/article-aerospace.png", tone: "from-[#9db7d6] to-[#3b5a85]" },
  { title: "CNG: A Cleaner Energy Future for Nigeria", meta: "Energy  •  6 min read", image: "/images/article-cng.png", tone: "from-[#8a8f98] to-[#3a3f48]" },
  { title: "The Future of Mobile Apps in Africa", meta: "Tech  •  7 min read", image: "/images/article-mobile.png", tone: "from-[#c9d6e8] to-[#5d7aa6]" },
];

export const videos = [
  { title: "Brand Story – 60s", note: "A short brand film for a local business.", image: "/images/video-brand.png", tone: "from-[#3a3a44] to-[#0c0c10]" },
  { title: "Product Demo – 45s", note: "App walkthrough video", image: "/images/video-demo.png", tone: "from-[#2b3a55] to-[#0a0d14]" },
  { title: "Lifestyle Reel – 30s", note: "Fitness & Wellness", image: "/images/video-lifestyle.png", tone: "from-[#3b3b3b] to-[#0e0e0e]" },
  { title: "Travel Vlog – 2m", note: "Exploring new places", image: "/images/video-travel.png", tone: "from-[#4a5a3a] to-[#0f140b]" },
  { title: "Motion Graphics – 1m", note: "Animated explainer", image: "/images/video-motion.png", tone: "from-[#1d3a5a] to-[#080f1a]" },
];
