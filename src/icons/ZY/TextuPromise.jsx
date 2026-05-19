import React from 'react';

export const iconData = {
  "id": "TextuPromise",
  "name": "TextuPromise",
  "category": "ZY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.11 12.00 a 8.89 8.89 0 1 0 17.79 0 a 8.89 8.89 0 1 0 -17.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.61 9.04 a 8.39 2.5157745968300804 0 1 0 16.77 0 a 8.39 2.5157745968300804 0 1 0 -16.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.61 14.96 a 8.39 2.5157745968300804 0 1 0 16.77 0 a 8.39 2.5157745968300804 0 1 0 -16.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.29 5.71 A 2 2 0 0 0 18.29 18.29"
      }
    ],
    [
      "path",
      {
        "d": "M 18.29 5.71 A 2 2 0 0 1 18.29 18.29"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.11 A 2 2 0 0 0 12.00 20.89"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.11 A 2 2 0 0 1 12.00 20.89"
      }
    ],
    [
      "path",
      {
        "d": "M 5.71 5.71 A 2 2 0 0 0 5.71 18.29"
      }
    ],
    [
      "path",
      {
        "d": "M 5.71 5.71 A 2 2 0 0 1 5.71 18.29"
      }
    ]
  ]
};

export const TextuPromise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.11 12.00 a 8.89 8.89 0 1 0 17.79 0 a 8.89 8.89 0 1 0 -17.79 0" />
      <path d="M 3.61 9.04 a 8.39 2.5157745968300804 0 1 0 16.77 0 a 8.39 2.5157745968300804 0 1 0 -16.77 0" />
      <path d="M 3.61 14.96 a 8.39 2.5157745968300804 0 1 0 16.77 0 a 8.39 2.5157745968300804 0 1 0 -16.77 0" />
      <path d="M 18.29 5.71 A 2 2 0 0 0 18.29 18.29" />
      <path d="M 18.29 5.71 A 2 2 0 0 1 18.29 18.29" />
      <path d="M 12.00 3.11 A 2 2 0 0 0 12.00 20.89" />
      <path d="M 12.00 3.11 A 2 2 0 0 1 12.00 20.89" />
      <path d="M 5.71 5.71 A 2 2 0 0 0 5.71 18.29" />
      <path d="M 5.71 5.71 A 2 2 0 0 1 5.71 18.29" />
      {children}
    </svg>
  );
});

export default TextuPromise;
