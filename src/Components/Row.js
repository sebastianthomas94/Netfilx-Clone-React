import axios from "axios";
import { useEffect, useState, useRef } from "react";
import requests from "../Config";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setData(res.data.results);
    });
  }, [props.url]);
  const sliderRef = useRef(null);

  const slideLeft = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft -= 500;
    }
  };
  const slideRight = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft += 500;
    }
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{props.title}</h2>
      <div className="relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white rounded-full opacity-0 hover:opacity-100 cursor-pointer"
          size={40}
        />
        <div
          id={"slider"}
          ref={sliderRef}
          className="w-full h-full overflow-hidden overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item, index) => {
            return (
              <div
                key={item?.id}
                className="w-[160px sm:w-[240px] lg:w-[280px] inline-block"
              >
                <img
                  className="w-full h-auto block px-2 py-2"
                  src={requests.imageUrlRow + item?.backdrop_path}
                  alt={item?.title}
                  key={index}
                />
              </div>
            );
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full opacity-0 hover:opacity-100 cursor-pointer "
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
