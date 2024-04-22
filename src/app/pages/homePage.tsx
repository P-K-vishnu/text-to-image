import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className=" bg-slate-600 fixed w-full z-20 top-0 start-0 bg-clip-padding backdrop-filter backdrop-blur-md  bg-opacity-20  rounded-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              className="dark:invert h-auto w-auto"
              width={50}
              height={50}
              priority
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              LINE.AI
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center ">
              SIGNUP
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              SIGNIN
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Gallary
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Tools
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className=" relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] ">
        {true ? (
          <div
            className=" flex  flex-wrap"
            style={{
              height: '70vh',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100vh',
            }}>
            <div className=" flex-1 h-4/5  min-w-80 flex justify-center items-center">
              <div className=" h-4/5 w-4/5  bg-slate-600 backdrop-filter backdrop-blur-md  bg-opacity-20 rounded-lg flex flex-wrap overflow-hidden">
                <Image
                  src="/window1.jpg"
                  alt="Vercel Logo"
                  style={{
                    objectFit: 'contain',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
            <a className=" h-14 w-14 bg-slate-100 rounded-lg absolute bg-opacity-60 flex items-center justify-center right-10">
              <Image
                src="/Download.svg"
                width={45}
                height={45}
                priority
                alt={'download'}
              />
            </a>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '70vh',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100vh',
            }}>
            <div className="flex items-center z-10 space-x-3 rtl:space-x-reverse">
              <Image
                src="/logo.png"
                alt="Vercel Logo"
                className="dark:invert opacity-10 mix-blend-overlay"
                width={300}
                height={300}
                priority
              />
            </div>
            <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white">
              Text to image with AI Art Generator
            </span>
            <span className="self-center text-lg whitespace-nowrap text-wrap text-center mt-5 dark:text-slate-500">
              Create awe-inspiring masterpieces effortlessly and explore the
              endless possibilities of AI generated art. Enter a prompt, choose
              a style, and watch ImagineArt - AI art generator bring your ideas
              to life!{' '}
            </span>
          </div>
        )}
        <form className=" relative w-full z-10">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Enter your prompt
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Image
                className="dark:invert"
                src={'/three-black-stars-sparkling.svg'}
                alt={'lal'}
                width={20}
                height={20}
              />
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-10 pe-28run  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your prompts"
            />
            <button
              type="submit"
              className=" text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Generate
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
