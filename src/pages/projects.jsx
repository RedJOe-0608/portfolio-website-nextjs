import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, github, img, link }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:text-light shadow-2xl dark:shadow-light dark:shadow-lg p-8 relative lg:flex-col lg:p-6 xs:rounded-2xl xs:p-4">
      <Link
        className="w-1/2 lg:w-full  cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          src={img}
          alt="project img"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 lg:w-full lg:pl-0 lg:pt-6 flex flex-col items-start justify-between pl-8 ">
        <span className="text-primary xs:text-base dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 sm:text-sm w-full text-left text-3xl dark:text-light font-bold ">
            {title}
          </h2>
        </Link>
        <p className="text-dark dark:text-light my-2 sm:text-sm ">{summary}</p>
        <div className="flex items-center my-4">
          <Link href={github} target="_blank">
            <GithubIcon className="w-10 mr-4" />
          </Link>
          <Link
            href={link}
            className="rounded-lg bg-dark text-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light p-2 px-6 text-lg font-semibold border-2 border-solid border-transparent hover:border-dark hover:text-dark hover:bg-light transition duration-200 sm:px-4 sm:text-base ml-4 sm:!ml-2"
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, github, img, link }) => {
  return (
    <motion.article
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark p-6 bg-light dark:bg-dark dark:text-light shadow-2xl dark:shadow-light dark:shadow-lg relative xs:p-4"
    >
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-xl">
            {title}
          </h2>
        </Link>
        <div className="flex items-center justify-between w-full my-4">
          <Link
            href={link}
            className="rounded-lg bg-dark text-light p-2 px-6 text-md font-semibold border-2 border-solid border-transparent hover:border-dark hover:text-dark hover:bg-light transition duration-200 dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:text-base"
            target="_blank"
          >
            Visit
          </Link>
          <Link href={github} target="_blank">
            <GithubIcon className="w-10 mr-4 md:w-6" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="About page of my portfolio"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex flex-col w-full items-center justify-center mb-16">
        <Layout className="pt-16 sm:!p-[4rem] xs:!p-[2rem]">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className=" mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
            py="py-2"
          />
          <div className="grid grid-cols-12 gap-20 gap-y-16 lg:gap-x-8 md:gap-y-24 sm:!gap-x-0  ">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.7 }}
              className="col-span-12"
            >
              <FeaturedProject
                title="Crypto Screener Application"
                summary=" A feature-rich Crypto Screener App
              using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can
              easily convert the price in your local currency."
                type="Featured Project"
                link="/"
                github="/"
                img={project1}
              />
            </motion.div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Crypto Screener Application"
                summary=" A feature-rich Crypto Screener App
              using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can
              easily convert the price in your local currency."
                type="Featured Project"
                link="/"
                github="/"
                img={project1}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Crypto Screener Application"
                summary=" A feature-rich Crypto Screener App
              using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can
              easily convert the price in your local currency."
                type="Featured Project"
                link="/"
                github="/"
                img={project1}
              />
            </div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
              className="col-span-12 mt-32"
            >
              <FeaturedProject
                title="Crypto Screener Application"
                summary=" A feature-rich Crypto Screener App
              using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can
              easily convert the price in your local currency."
                type="Featured Project"
                link="/"
                github="/"
                img={project1}
              />
            </motion.div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Crypto Screener Application"
                summary=" A feature-rich Crypto Screener App
              using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can
              easily convert the price in your local currency."
                type="Featured Project"
                link="/"
                github="/"
                img={project1}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              {" "}
              <Project
                title="Crypto Screener Application"
                summary=" A feature-rich Crypto Screener App
              using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can
              easily convert the price in your local currency."
                type="Featured Project"
                link="/"
                github="/"
                img={project1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
