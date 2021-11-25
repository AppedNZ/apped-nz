import React from "react";
const tiles = [
  "/assets/tiles/1.jpg",
  "/assets/tiles/2.jpg",
  "/assets/tiles/3.jpg",
  "/assets/tiles/4.jpg",
  "/assets/tiles/5.jpg",
  "/assets/tiles/6.jpg",
  "/assets/tiles/7.jpg",
  "/assets/tiles/8.jpg",
  "/assets/tiles/9.jpg",
  "/assets/tiles/10.jpg",
  "/assets/tiles/11.jpg",
  "/assets/tiles/12.jpg",
  "/assets/tiles/13.jpg",
  "/assets/tiles/14.jpg",
  "/assets/tiles/15.jpg",
  "/assets/tiles/16.jpg",
  "/assets/tiles/17.jpg",
  "/assets/tiles/18.jpg",
  "/assets/tiles/19.jpg",
  "/assets/tiles/20.jpg",
];
export default function Tiles() {
  return (
    <div className="Tiles">
      {tiles.map((tile, i) => (
        <div key={i} className="Tiles__wrap">
          <img className="Tiles__tile" src={tile} alt="App example" />
        </div>
      ))}
    </div>
  );
}
