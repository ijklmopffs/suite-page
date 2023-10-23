import logo from "../src/assets/img/logo.svg";
import phoneMobile from "../src/assets/img/image-hero-landscape.webp";
import phone from "../src/assets/img/image-hero-portrait.webp";
import man from "../src/assets/img/image-jeremy-large.webp";
import manSmall from "../src/assets/img/image-jeremy-small.webp";
import facebook from "../src/assets/img/icon-facebook.svg";
import twitter from "../src/assets/img/icon-twitter.svg";
import instagram from "../src/assets/img/icon-instagram.svg";
import "./App.css";

function App() {
  return (
    <>
      <main className="max-w-[1110px] mx-auto p-4">
        <nav className="flex items-center justify-between">
          <img src={logo} alt="" />
          <button
            className="border-2 rounded-lg hover:bg-[#172339] hover:text-white border-black 
          px-8 py-3"
          >
            Request Beta Access
          </button>
        </nav>

        <section className="my-20 flex flex-col md:flex-row items-center md:flex-wrap lg:flex-nowrap">
          <div className="md:text-start">
            <h1 className="font-bold text-[#172339] text-4xl md:text-6xl md:w-[35rem] my-10">
              A super solution for your business
            </h1>
            <p className="md:w-96 text-[#49566d] my-10">
              Our marketing and sales automations help you scale your outreach
              to get more leads for your company.
            </p>
            <button className="border-2 my-5 md:my-0 rounded-lg bg-[#172339] text-white hover:bg-transparent hover:text-black border-black px-8 py-3">
              Request Beta Access
            </button>
          </div>
          <div className="md:relative -z-10 right-32">
            <img src={phone} alt="" className="hidden md:block" />
            <img src={phoneMobile} alt="" className="md:hidden" />
          </div>
          <div className="text-start flex flex-col md:flex-row items-center justify-between w-full md:w-auto my-10 lg:block">
            <div>
              <p className="font-bold text-[#172339] text-6xl my-2">2k +</p>
              <span className="uppercase text-[#49566d]">companies</span>
            </div>
            <div className="my-5">
              <p className="font-bold text-[#172339] text-6xl my-2">8</p>
              <span className="uppercase text-[#49566d]">languages</span>
            </div>
            <div>
              <p className="font-bold text-[#172339] text-6xl my-2">1.2m</p>
              <span className="uppercase text-[#49566d]">leads</span>
            </div>
          </div>
        </section>

        <section
          className="bg-[#172339] lg:h-[39.2rem] justify-center lg:gap-40 rounded-lg mt-40 my-20 md:my-52 flex 
        flex-col lg:flex-row items-center text-white lg:text-start"
        >
          <div className="relative bottom-20 hidden lg:block">
            <img src={man} alt="" />
          </div>
          <div className="relative bottom-40 lg:hidden">
            <img src={manSmall} alt="" />
          </div>
          <div>
            <h2 className="font-semibold text-6xl my-10">It just works</h2>
            <p className="md:w-[35rem] lg:w-96 text-[#f3ede7] text-xl my-10">
              “I really like how it is an all-in-one solution that handle many
              of the tasks that you would normally need separate tools to do the
              same job. This thing is a miracle worker.”
            </p>
            <div>
              <p className="text-[#faf8f6] text-lg">JEREMY ROBINSON</p>
              <span className="text-[#f3ede7]">CMO, FYLO</span>
            </div>
          </div>
        </section>

        <footer className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between">
          <img src={logo} alt="" />
          <p>Copyright - Suite</p>
          <div className="flex gap-6">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
