import React from 'react';

export const iconData = {
  "id": "DynamoIsle",
  "name": "DynamoIsle",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.72 12.00 a 8.28 8.28 0 1 0 16.56 0 a 8.28 8.28 0 1 0 -16.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.45 12.00 a 6.55 6.55 0 1 1 13.10 0 a 6.55 6.55 0 1 1 -13.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.78 12.00 L 21.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.96 17.00 L 19.49 18.29"
      }
    ],
    [
      "path",
      {
        "d": "M 13.35 19.66 L 13.70 21.63"
      }
    ],
    [
      "path",
      {
        "d": "M 8.11 18.74 L 7.11 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 4.69 14.66 L 2.81 15.35"
      }
    ],
    [
      "path",
      {
        "d": "M 4.69 9.34 L 2.81 8.65"
      }
    ],
    [
      "path",
      {
        "d": "M 8.11 5.26 L 7.11 3.53"
      }
    ],
    [
      "path",
      {
        "d": "M 13.35 4.34 L 13.70 2.37"
      }
    ],
    [
      "path",
      {
        "d": "M 17.96 7.00 L 19.49 5.71"
      }
    ]
  ]
};

export const DynamoIsle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.72 12.00 a 8.28 8.28 0 1 0 16.56 0 a 8.28 8.28 0 1 0 -16.56 0" />
      <path d="M 5.45 12.00 a 6.55 6.55 0 1 1 13.10 0 a 6.55 6.55 0 1 1 -13.10 0" />
      <path d="M 19.78 12.00 L 21.78 12.00" />
      <path d="M 17.96 17.00 L 19.49 18.29" />
      <path d="M 13.35 19.66 L 13.70 21.63" />
      <path d="M 8.11 18.74 L 7.11 20.47" />
      <path d="M 4.69 14.66 L 2.81 15.35" />
      <path d="M 4.69 9.34 L 2.81 8.65" />
      <path d="M 8.11 5.26 L 7.11 3.53" />
      <path d="M 13.35 4.34 L 13.70 2.37" />
      <path d="M 17.96 7.00 L 19.49 5.71" />
      {children}
    </svg>
  );
});

export default DynamoIsle;
