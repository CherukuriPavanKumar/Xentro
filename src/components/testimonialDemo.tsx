import { TestimonialsSection } from "@/components/testimonials-with-marquee"


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
      text: "As a mentor on Xentro, I’ve been able to guide multiple student founders. The structured mentorship flow and events make it easier to actually create impact.",
      href: "https://twitter.com/ankitmentor"
    },
    {
      author: {
        name: "Neha Kapoor",
        handle: "@neha_invests",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
      },
      text: "Investing through Xentro has been refreshing — I discovered student-led startups early and supported innovation straight from campus.",
      href: "https://twitter.com/neha_invests"
    },
    {
      author: {
        name: "Dr. Rajesh Mehta",
        handle: "@drmehta_institute",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg"
      },
      text: "Our institution partnered with Xentro to connect students with the right mentors and incubators. It has completely transformed how we nurture entrepreneurship on campus.",
      href: "https://twitter.com/drmehta_institute"
    },
    {
      author: {
        name: "Priya Singh",
        handle: "@priyasingh_startup",
        avatar: "https://randomuser.me/api/portraits/women/21.jpg"
      },
      text: "I joined Xentro to find like-minded co-founders. The networking events and workshops helped me turn an idea into a real product in just a few months.",
      href: "https://twitter.com/priyasingh_startup"
    },
    {
      author: {
        name: "Vikram Reddy",
        handle: "@vikram_innovates",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg"
      },
      text: "Being part of Xentro gave me access to industry mentors who helped refine my startup pitch. The feedback I got was invaluable for our early growth.",
      href: "https://twitter.com/vikram_innovates"
    },
    {
      author: {
        name: "Sanya Mehra",
        handle: "@sanya_invests",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg"
      },
      text: "I love how Xentro bridges the gap between student innovators and investors. I’ve discovered multiple high-potential startups I wouldn’t have known otherwise.",
      href: "https://twitter.com/sanya_invests"
    },
    {
      author: {
        name: "Dr. Arjun Desai",
        handle: "@drdesai_college",
        avatar: "https://randomuser.me/api/portraits/men/28.jpg"
      },
      text: "Xentro has redefined entrepreneurship on our campus. Students are more confident, mentors are engaged, and real startups are coming to life faster than ever.",
      href: "https://twitter.com/drdesai_college"
    },
    {
        author: {
          name: "Rohit Malhotra",
          handle: "@rohitmalhotra",
          avatar: "https://randomuser.me/api/portraits/men/40.jpg"
        },
        text: "Xentro helped me take my tech idea from a concept to a working prototype. The community support and mentorship are unmatched!",
        href: "https://twitter.com/rohitmalhotra"
      },
      {
        author: {
          name: "Isha Patel",
          handle: "@ishapatel_innovates",
          avatar: "https://randomuser.me/api/portraits/women/34.jpg"
        },
        text: "Joining Xentro was the best decision for my startup journey. I found co-founders who shared my vision and mentors who guided us at every step.",
        href: "https://twitter.com/ishapatel_innovates"
      },
      {
        author: {
          name: "Manish Gupta",
          handle: "@manishgupta",
          avatar: "https://randomuser.me/api/portraits/men/25.jpg"
        },
        text: "As a mentor, Xentro gives me the chance to really make an impact. The structured programs help students build real startups, not just ideas.",
        href: "https://twitter.com/manishgupta"
      },
      {
        author: {
          name: "Ananya Roy",
          handle: "@ananyaroy",
          avatar: "https://randomuser.me/api/portraits/women/50.jpg"
        },
        text: "Investing in student-led startups through Xentro has been a rewarding experience. I get early access to promising innovations and support young talent.",
        href: "https://twitter.com/ananyaroy"
      },
      {
        author: {
          name: "Dr. Karan Singh",
          handle: "@drkaransingh",
          avatar: "https://randomuser.me/api/portraits/men/18.jpg"
        },
        text: "Partnering with Xentro transformed our campus entrepreneurship ecosystem. Students are more confident and startups are launching faster.",
        href: "https://twitter.com/drkaransingh"
      },
      {
        author: {
          name: "Sneha Iyer",
          handle: "@sneha_iyer",
          avatar: "https://randomuser.me/api/portraits/women/60.jpg"
        },
        text: "I discovered my co-founder and first product idea on Xentro. The community events are engaging and truly push students to innovate.",
        href: "https://twitter.com/sneha_iyer"
      },
      {
        author: {
          name: "Arjun Bhatia",
          handle: "@arjunbhatia",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg"
        },
        text: "Xentro’s mentorship and networking opportunities accelerated our startup journey. We wouldn’t have launched so quickly without it.",
        href: "https://twitter.com/arjunbhatia"
      },
      {
        author: {
          name: "Priyanka Deshmukh",
          handle: "@priyankadesh",
          avatar: "https://randomuser.me/api/portraits/women/23.jpg"
        },
        text: "Being an investor on Xentro allowed me to spot student-led innovations early. It’s amazing to support young talent and watch them grow.",
        href: "https://twitter.com/priyankadesh"
      }
  ];
  
  

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Trusted by Students Worldwide"
      description="Join thousands of Students who are already building the future with our platform"
      testimonials={testimonials}
    />
  )
}