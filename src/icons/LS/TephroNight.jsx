import React from 'react';

export const iconData = {
  "id": "TephroNight",
  "name": "TephroNight",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.22 6.13 C 12.92 15.51, 11.28 14.29, 19.82 16.48"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 8.97 C 18.34 4.64, 11.33 4.81, 15.18 17.12"
      }
    ],
    [
      "path",
      {
        "d": "M 4.53 5.67 C 15.34 12.55, 5.67 10.65, 21.71 16.78"
      }
    ],
    [
      "path",
      {
        "d": "M 8.77 4.59 C 4.01 4.45, 12.86 5.16, 15.86 18.84"
      }
    ]
  ]
};

export const TephroNight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.22 6.13 C 12.92 15.51, 11.28 14.29, 19.82 16.48" />
      <path d="M 5.01 8.97 C 18.34 4.64, 11.33 4.81, 15.18 17.12" />
      <path d="M 4.53 5.67 C 15.34 12.55, 5.67 10.65, 21.71 16.78" />
      <path d="M 8.77 4.59 C 4.01 4.45, 12.86 5.16, 15.86 18.84" />
      {children}
    </svg>
  );
});

export default TephroNight;
