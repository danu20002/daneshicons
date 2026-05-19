import React from 'react';

export const iconData = {
  "id": "KleptoFlush",
  "name": "KleptoFlush",
  "category": "WH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 12.00 a 8.54 8.54 0 1 0 17.07 0 a 8.54 8.54 0 1 0 -17.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 6.88 a 6.83 2.048478301428258 0 1 0 13.66 0 a 6.83 2.048478301428258 0 1 0 -13.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 10.29 a 8.36 2.508863293831213 0 1 0 16.73 0 a 8.36 2.508863293831213 0 1 0 -16.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 13.71 a 8.36 2.508863293831213 0 1 0 16.73 0 a 8.36 2.508863293831213 0 1 0 -16.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 17.12 a 6.83 2.048478301428258 0 1 0 13.66 0 a 6.83 2.048478301428258 0 1 0 -13.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 4.61 A 2 2 0 0 0 16.27 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 4.61 A 2 2 0 0 1 16.27 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 4.61 A 2 2 0 0 0 7.73 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 4.61 A 2 2 0 0 1 7.73 19.39"
      }
    ]
  ]
};

export const KleptoFlush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 12.00 a 8.54 8.54 0 1 0 17.07 0 a 8.54 8.54 0 1 0 -17.07 0" />
      <path d="M 5.17 6.88 a 6.83 2.048478301428258 0 1 0 13.66 0 a 6.83 2.048478301428258 0 1 0 -13.66 0" />
      <path d="M 3.64 10.29 a 8.36 2.508863293831213 0 1 0 16.73 0 a 8.36 2.508863293831213 0 1 0 -16.73 0" />
      <path d="M 3.64 13.71 a 8.36 2.508863293831213 0 1 0 16.73 0 a 8.36 2.508863293831213 0 1 0 -16.73 0" />
      <path d="M 5.17 17.12 a 6.83 2.048478301428258 0 1 0 13.66 0 a 6.83 2.048478301428258 0 1 0 -13.66 0" />
      <path d="M 16.27 4.61 A 2 2 0 0 0 16.27 19.39" />
      <path d="M 16.27 4.61 A 2 2 0 0 1 16.27 19.39" />
      <path d="M 7.73 4.61 A 2 2 0 0 0 7.73 19.39" />
      <path d="M 7.73 4.61 A 2 2 0 0 1 7.73 19.39" />
      {children}
    </svg>
  );
});

export default KleptoFlush;
