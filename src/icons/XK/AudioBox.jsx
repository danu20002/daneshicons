import React from 'react';

export const iconData = {
  "id": "AudioBox",
  "name": "AudioBox",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.71 8.31 C 8.41 11.06, 8.44 10.61, 19.99 19.58"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 6.42 C 10.82 4.35, 10.76 8.54, 15.96 21.42"
      }
    ],
    [
      "path",
      {
        "d": "M 9.12 6.75 C 14.61 4.37, 16.50 9.97, 19.52 15.52"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 7.77 C 7.44 16.71, 7.27 13.58, 19.33 19.21"
      }
    ],
    [
      "path",
      {
        "d": "M 8.59 9.56 C 15.53 15.32, 5.24 13.11, 18.30 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 7.90 2.26 C 19.41 8.76, 13.25 8.21, 21.82 20.20"
      }
    ]
  ]
};

export const AudioBox = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.71 8.31 C 8.41 11.06, 8.44 10.61, 19.99 19.58" />
      <path d="M 4.49 6.42 C 10.82 4.35, 10.76 8.54, 15.96 21.42" />
      <path d="M 9.12 6.75 C 14.61 4.37, 16.50 9.97, 19.52 15.52" />
      <path d="M 6.60 7.77 C 7.44 16.71, 7.27 13.58, 19.33 19.21" />
      <path d="M 8.59 9.56 C 15.53 15.32, 5.24 13.11, 18.30 20.19" />
      <path d="M 7.90 2.26 C 19.41 8.76, 13.25 8.21, 21.82 20.20" />
      {children}
    </svg>
  );
});

export default AudioBox;
