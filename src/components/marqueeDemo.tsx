import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";
 
const MarqueeElements = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60f4yUDTMAnd6MGtjqxfKDt7k9NhNvIdzD2ivBKSeb5tve3GYbDyFpY9HYTR7k0A2UM&usqp=CAU"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60f4yUDTMAnd6MGtjqxfKDt7k9NhNvIdzD2ivBKSeb5tve3GYbDyFpY9HYTR7k0A2UM&usqp=CAU"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60f4yUDTMAnd6MGtjqxfKDt7k9NhNvIdzD2ivBKSeb5tve3GYbDyFpY9HYTR7k0A2UM&usqp=CAU"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60f4yUDTMAnd6MGtjqxfKDt7k9NhNvIdzD2ivBKSeb5tve3GYbDyFpY9HYTR7k0A2UM&usqp=CAU"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60f4yUDTMAnd6MGtjqxfKDt7k9NhNvIdzD2ivBKSeb5tve3GYbDyFpY9HYTR7k0A2UM&usqp=CAU"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60f4yUDTMAnd6MGtjqxfKDt7k9NhNvIdzD2ivBKSeb5tve3GYbDyFpY9HYTR7k0A2UM&usqp=CAU"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60f4yUDTMAnd6MGtjqxfKDt7k9NhNvIdzD2ivBKSeb5tve3GYbDyFpY9HYTR7k0A2UM&usqp=CAU"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60f4yUDTMAnd6MGtjqxfKDt7k9NhNvIdzD2ivBKSeb5tve3GYbDyFpY9HYTR7k0A2UM&usqp=CAU"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60f4yUDTMAnd6MGtjqxfKDt7k9NhNvIdzD2ivBKSeb5tve3GYbDyFpY9HYTR7k0A2UM&usqp=CAU"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60f4yUDTMAnd6MGtjqxfKDt7k9NhNvIdzD2ivBKSeb5tve3GYbDyFpY9HYTR7k0A2UM&usqp=CAU"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60f4yUDTMAnd6MGtjqxfKDt7k9NhNvIdzD2ivBKSeb5tve3GYbDyFpY9HYTR7k0A2UM&usqp=CAU"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60f4yUDTMAnd6MGtjqxfKDt7k9NhNvIdzD2ivBKSeb5tve3GYbDyFpY9HYTR7k0A2UM&usqp=CAU"
  },
];
 
const firstRow = MarqueeElements.slice(0, MarqueeElements.length / 2);
const secondRow = MarqueeElements.slice(MarqueeElements.length / 2);
 
const MarqueeCard = ({
  img
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-18 w-18 cursor-pointer overflow-hidden rounded-xl border ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="w-full h-full object-cover object-center" alt="" src={img} />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-screen flex-col overflow-hidden py-20">
      <div className="relative z-10 mb-5 text-center">
        <h1 className="mb-1 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-4xl font-bold text-transparent md:text-3xl lg:text-4xl dark:from-gray-100 dark:via-gray-400 dark:to-gray-100">
          Trusted by Institutions and Ecosystem Partners
        </h1>
      </div>

      <div className="space-y-2">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((MarqueeElement) => (
            <MarqueeCard key={MarqueeElement.img} {...MarqueeElement} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((MarqueeElement) => (
            <MarqueeCard key={MarqueeElement.img} {...MarqueeElement} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
}