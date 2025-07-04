import React from "react";
import "./Card.css";
import audio from "../assets/audio.jpg";
import video from "../assets/video.jpg";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="flex items-center justify-center mt-9">
          <h1 className="text-4xl">Download Video and Audio from Youtube </h1>
          <div>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                  <div class="sm:w-1/2 mb-10 px-4">
                    <div class="rounded-lg h-64 overflow-hidden">
                      <img
                        alt="content"
                        class="object-cover object-center h-full w-full"
                        src={video}
                      />
                    </div>
                    <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                      YouTube Videos
                    </h2>
                    <p class="leading-relaxed text-base">
                      Download any video from youtube
                    </p>
                    <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                      <Link to="/video"> Video</Link>
                    </button>
                  </div>
                  <div class="sm:w-1/2 mb-10 px-4">
                    <div class="rounded-lg h-64 overflow-hidden">
                      <img
                        alt="content"
                        class="object-cover object-center h-full w-full"
                        src={audio}
                      />
                    </div>
                    <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                      YouTube Audios
                    </h2>
                    <p class="leading-relaxed text-base">
                      Download any audio from youtube
                    </p>
                    <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                      <Link to="/audio">Audio</Link>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
