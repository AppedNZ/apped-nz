import React from "react";
import ContactForm from "./ContactForm";

export default function ModalContact({ showForm, setShowForm }) {
  return (
    <div
      onClick={() => {
        setShowForm(false);
      }}
      className={`fixed top-0 left-0 w-screen h-screen z-30 bg-black/50 flex justify-center items-center transition-opacity ${
        showForm ? "pointer-events-auto opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full max-w-lg p-4 bg-navy shadow-lg relative"
      >
        <div className="flex justify-between items-center mb-4">
          <p className="text-white text-2xl font-bold">Get in touch</p>
          <div
            onClick={() => {
              setShowForm(false);
            }}
            className="w-6 h-6 relative cursor-pointer"
          >
            <div className="absolute h-1 w-full top-3 bg-white rotate-45"></div>
            <div className="absolute h-1 w-full top-3 bg-white  rotate-[-45deg]"></div>
          </div>
        </div>
        <ContactForm
          onSubmit={() => {
            setShowForm(false);
          }}
        />
      </div>
    </div>
  );
}
