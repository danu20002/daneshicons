import React from 'react';

export const iconData = {
  "id": "OzoOption",
  "name": "OzoOption",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.75 12.00 a 7.25 7.25 0 1 0 14.50 0 a 7.25 7.25 0 1 0 -14.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.74 12.00 a 5.26 5.26 0 1 1 10.51 0 a 5.26 5.26 0 1 1 -10.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.75 12.00 L 20.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.85 15.37 L 19.58 16.37"
      }
    ],
    [
      "path",
      {
        "d": "M 15.37 17.85 L 16.37 19.58"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.75 L 12.00 20.75"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 17.85 L 7.63 19.58"
      }
    ],
    [
      "path",
      {
        "d": "M 6.15 15.37 L 4.42 16.37"
      }
    ],
    [
      "path",
      {
        "d": "M 5.25 12.00 L 3.25 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.15 8.63 L 4.42 7.63"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 6.15 L 7.63 4.42"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.25 L 12.00 3.25"
      }
    ],
    [
      "path",
      {
        "d": "M 15.37 6.15 L 16.37 4.42"
      }
    ],
    [
      "path",
      {
        "d": "M 17.85 8.63 L 19.58 7.63"
      }
    ]
  ]
};

export const OzoOption = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.75 12.00 a 7.25 7.25 0 1 0 14.50 0 a 7.25 7.25 0 1 0 -14.50 0" />
      <path d="M 6.74 12.00 a 5.26 5.26 0 1 1 10.51 0 a 5.26 5.26 0 1 1 -10.51 0" />
      <path d="M 18.75 12.00 L 20.75 12.00" />
      <path d="M 17.85 15.37 L 19.58 16.37" />
      <path d="M 15.37 17.85 L 16.37 19.58" />
      <path d="M 12.00 18.75 L 12.00 20.75" />
      <path d="M 8.63 17.85 L 7.63 19.58" />
      <path d="M 6.15 15.37 L 4.42 16.37" />
      <path d="M 5.25 12.00 L 3.25 12.00" />
      <path d="M 6.15 8.63 L 4.42 7.63" />
      <path d="M 8.63 6.15 L 7.63 4.42" />
      <path d="M 12.00 5.25 L 12.00 3.25" />
      <path d="M 15.37 6.15 L 16.37 4.42" />
      <path d="M 17.85 8.63 L 19.58 7.63" />
      {children}
    </svg>
  );
});

export default OzoOption;
