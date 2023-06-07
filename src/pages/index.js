import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import momo from "../../public/momo1.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Momoore Sontan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 ">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">MoMo</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Momoore Sontan
            </h2>
            <h3 className="text-2xl py-2">Backend Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Responsible for server-side web application logic and integration
              of the work front-end developers do. I am proficient in utilizing
              the Node.js runtime environment to build scalable and efficient
              web applications. With expertise in server-side programming and
              web development, I have a strong command over JavaScript, the
              primary language used in Node.js development.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div></div>
        </section>
      </main>
    </>
  );
}
