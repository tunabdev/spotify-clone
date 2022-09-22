/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const NowPlaying = () => {
  return (
    <div className="sticky bottom-0 left-0 z-30 h-[67px] pt-3 pb-2 pl-11 pr-6 preview-grad col-span-full text-white ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col font-normal gap-y-1">
          <span className="text-sm">SPOTİFY ÖNİZLEMESİ</span>
          <span className="font-semibold">
            Şarkı ve podcast'lere sınırsız erişim ve aralarda çıkan reklamlar
            için kaydol. Kredi kartına gerek yok.
          </span>
        </div>
        <div>
          <button className="relative px-8 py-3 font-bold text-black bg-white rounded-full hover:scale-[1.04] h-full">
            <a href="#">Ücretsiz kaydol</a>
          </button>
        </div>
      </div>
    </div>
  );
};
