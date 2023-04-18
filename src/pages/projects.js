import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import project1 from "../../public/images/projects/Vidme.jpg";
import project2 from "../../public/images/projects/Streamplex.jpg";
import project3 from "../../public/images/projects/Myweatherapp.jpg";
import project4 from "../../public/images/projects/Disney.jpg";
import project5 from "../../public/images/projects/Textutils.jpg";
import project6 from "../../public/images/projects/calculator.jpg";
import project7 from "../../public/images/projects/whatsapp.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center relative justify-center rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 fotn-medium text-dark dark:text-light sm:text-sm ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center  justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] " />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">{title}</h2>
        </Link>

        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Vivek Meena | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Vidme"
                img={project1}
                summary="This is a Nextjs Project with sanity as a backend which allow you to upload videos and create account using Google Auth and which search feature , commenting system with different account and with routing pakage zustand."
                link="https://tiktok-clone-final.vercel.app/"
                type="Featured Project"
                github="https://github.com/vivekmeena7/Vid-me"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Streamplex"
                img={project2}
                link="https://vivekmeena7.github.io/StreamPlex/"
                type="Project"
                github="https://github.com/vivekmeena7/StreamPlex"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="My Weather App"
                img={project3}
                link="https://vivekmeena7.github.io/My-Weather-App/"
                type="Project"
                github="https://github.com/vivekmeena7/My-Weather-App"
              />
            </div>
            <div className="col-span-12 ">
              <FeaturedProject
                title="Disney+Hotstar"
                img={project4}
                summary="I build fully animated Disney+Hotstar with React JS (Firebase + Styled Components + Redux) which uses Google Auth to login."
                link="https://disneyplus-clone-5a32f.web.app/"
                type="Featured Project"
                github="https://github.com/vivekmeena7/Disney-hotstar-clone"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Text-Utils"
                img={project5}
                link="https://vivekmeena7.github.io/TextUtils/"
                type="Project"
                github="https://github.com/vivekmeena7/TextUtils"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Calculator"
                img={project6}
                link="https://vivekmeena7.github.io/calculator/"
                type="Project"
                github="https://github.com/vivekmeena7/calculator"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Whatsapp"
                img={project7}
                summary="A full stack Whatsapp-clone using react, socket for realtime chatting, mongodb as a backend."
                link="https://github.com/vivekmeena7/Whastapp-Clone"
                type="Featured Project"
                github="https://github.com/vivekmeena7/Whastapp-Clone"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
