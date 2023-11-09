////////////////////////////
// Global
////////////////////////////

import PropTypes from "prop-types";

////////////////////////////
// Components
////////////////////////////

////////////////////////////
// Body
////////////////////////////

function Logo({ theme = "blue" }) {
  if (theme === "purple") {
    return (
      <svg
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1111 6.1111V0.777771L1 10.2222V15.5555L5.73856 12.7778L17.1111 6.1111Z"
          fill="#6F1676"
        />
        <path
          d="M17.1111 0.777771V6.1111L28.4444 12.6667L33 10.2222L17.1111 0.777771Z"
          fill="#94439D"
        />
        <path
          d="M33 10.2222L28.4444 12.6667L25.286 14.5555L20.6667 17.3181L17.1111 19.4444V24.7778L25.3333 20.0054L29.7456 17.4444L33 15.5555V10.2222Z"
          fill="#6F1676"
        />
        <path
          d="M33 19.4444L28.4444 22L17.1111 28.5555V33.8889L33 24.5555V19.4444Z"
          fill="#6F1676"
        />
        <path
          d="M17.1111 24.7778V19.4444L13.4444 17.4444L8.88889 20.1111L17.1111 24.7778Z"
          fill="#94439D"
        />
        <path
          d="M1 15.5555L4.11111 17.4444L8.88889 14.5555L5.73856 12.7778L1 15.5555Z"
          fill="#94439D"
        />
        <path
          d="M17.1111 33.8889V28.5555L5.66667 21.8889L1.11111 24.6667L17.1111 33.8889Z"
          fill="#94439D"
        />
        <path
          d="M25.286 14.5555L17.1111 9.88888V15.3333L20.6667 17.3181L25.286 14.5555Z"
          fill="#94439D"
        />
        <path
          d="M33 19.4444L29.7456 17.4444L25.3333 20.0054L28.4444 22L33 19.4444Z"
          fill="#94439D"
        />
        <path
          d="M8.88889 14.5555L4.11111 17.4444L1.11111 19.2222V24.6667L5.66667 21.8889L8.88889 20.1111L13.4444 17.4444L17.1111 15.3333V9.88888L8.88889 14.5555Z"
          fill="#6F1676"
        />
        <path
          d="M17.1111 0.777771V6.1111M17.1111 0.777771L33 10.2222M17.1111 0.777771L1 10.2222V15.5555M17.1111 6.1111L28.4444 12.6667M17.1111 6.1111L5.73856 12.7778M28.4444 12.6667L33 10.2222M28.4444 12.6667L25.286 14.5555M33 10.2222V15.5555L29.7456 17.4444M17.1111 24.7778V19.4444M17.1111 24.7778L8.88889 20.1111M17.1111 24.7778L25.3333 20.0054M17.1111 19.4444L13.4444 17.4444M17.1111 19.4444L20.6667 17.3181M1 15.5555L4.11111 17.4444M1 15.5555L5.73856 12.7778M4.11111 17.4444L8.88889 14.5555M4.11111 17.4444L1.11111 19.2222V24.6667M8.88889 14.5555L5.73856 12.7778M8.88889 14.5555L17.1111 9.88888M8.88889 20.1111L13.4444 17.4444M8.88889 20.1111L5.66667 21.8889M13.4444 17.4444L17.1111 15.3333M29.7456 17.4444L33 19.4444M29.7456 17.4444L25.3333 20.0054M33 19.4444L28.4444 22M33 19.4444V24.5555L17.1111 33.8889M28.4444 22L25.3333 20.0054M28.4444 22L17.1111 28.5555M17.1111 33.8889V28.5555M17.1111 33.8889L1.11111 24.6667M17.1111 28.5555L5.66667 21.8889M5.66667 21.8889L1.11111 24.6667M17.1111 9.88888L25.286 14.5555M17.1111 9.88888V15.3333M25.286 14.5555L20.6667 17.3181M17.1111 15.3333L20.6667 17.3181"
          stroke="#911A9B"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.1111 6.33333V1L1 10.4444V15.7778L5.73856 13L17.1111 6.33333Z" fill="#21598B" />
        <path d="M17.1111 1V6.33333L28.4444 12.8889L33 10.4444L17.1111 1Z" fill="#3F87AD" />
        <path
          d="M33 10.4444L28.4444 12.8889L25.286 14.7778L20.6667 17.5403L17.1111 19.6667V25L25.3333 20.2277L29.7456 17.6667L33 15.7778V10.4444Z"
          fill="#21598B"
        />
        <path
          d="M33 19.6667L28.4444 22.2222L17.1111 28.7778V34.1111L33 24.7778V19.6667Z"
          fill="#21598B"
        />
        <path d="M17.1111 25V19.6667L13.4444 17.6667L8.88889 20.3333L17.1111 25Z" fill="#3F87AD" />
        <path d="M1 15.7778L4.11111 17.6667L8.88889 14.7778L5.73856 13L1 15.7778Z" fill="#3F87AD" />
        <path
          d="M17.1111 34.1111V28.7778L5.66667 22.1111L1.11111 24.8889L17.1111 34.1111Z"
          fill="#3F87AD"
        />
        <path
          d="M25.286 14.7778L17.1111 10.1111V15.5556L20.6667 17.5403L25.286 14.7778Z"
          fill="#3F87AD"
        />
        <path
          d="M33 19.6667L29.7456 17.6667L25.3333 20.2277L28.4444 22.2222L33 19.6667Z"
          fill="#3F87AD"
        />
        <path
          d="M8.88889 14.7778L4.11111 17.6667L1.11111 19.4444V24.8889L5.66667 22.1111L8.88889 20.3333L13.4444 17.6667L17.1111 15.5556V10.1111L8.88889 14.7778Z"
          fill="#21598B"
        />
        <path
          d="M17.1111 1V6.33333M17.1111 1L33 10.4444M17.1111 1L1 10.4444V15.7778M17.1111 6.33333L28.4444 12.8889M17.1111 6.33333L5.73856 13M28.4444 12.8889L33 10.4444M28.4444 12.8889L25.286 14.7778M33 10.4444V15.7778L29.7456 17.6667M17.1111 25V19.6667M17.1111 25L8.88889 20.3333M17.1111 25L25.3333 20.2277M17.1111 19.6667L13.4444 17.6667M17.1111 19.6667L20.6667 17.5403M1 15.7778L4.11111 17.6667M1 15.7778L5.73856 13M4.11111 17.6667L8.88889 14.7778M4.11111 17.6667L1.11111 19.4444V24.8889M8.88889 14.7778L5.73856 13M8.88889 14.7778L17.1111 10.1111M8.88889 20.3333L13.4444 17.6667M8.88889 20.3333L5.66667 22.1111M13.4444 17.6667L17.1111 15.5556M29.7456 17.6667L33 19.6667M29.7456 17.6667L25.3333 20.2277M33 19.6667L28.4444 22.2222M33 19.6667V24.7778L17.1111 34.1111M28.4444 22.2222L25.3333 20.2277M28.4444 22.2222L17.1111 28.7778M17.1111 34.1111V28.7778M17.1111 34.1111L1.11111 24.8889M17.1111 28.7778L5.66667 22.1111M5.66667 22.1111L1.11111 24.8889M17.1111 10.1111L25.286 14.7778M17.1111 10.1111V15.5556M25.286 14.7778L20.6667 17.5403M17.1111 15.5556L20.6667 17.5403"
          stroke="#276DAD"
        />
      </svg>
    );
  }
}

// Props
Logo.propTypes = {
  theme: PropTypes.string,
};

export default Logo;
