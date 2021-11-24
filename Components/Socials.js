import React from "react";

export default function Socials() {
  return (
    <div className="Socials flex gap-6 items-center">
      <a className="social insta">
        <svg
          className="fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_191_2643)">
            <path
              d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0V0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
              fill="current"
            />
          </g>
          <defs>
            <clipPath id="clip0_191_2643">
              <rect width="24" height="24" fill="current" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <a className="social discord">
        <svg
          className="fill-current"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_191_2645)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.1685 0C22.6375 0 23.8335 1.196 23.8335 2.678V26L21.0385 23.53L19.4655 22.074L17.8015 20.527L18.4905 22.932H3.7485C2.2795 22.932 1.0835 21.736 1.0835 20.254V2.678C1.0835 1.196 2.2795 0 3.7485 0H21.1685V0ZM16.1505 16.978C19.0235 16.887 20.1285 15.002 20.1285 15.002C20.1285 10.816 18.2565 7.423 18.2565 7.423C16.3845 6.019 14.6035 6.058 14.6035 6.058L14.4215 6.266C16.6315 6.942 17.6585 7.917 17.6585 7.917C16.3065 7.176 14.9805 6.812 13.7455 6.669C12.8095 6.565 11.9125 6.591 11.1195 6.695L10.8985 6.721C10.4435 6.76 9.3385 6.929 7.9475 7.54C7.4665 7.761 7.1805 7.917 7.1805 7.917C7.1805 7.917 8.2595 6.89 10.5995 6.214L10.4695 6.058C10.4695 6.058 8.6885 6.019 6.8165 7.423C6.8165 7.423 4.9445 10.816 4.9445 15.002C4.9445 15.002 6.0365 16.887 8.9095 16.978C8.9095 16.978 9.3905 16.393 9.7805 15.899C8.1295 15.405 7.5055 14.365 7.5055 14.365L7.8695 14.586L7.9215 14.625L7.97241 14.6543L7.98758 14.6608L8.0385 14.69C8.3635 14.872 8.6885 15.015 8.9875 15.132C9.5205 15.34 10.1575 15.548 10.8985 15.691C11.8735 15.873 13.0175 15.938 14.2655 15.704C14.8765 15.6 15.5005 15.418 16.1505 15.145C16.6055 14.976 17.1125 14.729 17.6455 14.378C17.6455 14.378 16.9955 15.444 15.2925 15.925C15.6825 16.419 16.1505 16.978 16.1505 16.978ZM10.1055 10.907C9.3645 10.907 8.7795 11.557 8.7795 12.35C8.7795 13.143 9.3775 13.793 10.1055 13.793C10.8465 13.793 11.4315 13.143 11.4315 12.35C11.4445 11.557 10.8465 10.907 10.1055 10.907ZM14.8505 10.907C14.1095 10.907 13.5245 11.557 13.5245 12.35C13.5245 13.143 14.1225 13.793 14.8505 13.793C15.5915 13.793 16.1765 13.143 16.1765 12.35C16.1765 11.557 15.5915 10.907 14.8505 10.907Z"
              fill="current"
            />
          </g>
          <defs>
            <clipPath id="clip0_191_2645">
              <rect width="26" height="26" fill="current" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <a className="social twitter">
        <svg
          className="fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM18.066 9.645C18.249 13.685 15.236 18.189 9.902 18.189C8.28 18.189 6.771 17.713 5.5 16.898C7.024 17.078 8.545 16.654 9.752 15.709C8.496 15.686 7.435 14.855 7.068 13.714C7.519 13.8 7.963 13.775 8.366 13.665C6.985 13.387 6.031 12.143 6.062 10.812C6.45 11.027 6.892 11.156 7.363 11.171C6.084 10.316 5.722 8.627 6.474 7.336C7.89 9.074 10.007 10.217 12.394 10.337C11.975 8.541 13.338 6.81 15.193 6.81C16.018 6.81 16.765 7.159 17.289 7.717C17.943 7.589 18.559 7.349 19.113 7.02C18.898 7.691 18.443 8.253 17.85 8.609C18.431 8.539 18.985 8.385 19.499 8.156C19.115 8.734 18.629 9.24 18.066 9.645Z"
            fill="current"
          />
        </svg>
      </a>
    </div>
  );
}
