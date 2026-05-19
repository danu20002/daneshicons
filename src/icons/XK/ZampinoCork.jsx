import React from 'react';

export const iconData = {
  "id": "ZampinoCork",
  "name": "ZampinoCork",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.34 3.25 C 18.75 13.83, 19.30 18.21, 18.81 17.29"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 9.44 C 19.30 15.31, 13.49 19.29, 18.42 14.76"
      }
    ],
    [
      "path",
      {
        "d": "M 9.92 8.44 C 10.10 18.66, 9.06 8.44, 16.96 14.70"
      }
    ]
  ]
};

export const ZampinoCork = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.34 3.25 C 18.75 13.83, 19.30 18.21, 18.81 17.29" />
      <path d="M 7.69 9.44 C 19.30 15.31, 13.49 19.29, 18.42 14.76" />
      <path d="M 9.92 8.44 C 10.10 18.66, 9.06 8.44, 16.96 14.70" />
      {children}
    </svg>
  );
});

export default ZampinoCork;
