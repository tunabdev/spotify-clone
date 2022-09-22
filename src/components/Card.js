import React from "react";

export const Card = ({ id, title, img, caption, ...props }) => {
  return (
    <>
      <div
        key={id}
        className="flex flex-col flex-1 p-4 whitespace-normal transition-colors rounded-md cursor-pointer text-ellipsis gap-y-4 hover:bg-card-hover bg-card-bg group"
      >
        <div className="relative ">
          <img
            className="object-contain rounded-lg shadow-card "
            src={img}
            alt={title}
          />
          <button className="bottom-0 right-2 opacity-0 group-hover:opacity-100 absolute z-30 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full cursor-default group-hover:-translate-y-2 hover:scale-[1.05] hover:bg-green-400 transition-all">
            <svg
              role="img"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-black "
            >
              <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col text-sm gap-y-2 min-h-[62px] leading-relaxed ">
          <span href="#" className="text-sm text-white line-clamp-1">
            <h2>{title}</h2>
          </span>
          <span className="font-normal  line-clamp-2 text-light-gray">
            {caption}
          </span>
        </div>
      </div>
    </>
  );
};
