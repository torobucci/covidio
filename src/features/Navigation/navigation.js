import React from 'react';

const Navigation = () => (
  <div id="navbar" className="fixed top-0 w-full bg-cyan-950 p-3 navbar">
    <div className="container-fluid">
      <button type="button" className="bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </button>
    </div>
  </div>
);

export default Navigation;
