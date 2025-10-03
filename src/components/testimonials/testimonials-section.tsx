import { TestimonialsSection as TestimonialsUI } from "./testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Riya Sharma",
      handle: "@riyasharma",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    text: "Xentro gave me the platform to showcase my college project and find teammates who shared my passion. Today, that idea has turned into a real startup journey!",
    href: "https://twitter.com/riyasharma"
  },
  {
    author: {
      name: "Ankit Verma",
      handle: "@ankitmentor",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    text: "As a mentor on Xentro, I've been able to guide multiple student founders. The structured mentorship flow and events make it easier to actually create impact.",
    href: "https://twitter.com/ankitmentor"
  },
  {
    author: {
      name: "Sneha Patel",
      handle: "@snehapatel",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    text: "From college student to startup founder - Xentro connected me with the right people and resources. The networking events are a game-changer!",
    href: "https://twitter.com/snehapatel"
  },
  {
    author: {
      name: "Arjun Nair",
      handle: "@arjunnair",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    text: "The incubation support I received through Xentro was exactly what I needed. Great mentors, solid feedback, and an amazing community of founders.",
    href: "https://twitter.com/arjunnair"
  },
  {
    author: {
      name: "Kavya Reddy",
      handle: "@kavyareddy",
      avatar: "https://randomuser.me/api/portraits/women/31.jpg"
    },
    text: "Xentro helped me transform my final year project into a viable business model. The institutional support and funding connections are phenomenal.",
    href: "https://twitter.com/kavyareddy"
  },
  {
    author: {
      name: "Rohit Agarwal",
      handle: "@rohitagarwal",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg"
    },
    text: "Being part of Xentro's ecosystem opened doors I never thought possible. From idea validation to market entry - they support you every step.",
    href: "https://twitter.com/rohitagarwal"
  },
  {
    author: {
      name: "Meera Singh",
      handle: "@meerasingh",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    text: "The collaborative environment at Xentro is incredible. I found co-founders, mentors, and even our first customers through the platform.",
    href: "https://twitter.com/meerasingh"
  },
  {
    author: {
      name: "Dev Sharma",
      handle: "@devsharma",
      avatar: "https://randomuser.me/api/portraits/men/89.jpg"
    },
    text: "Xentro's focus on student entrepreneurship is unmatched. They understand our unique challenges and provide tailored solutions.",
    href: "https://twitter.com/devsharma"
  },
  {
    author: {
      name: "Priyanka Deshmukh",
      handle: "@priyankadesh",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    text: "Being an investor on Xentro allowed me to spot student-led innovations early. It's amazing to support young talent and watch them grow.",
    href: "https://twitter.com/priyankadesh"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <TestimonialsUI
        title="Trusted by Students Worldwide"
        description="Join thousands of Students who are already building the future with our platform"
        testimonials={testimonials}
      />
    </section>
  );
}