import { useState, useEffect } from "react";
import requests from "../Config";
import axios from "axios";
const Main = () => {
  const [data, setData] = useState([]);

  const movieData = data[Math.floor(Math.random() * data.length)];
  useEffect(() => {
    axios.get(requests.requestTrending).then((res) => {
      setData(res.data.results);
    });
  }, []);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover"
          src={requests.imageUrl + movieData?.backdrop_path}
          alt={movieData?.title}
        />
      </div>
      <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">{movieData?.title}</h1>
        <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 mt-3">
          Play
        </button>
        <button className="border text-white border-gray-300 py-2 px-5 ml-4 mt-3">
          Watch Later
        </button>
        <p className="text-gray-400 text-sm mt-3">
          Released :{movieData?.release_date}
        </p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]  text-gray-200 mt-3">
          Released :{movieData?.overview}
        </p>
      </div>
    </div>
  );
};

export default Main;
