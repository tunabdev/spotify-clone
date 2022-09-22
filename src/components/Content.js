/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect } from "react";
import SpotifyPlaylistsJSON from "../api/SpotifyPlaylistsJSON.json";
import UykuJSON from "../api/UykuJSON.json";
import OthersJSON from "../api/OthersJSON.json";
import { Card } from "./Card";
import { Title } from "./Title";

export const Content = () => {
  return (
    <div className="grid px-8 pt-6 text-base font-bold text-white main-grad gap-y-6 tall:px-4">
      <section>
        {/*TITLE */}
        <Title titleElement="Spotify Playlists" seeAll underline />
        {/*PLAYLISTS */}
        <div className="grid grid-cols-8 5xl:grid-cols-7 4xl:grid-cols-6  gap-x-6 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  lg:gap-x-3  auto-rows-[0] grid-rows-[1fr] overflow-y-hidden">
          {SpotifyPlaylistsJSON.map(({ id, img, title, caption }) => (
            <Card key={id} id={id} img={img} title={title} caption={caption} />
          ))}
        </div>
      </section>
      {/* UNIQUE SELECTIONS */}
      <section className="min-h-[300px] mb-4 ">
        <Title titleElement="Benzersiz seçimlerin" />
      </section>
      {/*UYKU */}
      <section>
        <Title titleElement="Uyku" />
        <div className="grid grid-cols-8 5xl:grid-cols-7 4xl:grid-cols-6  gap-x-6 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  lg:gap-x-3  auto-rows-[0] grid-rows-[1fr] overflow-y-hidden">
          {UykuJSON.map(({ id, img, title, caption }) => (
            <Card key={id} id={id} img={img} title={title} caption={caption} />
          ))}
        </div>
      </section>
      {/*ODAKLAN */}
      <section>
        <Title titleElement="Odaklan" underline seeAll />
        <div className="grid grid-cols-8 5xl:grid-cols-7 4xl:grid-cols-6  gap-x-6 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  lg:gap-x-3  auto-rows-[0] grid-rows-[1fr] overflow-y-hidden">
          {OthersJSON.map(({ id, img, title, caption }) => (
            <Card key={id} id={id} img={img} title={title} caption={caption} />
          ))}
        </div>
      </section>
      {/*RUH HALI */}
      <section>
        <Title titleElement="Ruh Hali" underline seeAll />
        <div className="grid grid-cols-8 5xl:grid-cols-7 4xl:grid-cols-6  gap-x-6 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  lg:gap-x-3  auto-rows-[0] grid-rows-[1fr] overflow-y-hidden">
          {OthersJSON.map(({ id, img, title, caption }) => (
            <Card key={id} id={id} img={img} title={title} caption={caption} />
          ))}
        </div>
      </section>
      {/*Popüler Yeni Çıkanlar */}
      <section>
        <Title titleElement="Popüler yeni çıkanlar" underline seeAll />
        <div className="grid grid-cols-8 5xl:grid-cols-7 4xl:grid-cols-6  gap-x-6 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  lg:gap-x-3  auto-rows-[0] grid-rows-[1fr] overflow-y-hidden mb-8">
          {OthersJSON.map(({ id, img, title, caption }) => (
            <Card key={id} id={id} img={img} title={title} caption={caption} />
          ))}
        </div>
      </section>
    </div>
  );
};
