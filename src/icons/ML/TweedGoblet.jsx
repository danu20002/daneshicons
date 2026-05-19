import React from 'react';

export const iconData = {
  "id": "TweedGoblet",
  "name": "TweedGoblet",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.47 9.17 C 15.70 17.66, 11.02 7.89, 21.44 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 9.59 4.63 C 9.75 18.13, 9.97 8.65, 15.68 19.41"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 2.26 C 9.83 18.96, 18.09 5.21, 20.93 20.06"
      }
    ]
  ]
};

export const TweedGoblet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.47 9.17 C 15.70 17.66, 11.02 7.89, 21.44 20.22" />
      <path d="M 9.59 4.63 C 9.75 18.13, 9.97 8.65, 15.68 19.41" />
      <path d="M 4.94 2.26 C 9.83 18.96, 18.09 5.21, 20.93 20.06" />
      {children}
    </svg>
  );
});

export default TweedGoblet;
