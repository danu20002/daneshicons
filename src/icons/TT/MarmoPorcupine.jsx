import React from 'react';

export const iconData = {
  "id": "MarmoPorcupine",
  "name": "MarmoPorcupine",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.97 2.66 C 8.68 14.33, 13.85 7.78, 14.36 19.88"
      }
    ],
    [
      "path",
      {
        "d": "M 2.38 2.44 C 5.43 4.75, 19.21 13.58, 20.47 17.26"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 3.72 C 7.60 18.63, 6.56 11.45, 19.60 15.83"
      }
    ],
    [
      "path",
      {
        "d": "M 8.37 5.86 C 4.15 13.14, 7.75 4.22, 19.56 20.20"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 5.36 C 8.59 15.05, 8.17 11.25, 16.17 17.33"
      }
    ]
  ]
};

export const MarmoPorcupine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.97 2.66 C 8.68 14.33, 13.85 7.78, 14.36 19.88" />
      <path d="M 2.38 2.44 C 5.43 4.75, 19.21 13.58, 20.47 17.26" />
      <path d="M 7.66 3.72 C 7.60 18.63, 6.56 11.45, 19.60 15.83" />
      <path d="M 8.37 5.86 C 4.15 13.14, 7.75 4.22, 19.56 20.20" />
      <path d="M 6.58 5.36 C 8.59 15.05, 8.17 11.25, 16.17 17.33" />
      {children}
    </svg>
  );
});

export default MarmoPorcupine;
