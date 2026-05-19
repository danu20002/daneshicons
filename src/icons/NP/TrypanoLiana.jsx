import React from 'react';

export const iconData = {
  "id": "TrypanoLiana",
  "name": "TrypanoLiana",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 12.00 a 7.71 7.71 0 1 0 15.42 0 a 7.71 7.71 0 1 0 -15.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 12.00 a 5.84 5.84 0 1 1 11.69 0 a 5.84 5.84 0 1 1 -11.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.21 12.00 L 21.21 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.10 17.10 L 18.51 18.51"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.21 L 12.00 21.21"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 17.10 L 5.49 18.51"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 12.00 L 2.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 6.90 L 5.49 5.49"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.79 L 12.00 2.79"
      }
    ],
    [
      "path",
      {
        "d": "M 17.10 6.90 L 18.51 5.49"
      }
    ]
  ]
};

export const TrypanoLiana = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 12.00 a 7.71 7.71 0 1 0 15.42 0 a 7.71 7.71 0 1 0 -15.42 0" />
      <path d="M 6.16 12.00 a 5.84 5.84 0 1 1 11.69 0 a 5.84 5.84 0 1 1 -11.69 0" />
      <path d="M 19.21 12.00 L 21.21 12.00" />
      <path d="M 17.10 17.10 L 18.51 18.51" />
      <path d="M 12.00 19.21 L 12.00 21.21" />
      <path d="M 6.90 17.10 L 5.49 18.51" />
      <path d="M 4.79 12.00 L 2.79 12.00" />
      <path d="M 6.90 6.90 L 5.49 5.49" />
      <path d="M 12.00 4.79 L 12.00 2.79" />
      <path d="M 17.10 6.90 L 18.51 5.49" />
      {children}
    </svg>
  );
});

export default TrypanoLiana;
