import React from 'react';

export const iconData = {
  "id": "VinovoPlatter",
  "name": "VinovoPlatter",
  "category": "JW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.25 12.00 a 9.75 9.75 0 1 0 19.51 0 a 9.75 9.75 0 1 0 -19.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.25 12.00 a 9.75 2.9261093580164013 0 1 0 19.51 0 a 9.75 2.9261093580164013 0 1 0 -19.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.25 A 2 2 0 0 0 12.00 21.75"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.25 A 2 2 0 0 1 12.00 21.75"
      }
    ]
  ]
};

export const VinovoPlatter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.25 12.00 a 9.75 9.75 0 1 0 19.51 0 a 9.75 9.75 0 1 0 -19.51 0" />
      <path d="M 2.25 12.00 a 9.75 2.9261093580164013 0 1 0 19.51 0 a 9.75 2.9261093580164013 0 1 0 -19.51 0" />
      <path d="M 12.00 2.25 A 2 2 0 0 0 12.00 21.75" />
      <path d="M 12.00 2.25 A 2 2 0 0 1 12.00 21.75" />
      {children}
    </svg>
  );
});

export default VinovoPlatter;
