import React from 'react';

export const iconData = {
  "id": "RacioWeight",
  "name": "RacioWeight",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.78 5.61 C 16.71 4.75, 4.14 15.11, 21.04 17.39"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 8.57 C 14.63 13.63, 7.01 9.39, 17.42 16.23"
      }
    ],
    [
      "path",
      {
        "d": "M 2.34 4.05 C 16.04 18.74, 10.14 9.53, 17.01 21.91"
      }
    ]
  ]
};

export const RacioWeight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.78 5.61 C 16.71 4.75, 4.14 15.11, 21.04 17.39" />
      <path d="M 5.65 8.57 C 14.63 13.63, 7.01 9.39, 17.42 16.23" />
      <path d="M 2.34 4.05 C 16.04 18.74, 10.14 9.53, 17.01 21.91" />
      {children}
    </svg>
  );
});

export default RacioWeight;
