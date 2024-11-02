import Image from "next/image";
import WaterView from "@/app/waterview";
// @ts-ignore
import {
    Alegreya,
    Open_Sans,
    Roboto,
    Rubik_Mono_One,
    Silkscreen,
    Sixtyfour_Convergence,
    Ubuntu_Mono
} from 'next/font/google';
import myImage from '../../public/my_image.png'
import Link from "next/link";

const openSans = Roboto({
    subsets: ['latin'],
    weight:["400","700"]
});

const sixtyfourConvergence = Sixtyfour_Convergence({
    subsets: ['latin']
});

const ubuntuMono = Ubuntu_Mono({
    subsets: ['latin'],
    weight:["400","700"]
});


const silkscreen = Silkscreen({
    subsets: ['latin'],
    weight:["400","700"]
});

export default function Home() {
  return (
    <div >
      <main >
          <div className={`${ubuntuMono.className} w-full h-64 md:h-[50vh] lg:h-screen`}>
              <WaterView>
                  <div className={` flex h-full`}>
                      <img src={myImage.src} className={"absolute h-full"}/>
                      <div className={"h-full w-full flex items-center justify-center"}>
                          <div className=" p-4 lg:p-8 bg-black/[0.8]  h-full md:h-auto ml-20 pl-10 md:pl-40 md:w-2/3 lg:pl-44 md:mt-32 lg:mt-64 lg:rounded-lg">
                              <div className={"md:relative flex flex-col justify-end md:justify-start items-end md:items-start"}>
                                  <h4 className={"text-xs lg:text-5xl font-bold"}>Hello!</h4>
                                  <h4 className="text-xs lg:text-5xl lg:mt-4">I’m Akash Shahriar,</h4>
                                  <h4 className={"text-gray-300 text-xs lg:text-xl lg:my-4 text-right md:text-left"}> a <span
                                      className={`${silkscreen.className} text-red-700 bg-black lg:p-1`}>software engineer</span> based
                                      in <Link href="https://en.wikipedia.org/wiki/Bangladesh" target="_blank" className={"font-bold "}>Bangladesh</Link>.
                                      Whether you're here to learn more about my work, share a passion for coding,
                                      or
                                      explore the possibility of working together—welcome! You’ve landed in the right
                                      place.
                                      Nice
                                      to
                                      meet you!</h4>

                                  <div
                                      className={"flex flex-col md:w-full md:flex-row gap-2 lg:gap-4 pt-4 md:justify-between lg:mr-8"}>
                                      <button
                                          className="flex-none btn btn-xs text-xs lg:text-lg lg:btn-md backdrop-blur-md bg-white/30 text-black hover:text-red-700 hover:bg-white group">
                                          Download Resume
                                          <svg className="h-3 w-3 lg:h-6 lg:w-6 fill-black  group-hover:fill-red-700"
                                               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                                 strokeLinejoin="round"></g>
                                              <g id="SVGRepo_iconCarrier">
                                                  <path
                                                      d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"></path>
                                                  <path
                                                      d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"></path>
                                              </g>
                                          </svg>
                                      </button>
                                      <div className={"space-x-2 md:flex md:flex-1 md:justify-end"}>
                                          <button className="btn btn-ghost btn-xs lg:btn-md">Contact me</button>
                                          <button
                                              className="btn btn-xs btn-ghost text-red-700 hover:bg-red-700/[0.5] hover:text-white hover:border-transparent lg:btn-md">Hire
                                              me
                                          </button>
                                      </div>
                                  </div>

                                  <div className={"md:absolute md:top-0 md:right-0 flex space-x-2 mt-2"}>
                                      <Link  href="https://github.com/AkashShahriar55" passHref target="_blank">
                                          <svg role="img" className={"h-4 w-4 md:h-8 md:w-8 fill-white"}
                                               viewBox="0 0 24 24"
                                               xmlns="http://www.w3.org/2000/svg">
                                              <title>GitHub</title>
                                              <path
                                                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                          </svg>
                                      </Link>
                                      <Link href="https://www.toptal.com/resume/akash-shahriar" passHref target="_blank">
                                          <svg xmlns="http://www.w3.org/2000/svg"
                                               className={"h-4 w-4 lg:h-8 lg:w-8 fill-white"}
                                               viewBox="0 0 24 24" id="toptal">
                                              <path
                                                  d="m6.363 2.978.002-.003.01-.013-.012.016zM10.549 15.738l-.011-.004h-.001z"></path>
                                              <path
                                                    d="M10.187 0 8.142 2.04l3.782 3.769-8.174 8.153L13.815 24l2.044-2.039-3.781-3.771 8.172-8.152L10.187 0zm-.663 15.542-1.226-1.26-.002-.013 6.081-6.063 1.226 1.223-6.079 6.113z"></path>
                                          </svg>
                                      </Link>


                                  </div>

                              </div>

                          </div>


                      </div>


                  </div>
              </WaterView>
          </div>

          <div className={`${ubuntuMono.className} flex w-full`}>
              <div className="flex flex-row p-4">
                  <div className={"basis-2/3 p-8"}>
                      <p className={"text-xl"}>
                          <span className={"font-bold"}>
                              Welcome to my digital playground!
                          </span>
                          <br/> <br/>
                          I’m Akash Shahriar, an Android Engineer and full-stack mobile
                          developer with over five years of experience creating exceptional, user-focused mobile
                          applications. My passion lies in turning complex ideas into sleek, high-performance solutions
                          that
                          elevate user engagement and drive business growth.<br/>
                          <br/>
                          Are you looking for a developer who knows the ins and outs of Android SDK, Kotlin
                          Multiplatform
                          Mobile (KMM), and Flutter SDK? Look no further. I’ve led projects that have significantly
                          boosted
                          app performance and user retention, using clean architecture, efficient state management, and
                          secure, multi-module setups. I leverage cutting-edge tools like Jetpack Compose, CameraX, and
                          advanced data encryption to keep apps modern, scalable, and lightning-fast.<br/>
                          <br/>
                          But I don’t just stop at traditional app development—I’m also deeply fascinated by Machine
                          Learning (ML), Artificial Intelligence (AI), Image Processing, and Natural Language Processing
                          (NLP). Imagine apps that don’t just respond to users but understand and predict their needs.
                          From
                          developing intelligent conversational agents to crafting gesture recognition features, I’m all
                          about taking your app to the next level with AI and smart tech integration.<br/>
                          <br/>
                          Efficiency is my game, and I excel at deploying projects rapidly and reliably through CI/CD
                          best
                          practices. Whether collaborating in agile environments or integrating state-of-the-art
                          features,
                          I’m committed to delivering software that leaves an impact.<br/>
                          <br/>
                          Ready to bring your vision to life with an app that’s as powerful as it is elegant? Let’s
                          connect
                          and make something extraordinary together!
                      </p>
                  </div>
                  <div className="divider divider-horizontal divider-start">
                      <div className="badge badge-outline">Skill</div>
                  </div>

                  <div className={"basis-1/3"}>

                  </div>

              </div>
          </div>
      </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        </footer>
    </div>
  );
}
