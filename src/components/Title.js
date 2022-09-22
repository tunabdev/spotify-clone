/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import React from "react";

export const Title = ({ titleElement, seeAll, underline }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6 ">
        <a
          href="#"
          className={clsx("text-2xl", underline && "hover:underline")}
        >
          <h2>{titleElement}</h2>
        </a>
        <a href="#" className="text-xs text-light-gray hover:underline">
          {seeAll ? <span>HEPSİNİ GÖR</span> : ""}
        </a>
      </div>
    </>
  );
};
