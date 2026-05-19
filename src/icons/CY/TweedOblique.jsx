import React from 'react';

export const iconData = {
  "id": "TweedOblique",
  "name": "TweedOblique",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.26 9.89 C 10.27 18.31, 17.52 15.20, 14.74 21.47"
      }
    ],
    [
      "path",
      {
        "d": "M 9.42 9.10 C 19.73 9.15, 15.53 5.84, 21.83 20.70"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 4.21 C 17.66 11.70, 11.76 19.16, 14.07 14.09"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 3.91 C 14.90 8.37, 16.42 11.35, 17.98 18.13"
      }
    ]
  ]
};

export const TweedOblique = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.26 9.89 C 10.27 18.31, 17.52 15.20, 14.74 21.47" />
      <path d="M 9.42 9.10 C 19.73 9.15, 15.53 5.84, 21.83 20.70" />
      <path d="M 7.69 4.21 C 17.66 11.70, 11.76 19.16, 14.07 14.09" />
      <path d="M 6.68 3.91 C 14.90 8.37, 16.42 11.35, 17.98 18.13" />
      {children}
    </svg>
  );
});

export default TweedOblique;
