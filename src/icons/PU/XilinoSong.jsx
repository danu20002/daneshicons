import React from 'react';

export const iconData = {
  "id": "XilinoSong",
  "name": "XilinoSong",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.47 12.00 a 7.53 7.53 0 1 0 15.05 0 a 7.53 7.53 0 1 0 -15.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.22 12.00 a 5.78 5.78 0 1 1 11.56 0 a 5.78 5.78 0 1 1 -11.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 12.00 L 21.03 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.38 16.52 L 18.91 17.80"
      }
    ],
    [
      "path",
      {
        "d": "M 13.22 18.92 L 13.57 20.89"
      }
    ],
    [
      "path",
      {
        "d": "M 8.49 18.08 L 7.49 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 14.40 L 3.52 15.09"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 9.60 L 3.52 8.91"
      }
    ],
    [
      "path",
      {
        "d": "M 8.49 5.92 L 7.49 4.18"
      }
    ],
    [
      "path",
      {
        "d": "M 13.22 5.08 L 13.57 3.11"
      }
    ],
    [
      "path",
      {
        "d": "M 17.38 7.48 L 18.91 6.20"
      }
    ]
  ]
};

export const XilinoSong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 4.47 12.00 a 7.53 7.53 0 1 0 15.05 0 a 7.53 7.53 0 1 0 -15.05 0" />
      <path d="M 6.22 12.00 a 5.78 5.78 0 1 1 11.56 0 a 5.78 5.78 0 1 1 -11.56 0" />
      <path d="M 19.03 12.00 L 21.03 12.00" />
      <path d="M 17.38 16.52 L 18.91 17.80" />
      <path d="M 13.22 18.92 L 13.57 20.89" />
      <path d="M 8.49 18.08 L 7.49 19.82" />
      <path d="M 5.40 14.40 L 3.52 15.09" />
      <path d="M 5.40 9.60 L 3.52 8.91" />
      <path d="M 8.49 5.92 L 7.49 4.18" />
      <path d="M 13.22 5.08 L 13.57 3.11" />
      <path d="M 17.38 7.48 L 18.91 6.20" />
      {children}
    </svg>
  );
});

export default XilinoSong;
