'use client';
import Image from 'next/image';

import fs from 'fs';

import axios from 'axios';

import {useState, useEffect} from 'react';

import FormData from 'form-data';

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [genImage, setGenImage] = useState<any>(null);
  const [imgBuffer, SetImgBuffer] = useState<any>(null);
  const [loader, SetLoader] = useState(false);
  const [card, SetCard] = useState([{Image: genImage, Prompt: userInput}]);
  const [curPage, setCurPage] = useState(1);
  // let link; // = document.createElement('a');

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent default form submission

    console.log('generating');

    const textData = userInput; // Access the current state value

    // Call your API using the textData

    // setGenImage(null);

    const data = {
      prompt: userInput,
      aspect_ratio: '16:9',
    };

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.stability.ai/v2beta/stable-image/generate/core',
      validateStatus: undefined,
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'image/*',
        Authorization:
          'Bearer sk-tbknNLCKPIkhwy0j41QREse3BUhRcMMKcj8RF8V8Aqcches2',
      },

      data: data,
    };

    const response = await axios.postForm(
      `https://api.stability.ai/v2beta/stable-image/generate/core`,
      axios.toFormData(data, new FormData()),
      {
        validateStatus: undefined,
        responseType: 'arraybuffer',
        headers: {
          Authorization: `Bearer sk-tbknNLCKPIkhwy0j41QREse3BUhRcMMKcj8RF8V8Aqcches2`,
          Accept: 'image/*',
        },
      },
    );

    if (response.status === 200) {
      // console.log('saving');

      // fs.writeFileSync('./image.jpg', Buffer.from(response.data));

      // Adjust content type as needed

      const base64String = Buffer.from(response.data).toString('base64');
      const dataURI = `data:image/png;base64,${base64String}`;
      setGenImage(dataURI);

      SetImgBuffer(response.data);

      // const blob = new Blob([Buffer.from(response.data)], {
      //   type: 'image/png',
      // });
      // const url = URL.createObjectURL(blob);

      // const link = document.createElement('a');
      // link.href = url;
      // link.download = 'my-image.png'; // Customize the filename
      // link.click();
      // URL.revokeObjectURL(url);
    } else {
      throw new Error(`${response.status}: ${response.data.toString()}`);
    }

    // const handleDownload = () => {
    //   link.download = 'my-image.png';
    // };

    // axios
    //   .request(config)
    //   .then((response) => {
    //     // console.log(JSON.stringify(response.data));
    //     // console.log('data', response.data[0].asset_url);

    //     // setGenImage(response.data[0].asset_url);

    //     if (response.status === 200) {
    //       console.log('image');

    //       fs.writeFileSync('./image.webp', Buffer.from(response.data));
    //     } else {
    //       throw new Error(`${response.status}: ${response.data.toString()}`);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // console.log('promopt :', textData);

    // const resp = await fetch(`https://api.limewire.com/api/image/generation`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'X-Api-Version': 'v1',
    //     Accept: 'application/json',
    //     Authorization:
    //       'Bearer lmwr_sk_gY0gDsjWzM_PSBfjJX8B8WPZn2dtb3HsibBRt3p63cMzNezc',
    //   },
    //   mode: 'no-cors',
    //   body: JSON.stringify({
    //     prompt: textData,
    //     aspect_ratio: '1:1',
    //   }),
    // });

    // console.log(resp);

    // const data = await resp.json();

    // if (resp.status === 401) {
    //   console.log('unauth');
    //   return;
    // }

    // const response = await callYourAPI(textData);

    // Handle the API response (optional)

    // console.log(userInput); // prompt
  };

  const downImg = () => {
    // link.download = 'my-image.png';
    const blob = new Blob([Buffer.from(imgBuffer)], {
      type: 'image/png',
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'image.png'; // Customize the filename
    link.click();
    URL.revokeObjectURL(url);
  };

  function ImageCard(props: any) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#f5f6fa',
          minWidth: '350px',
          maxWidth: '350px',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
        <div
          style={{
            position: 'relative',
            backgroundColor: 'red',
            width: '100%',
            height: '250px',
            overflow: 'hidden',
          }}>
          <Image
            src={props.image ? props.image : '/window1.jpg'}
            alt="Vercel Logo"
            fill={true}
            style={{
              objectFit: 'cover',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            priority
          />
          <div
            style={{position: 'absolute'}}
            className="absolute top-2 left-2 bg-white bg-opacity-50 h-7 w-7 flex items-center justify-center rounded-md">
            <button style={{zIndex: 20}} onClick={() => {}}>
              <Image
                src="/Download.svg"
                width={25}
                height={25}
                priority
                alt={'download'}
              />
            </button>
          </div>
          <div className="absolute top-14 left-2 bg-white bg-opacity-50 h-7 w-7 flex items-center justify-center rounded-md">
            <button style={{zIndex: 20}} onClick={() => {}}>
              <Image
                src="/copyDoc.svg"
                width={22}
                height={22}
                priority
                alt={'download'}
              />
            </button>
          </div>
        </div>
        <div
          style={{
            background: 'white',
            color: 'black',
            paddingInline: '10px',
            paddingBlock: '5px',
            // paddingBottom: '15px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
          }}>
          <h3 className="text-ellipsis line-clamp-3">{props.prompt}</h3>
        </div>
      </div>
    );
  }

  useEffect(() => {
    SetCard([...card, {Image: genImage, Prompt: userInput}]);
    // console.log(card);
    // console.log('local', localStorage);
  }, [genImage]);

  // useEffect(() => {
  //   localStorage.setItem('card', JSON.stringify(card));
  // }, [card]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('card'));
  //   if (items) {
  //     SetCard(items);
  //   }
  // }, []);

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
            <span className=" hidden md:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
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
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  onClick={() => setCurPage(1)}
                  className={`block py-2 px-3 ${
                    curPage === 1 ? 'text-blue-600' : 'text-white'
                  } rounded`}
                  aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => setCurPage(2)}
                  className={`block py-2 px-3 ${
                    curPage === 2 ? 'text-blue-600' : 'text-white'
                  } rounded`}
                  aria-current="page">
                  Gallary
                </a>
              </li>
              <li>
                <a
                  onClick={() => setCurPage(3)}
                  className={`block py-2 px-3 ${
                    curPage === 3 ? 'text-blue-600' : 'text-white'
                  } rounded`}
                  aria-current="page">
                  Tools
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className=" relative flex flex-col place-items-center before:absolute before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 md:before:w-[480px] md:after:w-[240px] before:lg:h-[360px] ">
        {curPage === 2 ? (
          <>
            <div className={`flex flex-row gap-4 flex-wrap justify-center  `}>
              {card.map((item, i) =>
                item.Image !== null && item.Prompt !== '' ? (
                  <ImageCard key={i} image={item.Image} prompt={item.Prompt} />
                ) : (
                  <></>
                ),
              )}
            </div>
          </>
        ) : (
          <>
            {userInput !== '' && genImage !== null ? (
              <div
                className=" flex  flex-wrap"
                style={{
                  height: '70vh',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100vw',
                }}>
                <div className=" flex-1 h-4/5  min-w-80 flex justify-center items-center">
                  <div className=" h-4/5 w-4/5  bg-slate-600 backdrop-filter backdrop-blur-md  bg-opacity-20 rounded-lg flex flex-wrap overflow-hidden">
                    <Image
                      src={genImage ? genImage : '/window1.jpg'}
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
                <a
                  onClick={downImg}
                  className=" h-14 w-14 bg-slate-100 rounded-lg absolute bg-opacity-60 flex items-center justify-center lg:right-5">
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
                  width: '100vw',
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
                <span className=" w-10/12 self-center text-lg md:text-3xl lg:text-5xl  font-semibold whitespace-nowrap text-wrap text-center dark:text-white">
                  Text to image with AI Art Generator
                </span>
                <span className=" w-8/12 self-center text-xs md:text-sm lg:text-lg whitespace-nowrap text-wrap text-center mt-5 dark:text-slate-500">
                  Create awe-inspiring masterpieces effortlessly and explore the
                  endless possibilities of AI generated art. Enter a prompt,
                  choose a style, and watch ImagineArt - AI art generator bring
                  your ideas to life!{' '}
                </span>
              </div>
            )}
            <form
              className=" relative w-4/5 z-10"
              onSubmit={event => handleSubmit(event)}>
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
                  value={userInput}
                  onChange={event => setUserInput(event.target.value)}
                  className="block w-full pr-28 p-4 ps-10 pe-28run  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your prompts"
                />
                <button
                  type="submit"
                  className=" text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Generate
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
