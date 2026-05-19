import React from 'react';

export const iconData = {
  "id": "ReactoRest",
  "name": "ReactoRest",
  "category": "RG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.12 12.00 a 5.88 5.88 0 1 1 11.76 0 a 5.88 5.88 0 1 1 -11.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.28 12.00 L 22.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.16 18.47 L 18.41 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 10.16 20.07 L 9.71 22.02"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 15.59 L 2.74 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 8.41 L 2.74 7.54"
      }
    ],
    [
      "path",
      {
        "d": "M 10.16 3.93 L 9.71 1.98"
      }
    ],
    [
      "path",
      {
        "d": "M 17.16 5.53 L 18.41 3.96"
      }
    ]
  ]
};

export const ReactoRest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0" />
      <path d="M 6.12 12.00 a 5.88 5.88 0 1 1 11.76 0 a 5.88 5.88 0 1 1 -11.76 0" />
      <path d="M 20.28 12.00 L 22.28 12.00" />
      <path d="M 17.16 18.47 L 18.41 20.04" />
      <path d="M 10.16 20.07 L 9.71 22.02" />
      <path d="M 4.54 15.59 L 2.74 16.46" />
      <path d="M 4.54 8.41 L 2.74 7.54" />
      <path d="M 10.16 3.93 L 9.71 1.98" />
      <path d="M 17.16 5.53 L 18.41 3.96" />
      {children}
    </svg>
  );
});

export default ReactoRest;
