import { useEffect, useRef } from "react";
import capsuleImg from "../assets/capsule.png";
import earthImg from "../assets/earth.webp";
import AboutPage from "../pages/about.jsx";
import ContactPage from "../pages/contact.jsx";
import PartnersPage from "../pages/partners.jsx";
import SHCFooter from "../elements/shcFooter";

const motto = [
  "Developing technology beyond the horizon.",
  "Your edge in technology.",
  "Web.",
  "Apps.",
  "Software & Hardware.",
  "We do it all.",
];

let sectionOne = null;
let sectionSecond = null;
let oneRect = null;
let secondRect = null;
let navBarY = null;
let done = false;
let isMobile = window.innerWidth < 821;

window.addEventListener("scroll", () => {
  if (sectionOne && sectionSecond && !isMobile) {
    const scrollPos = window.scrollY;

    if (scrollPos + navBarY < oneRect.y) {
      done = false;
      sectionOne.current.style.position = "relative";
    }
    else if (scrollPos + navBarY > oneRect.y && (scrollPos < secondRect.bottom-navBarY) && !done) {
      sectionOne.current.style.position = "fixed";
      sectionOne.current.style.top = `${0}px`;

      if (scrollPos > secondRect.y) {
        sectionSecond.current.style.position = "fixed";
        sectionSecond.current.style.top = `${0}px`;
      } else {
        sectionSecond.current.style.position = "relative";
        sectionSecond.current.style.top = `${0}px`;
      }
    } else if (!done) {
      sectionOne.current.style.position = "relative";
      sectionOne.current.style.top = `${0}px`;

      sectionSecond.current.style.position = "relative";
      sectionSecond.current.style.top = `${0}px`;
      done = true;
    }
  }
}, []);

export default function HomePage(language = "fi") {
  sectionOne = useRef(null);
  sectionSecond = useRef(null);

  useEffect(() => {
    oneRect = sectionOne.current.getBoundingClientRect();
    secondRect = sectionSecond.current.getBoundingClientRect();

    window.scrollTo(0, 0);

    // Animation for the background video
    const video = document.getElementById("backgroundVideo");
    video.playbackRate = 0.7;
    let deg = 0;

    /*setInterval(() => {
            video.style.filter = `sepia(100%) hue-rotate(${deg}deg) saturate(1000%) brightness(50%) contrast(1.2)`
            deg++;
        }, 1000);*/

    // Animation for the title description
    const titleDesc = document.getElementById("titleDesc");
    let current = 0;
    let currentChar = 0;
    let charLimit = motto[current].length;
    let waiting = 0;

    setInterval(() => {
      if (waiting == 0) {
        if (currentChar == 0) titleDesc.innerHTML = "";
        if (currentChar < charLimit) {
          titleDesc.innerHTML = motto[current]
            .concat(" ")
            .substring(0, currentChar + 1);
          currentChar++;
        } else {
          currentChar = 0;
          current++;
          waiting = current == motto.length ? 100 : 40;
          if (current >= motto.length) {
            current = 0;
          }
          charLimit = motto[current].length;
        }
      } else {
        waiting--;
      }
    }, 60);

    setTimeout(() => {
      navBarY = document.getElementById("navBarWrapper").getBoundingClientRect().y;
    }, 1000);
  }, []);
  return (
    <div id="homeWrapper" className="bg-main">
      <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
      <div id="main" className="h-[50vh] flex justify-center mt-0 md:h-screen">
        <video
          autoPlay
          muted
          loop
          id="backgroundVideo"
          /* className="top-0 z-0 object-cover w-full p-0 m-0 bgVideoFilter" */
          className="top-0 z-0 object-cover w-full p-0 m-0"
        >
          {/* <source src="./src/assets/HomePageBackground.mp4" type="video/mp4" /> */}
          <source src="./src/assets/earth.mp4" type="video/mp4" />
        </video>
        <div
          id="content"
          className="absolute flex flex-col justify-center items-center text-white h-[50vh] md:h-screen"
        >
          <h1 className="text-2xl font-bold text-center cursor-default select-none md:text-3xl font-poppins lg:text-6xl text-h1">
            Sunny Harbor Consulting
          </h1>
          <p
            id="titleDesc"
            className="font-normal text-center cursor-default select-none font-raleway sm:text-2xl lg:text-3xl text-p"
          ></p>
          {/* <div className="flex justify-around hidden w-full mt-8 font-mono text-2xl lg:visible">
            <button 
            onClick={() => document.getElementById('aboutUsWrapper').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })}
            className="px-2 text-center text-white bg-black">Tiimi</button>
            <button 
            onClick={() => document.getElementById('contactWrapper').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })}
            className="px-2 text-center text-white bg-black">Ota yhteyttä</button>
            <button 
            onClick={() => document.getElementById('Partners').scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}
            className="px-2 text-center text-white bg-black">Kumppanit</button>
          </div> */}
        </div>
      </div>
      <div id="content" className="mx-0 bg-white">
        <div id="about" className="block w-full h-screen p-0 m-0">
          <div className="xl:h-screen h-1/2 z-[0]">
            <div
              id="storyDiv"
              ref={sectionOne}
              className="relative grid w-full h-full grid-cols-1 p-5 pt-5 m-auto bg-black text-h2 lg:p-32 xl:h-screen"
            >
              <div className="relative overflow-hidden w-full z-[10]">
              <h1 className="text-4xl italic font-bold xl:text-7xl font-poppins">Sunny Harbor Consulting</h1>
              <h2 className="relative w-full text-base font-poppins font-extralight lg:w-2/3 md:w-2/3 text-h1 sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-5xl mt-7">
                  Sunny Harbor Consulting eli SHC on nuori ja taitava ohjelmistoyritys,
                  joka erikoistuu innovatiivisiin web- ja mobiilisovelluksiin.
                <br/><br/>
                <br/>
                SHC tekee mobiili- ja tietokonesovelluksia, nettisivuja sekä embedded-toteutuksia. Osaamisemme vain laajenee tästä ja panostamme uuden osaamisen hankkimiseen.
                </h2>
              </div>
              <img className="h-4/5 absolute aspect-square xl:right-5 right-0 z-[0] xl:bottom-[8%] bottom-[0]" src={earthImg} />
            </div>
          </div>
          <div className="xl:h-screen h-1/2 z-[0]">
            <div
              id="storyDiv"
              ref={sectionSecond}
              className="relative grid w-full h-screen grid-cols-1 p-5 pt-5 m-auto bg-black text-h2 lg:p-32"
            >
              <div className="inline-block align-middle overflow-hidden w-full z-[10]">
                <h1 className="text-4xl xl:text-7xl font-poppins">Mitä kieliä osaamme?</h1>
                <h2 className="relative w-full text-base font-poppins font-extralight lg:w-2/3 md:w-2/3 text-h1 sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-5xl mt-7">
                Meillä on kokemusta seuraavien ohjelmointikielien kanssa työskentelystä: C, C++, Python, Golang, JavaScript, TypeScript, Dart, Java, Kotlin, Swift, Lua, Rust, Mojo, Assembly (x86, ARM ja Z80) ja muilla.
                </h2>
              </div>
              <img src={capsuleImg} className="absolute top-0 left-0 object-cover w-full h-full grayscale" />
            </div>
          </div>
          <AboutPage />
          <PartnersPage />
          <ContactPage />
          <SHCFooter />
        </div>
      </div>
    </div>
  );
}
