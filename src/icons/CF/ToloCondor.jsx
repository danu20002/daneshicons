import React from 'react';

export const iconData = {
  "id": "ToloCondor",
  "name": "ToloCondor",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.77 8.52 C 14.75 8.17, 6.27 7.72, 19.40 18.74"
      }
    ],
    [
      "path",
      {
        "d": "M 8.36 4.60 C 13.21 7.25, 15.19 16.88, 21.32 16.73"
      }
    ],
    [
      "path",
      {
        "d": "M 2.07 9.13 C 7.61 5.44, 4.55 17.20, 21.28 16.96"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 6.93 C 7.45 18.78, 16.57 16.95, 21.46 16.69"
      }
    ],
    [
      "path",
      {
        "d": "M 8.30 2.21 C 16.49 6.17, 15.42 4.48, 17.92 15.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 8.34 C 13.87 6.02, 9.54 10.60, 14.36 17.56"
      }
    ]
  ]
};

export const ToloCondor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.77 8.52 C 14.75 8.17, 6.27 7.72, 19.40 18.74" />
      <path d="M 8.36 4.60 C 13.21 7.25, 15.19 16.88, 21.32 16.73" />
      <path d="M 2.07 9.13 C 7.61 5.44, 4.55 17.20, 21.28 16.96" />
      <path d="M 3.86 6.93 C 7.45 18.78, 16.57 16.95, 21.46 16.69" />
      <path d="M 8.30 2.21 C 16.49 6.17, 15.42 4.48, 17.92 15.96" />
      <path d="M 7.16 8.34 C 13.87 6.02, 9.54 10.60, 14.36 17.56" />
      {children}
    </svg>
  );
});

export default ToloCondor;
