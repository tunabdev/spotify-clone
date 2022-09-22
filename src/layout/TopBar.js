/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
export const TopBar = () => {
  const [headerStyle, setHeaderStyle] = useState({
    transition: "all 100ms ease-in",
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log("curPosY: ", currPos.y);

      const isVisible = currPos.y < -100;

      const shouldBeStyle = {
        transition: `all 100ms ${isVisible ? "ease-in" : "ease-out"}`,
        backgroundColor: isVisible
          ? "#101010"
          : "rgb(16 16 16 / 0.9)",
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

      setHeaderStyle(shouldBeStyle);

      // if (currPos.y > -200) {
      //   setHeaderStyle({
      //     ...headerStyle,
      //     backgroundColor: "#070707",
      //   });
      // }
    },
    [headerStyle]
  );
  return (
    <div
      className="sticky top-0 z-[1000] flex items-center justify-between w-full h-16 px-8 py-4 text-base antialiased bg-[#101010]/[0.9] tall:px-4  "
      style={{ ...headerStyle }}
    >
      <div className="flex gap-x-4 ">
        <button className="flex items-center justify-center w-8 h-8 bg-black rounded-full ">
          <svg
            role="img"
            height="24"
            width="24"
            className="w-[22px] h-[22px] fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
          </svg>
        </button>
        <button className="flex items-center justify-center w-8 h-8 bg-black rounded-full">
          <svg
            role="img"
            height="24"
            width="24"
            className="w-[22px] h-[22px] fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
          </svg>
        </button>
      </div>
      <div className="">
        <button className="py-2 pl-2 pr-8  font-bold leading-normal  bg-transparent text-text-l-gray hover:text-white hover:scale-[1.03] transition-colors">
          <a href="#">
            <span className="">Kaydol</span>
          </a>
        </button>
        <button className="font-bold text-black  border-0  px-[30px] py-2 h-12     rounded-full  relative  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:-z-10 transition-colors before:rounded-full before:bg-white  before:hover:scale-[1.04] before:hover:bg-[#f6f6f6]   ">
          <span className="">Oturum aç</span>
        </button>
      </div>
    </div>
  );
};
