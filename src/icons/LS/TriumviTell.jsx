import React from 'react';

export const iconData = {
  "id": "TriumviTell",
  "name": "TriumviTell",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.17 3.69 C 8.61 14.44, 18.93 7.35, 15.08 15.51"
      }
    ],
    [
      "path",
      {
        "d": "M 2.38 8.52 C 16.12 16.74, 17.03 14.57, 16.20 15.28"
      }
    ],
    [
      "path",
      {
        "d": "M 4.99 4.44 C 11.79 9.39, 5.69 8.69, 16.65 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 9.40 C 4.80 6.27, 12.05 13.76, 20.41 20.26"
      }
    ],
    [
      "path",
      {
        "d": "M 8.07 7.93 C 19.72 8.10, 19.17 18.92, 15.39 18.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.23 6.61 C 17.75 7.41, 16.44 13.07, 14.64 21.46"
      }
    ]
  ]
};

export const TriumviTell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.17 3.69 C 8.61 14.44, 18.93 7.35, 15.08 15.51" />
      <path d="M 2.38 8.52 C 16.12 16.74, 17.03 14.57, 16.20 15.28" />
      <path d="M 4.99 4.44 C 11.79 9.39, 5.69 8.69, 16.65 18.26" />
      <path d="M 5.46 9.40 C 4.80 6.27, 12.05 13.76, 20.41 20.26" />
      <path d="M 8.07 7.93 C 19.72 8.10, 19.17 18.92, 15.39 18.61" />
      <path d="M 7.23 6.61 C 17.75 7.41, 16.44 13.07, 14.64 21.46" />
      {children}
    </svg>
  );
});

export default TriumviTell;
