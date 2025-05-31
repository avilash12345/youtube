import React, { useState } from "react";
import "./Video.css";
import axios from "axios";
import Loader from "./Loader";

const Card = () => {
  const [url, setUrl] = useState("");
  // const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const geturl = (e) => {
    setUrl(e.target.value);
  };
  console.log(url);
  const download = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/download/video?url=${url}`
      );
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      setUrl("");
      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center mt-7">
        <div className="card ">
          <span className="card__title">YouTube Video Downloader</span>
          <p className="card__content">
            Get Highest quality video from youtube
          </p>
          <form className="card__form">
            <input
              required=""
              type="text"
              placeholder="Youtube Url"
              value={url}
              onChange={geturl}
            />
            <button className="card__button" onClick={download}>
              Download
            </button>
            {loading && (
              <div className="container">
                <Loader />
              </div>
            )}
            {success && (
              <>
                <p className="text-4xl text-amber-700">
                  download successfully.....
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Card;
