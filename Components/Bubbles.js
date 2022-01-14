import React from "react";

export default function Bubbles() {
  return (
    <div className="absolute top-0 left-0 h-full w-full">
      <img
        className="bubble w-1/12 h-auto absolute top-20 left-10"
        src="/assets/bubble.svg"
        alt="bubble"
      />
      <img
        className="bubble w-1/12 h-auto absolute top-1/4 right-10"
        src="/assets/bubble.svg"
        alt="bubble"
      />
      <img
        className="bubble w-1/12 h-auto absolute top-1/2 left-4"
        src="/assets/bubble.svg"
        alt="bubble"
      />
      <img
        className="bubble w-1/12 h-auto absolute top-3/4 left-4"
        src="/assets/bubble.svg"
        alt="bubble"
      />
      <img
        className="bubble w-1/12 h-auto absolute top-[85%] right-4"
        src="/assets/bubble.svg"
        alt="bubble"
      />
      <img
        className="bubble w-1/12 h-auto absolute top-20 left-10"
        src="/assets/bubble.svg"
        alt="bubble"
      />
      {/* <img
        className="bubble w-1/12 h-auto absolute top-20 left-10"
        src="/assets/bubble.svg"
        alt="bubble"
      />
      <img
        className="bubble w-1/12 h-auto absolute top-20 left-10"
        src="/assets/bubble.svg"
        alt="bubble"
      /> */}
    </div>
  );
}
