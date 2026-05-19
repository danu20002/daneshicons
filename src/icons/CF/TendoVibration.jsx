import React from 'react';

export const iconData = {
  "id": "TendoVibration",
  "name": "TendoVibration",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.32 2.79 C 15.89 18.48, 6.53 10.68, 21.69 14.41"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 9.39 C 6.09 10.80, 18.97 18.73, 16.27 17.65"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 4.25 C 15.60 4.30, 8.19 19.33, 21.27 21.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 4.20 C 4.86 11.66, 8.94 5.93, 17.78 21.97"
      }
    ]
  ]
};

export const TendoVibration = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.32 2.79 C 15.89 18.48, 6.53 10.68, 21.69 14.41" />
      <path d="M 4.30 9.39 C 6.09 10.80, 18.97 18.73, 16.27 17.65" />
      <path d="M 5.97 4.25 C 15.60 4.30, 8.19 19.33, 21.27 21.58" />
      <path d="M 7.73 4.20 C 4.86 11.66, 8.94 5.93, 17.78 21.97" />
      {children}
    </svg>
  );
});

export default TendoVibration;
