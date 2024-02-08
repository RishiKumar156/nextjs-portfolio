import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Netflix from "../../util/netlifx.png";
import Portfolio from "../../util/port-old.png";
import PortfolioNew from "../../util/port-new.png";
import Resort from "../../util/resort.png";
import Dashy from "../../util/dashy.png";
import Image from "next/image";
export default function page() {
  const projects = [
    {
      name: "Netflix Clone",
      link: "https://pharaohnetflixclone.netlify.app",
      image: Netflix,
      details:
        "Experience the ultimate streaming experience with our sleekand intuitive Netflix clone, delivering seamlessentertainment at your fingertips. Indulge in the epitome of convenience and choice with our Netflix clone, offering a vast library of content tailored to your every viewing whim.",
      github: "https://github.com/RishiKumar156/netflix-yt-clone",
    },
    {
      name: "Restaurant Web App",
      link: "https://crystalwaterresort.netlify.app/",
      image: Resort,
      details:
        "Step into a world of luxury and tranquility with our stunning resort website, where every click unveils an unforgettable vacation experience.Experience the epitome of hospitality and relaxation with our captivating resort website, designed to inspire your next getaway with seamless navigation and breathtaking imagery.",
      github: "https://github.com/RishiKumar156/htotel-prj",
    },
    {
      name: "Level 1 ~ PortFolio",
      link: "https://rishik-site.netlify.app/",
      image: Portfolio,
      details:
        "Introducing my Level 1 portfolio: a minimalist masterpiece showcasing my skills and achievements with elegance and precision.Elevate your online presence with my Level 1 portfolio, where simplicity meets sophistication, delivering a compelling showcase of my professional journey.",
      github: "https://github.com/RishiKumar156/portfolio/",
    },
    {
      name: "Simple DashBoard",
      link: "https://pharaohdashboard.netlify.app",
      image: Dashy,
      details:
        "Introducing our effortlessly efficient task board, where productivity meets simplicity, streamlining your workflow with intuitive design and seamless organization.Elevate your task management experience with our minimalist yet powerful task board, providing a seamless platform to prioritize, track, and conquer your daily objectives with ease.",
      github: "https://github.com/RishiKumar156/dashboard-simple",
    },
    {
      name: "Level 2 ~ Portfolio",
      link: "https://pharaohdevil.netlify.app/",
      image: PortfolioNew,
      details:
        "Welcome to my Level 2 portfolio, where sophistication meets functionality, showcasing my expertise with captivating design and interactive features that leave a lasting impression.Explore the next level of professionalism and creativity with my Level 2 portfolio, offering an immersive experience that highlights my skills and accomplishments in a dynamic and engaging manner.",
      github: "https://github.com/RishiKumar156/Simple-Portfolio/",
    },
  ];
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center md:py-[5rem] pb-[2rem]  justify-center min-h-[35rem] px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {projects.map((s) => (
            <Card>
              <div className="md:p-[2rem] lg:p-[2rem] p-[1rem] relative flex flex-col items-center gap-4 duration-700 group">
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.name}
                  </span>
                  <Link href={s.link} target="_blank">
                    <Image
                      src={s.image}
                      alt="/"
                      className="rounded-sm my-[1rem] "
                    />
                  </Link>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.details}
                  </span>
                  <div className="flex items-center w-[100%] mt-4 justify-end h-[auto] ">
                    <Link
                      href={s.github}
                      target="_blank"
                      className="mx-[0.5rem] text-sm text-center duration-1000 cursor-pointer text-zinc-400 group-hover:text-zinc-200"
                    >
                      Source code
                    </Link>
                    <Link href={s.github} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#a1a1aa"
                        className="w-[1.5rem] cursor-pointer "
                        viewBox="0 0 496 512"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
