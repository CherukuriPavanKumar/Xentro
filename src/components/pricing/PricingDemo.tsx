import { PricingSection } from "./pricing-section"

export const PAYMENT_FREQUENCIES = ["monthly", "yearly"]

export const TIERS = [
  {
    id: "free",
    name: "Free Plan",
    price: {
      monthly: 0, // number
      yearly: 0,
    },
    description: "Get started with Xentro for free",
    features: [
      "Limited learning resources",
      "Community access",
      "Basic projects",
      "Free email alerts",
      "Up to 2 active monitors",
    ],
    cta: "Get Started Free",
  },
  {
    id: "student",
    name: "Student Subscription",
    price: {
      monthly: 450,
      yearly: 4500,
    },
    description: "Full access for individual students",
    features: [
      "All platform features unlocked",
      "Advanced projects & tools",
      "Access to student community",
      "Priority email support",
      "Up to 10 active monitors",
    ],
    cta: "Subscribe Now",
    popular: true, // highlight this one
  },
  {
    id: "mentorship",
    name: "Premium Mentorship",
    price: {
      monthly: 3000, // keep string if not numeric
      yearly: 25000,
    },
    description: "Guidance from experts & industry mentors",
    features: [
      "1:1 mentorship sessions",
      "Industry-led workshops",
      "Pitch competitions",
      "Personalized learning roadmap",
      "Certificate of completion",
    ],
    cta: "Subscribe Now",
  },
  {
    id: "institution",
    name: "Institution Licensing",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "Institution-wide access for schools & colleges",
    features: [
      "Annual per-student license",
      "Admin dashboard & analytics",
      "Dedicated onboarding support",
      "Custom integrations available",
      "Scalable for thousands of students",
    ],
    cta: "Request Quote",
    highlighted: true, // enterprise style
  },
]

  

export function PricingSectionDemo() {
  return (
    <div className="relative flex justify-center items-center w-full scale-90">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
        <PricingSection
          title="Simple Pricing"
          subtitle="Choose the best plan for your needs"
          frequencies={PAYMENT_FREQUENCIES}
          tiers={TIERS}
        />
    </div>
  );
}