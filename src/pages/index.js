import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import node from "../../public/node.png";
import momo from "../../public/momo2.jpeg";
import code from "../../public/code.png";
import rest from "../../public/3d rest.png";
import sch from "../../public/sch1.png";
import tour from "../../public/tour.png";
import st from "../../public/st1.png";
import ums from "../../public/ums.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Momooreoluwa Sontan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40">
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
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Momooreoluwa Sontan
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Backend Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl">
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
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
            <Image
              src={momo}
              className="w-80 h-80 rounded-full"
              layout="fill"
            />
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since starting my journey as a backend web developer, I have
              learnt and worked on various projects in{" "}
              <span className="text-teal-500">Node.js</span> ,{" "}
              <span className="text-teal-500">Express.js</span> and{" "}
              <span className="text-teal-500">Nest.js</span>.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={rest} width={180} height={180} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">API Development</h3>
              <p className="py-2">
                I have a deep understanding of RESTful API design principles and
                can develop robust APIs using Node.js and Nest.js.
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">POSTMAN</p>
              <p className="text-gray-800 py-1">VSCODE</p>
              <p className="text-gray-800 py-1">MongoDB Compass</p>
              <p className="text-gray-800 py-1">XAMPP</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={rest} width={180} height={180} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Server-side Development
              </h3>
              <p className="py-2">
                I have a deep understanding of RESTful API design principles and
                can develop robust APIs using Node.js and Nest.js.
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">POSTMAN</p>
              <p className="text-gray-800 py-1">VSCODE</p>
              <p className="text-gray-800 py-1">MongoDB Compass</p>
              <p className="text-gray-800 py-1">XAMPP</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={180} height={180} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Web Application Development
              </h3>
              <p className="py-2">
                I have a deep understanding of RESTful API design principles and
                can develop robust APIs using Node.js and Nest.js.
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">POSTMAN</p>
              <p className="text-gray-800 py-1">VSCODE</p>
              <p className="text-gray-800 py-1">MongoDB Compass</p>
              <p className="text-gray-800 py-1">XAMPP</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since starting my journey as a backend web developer, I have
              learnt and worked on various projects in{" "}
              <span className="text-teal-500">Node.js</span> ,{" "}
              <span className="text-teal-500">Express.js</span> and{" "}
              <span className="text-teal-500">Nest.js</span>.
            </p>
          </div>
          <div>
            <div>
              <Image src={sch} />
            </div>
            <div>
              <Image src={tour} />
            </div>
            <div>
              <Image src={ums} />
            </div>
            <div>
              <Image src={st} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
