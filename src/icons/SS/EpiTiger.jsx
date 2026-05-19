import React from 'react';

export const iconData = {
  "id": "EpiTiger",
  "name": "EpiTiger",
  "category": "SS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 8.87 0 1 0 17.75 0 a 8.87 8.87 0 1 0 -17.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 12.00 a 6.54 6.54 0 1 1 13.09 0 a 6.54 6.54 0 1 1 -13.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.37 12.00 L 22.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.92 17.92 L 19.33 19.33"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.37 L 12.00 22.37"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 17.92 L 4.67 19.33"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 12.00 L 1.63 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 6.08 L 4.67 4.67"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.63 L 12.00 1.63"
      }
    ],
    [
      "path",
      {
        "d": "M 17.92 6.08 L 19.33 4.67"
      }
    ]
  ]
};

export const EpiTiger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 12.00 a 8.87 8.87 0 1 0 17.75 0 a 8.87 8.87 0 1 0 -17.75 0" />
      <path d="M 5.46 12.00 a 6.54 6.54 0 1 1 13.09 0 a 6.54 6.54 0 1 1 -13.09 0" />
      <path d="M 20.37 12.00 L 22.37 12.00" />
      <path d="M 17.92 17.92 L 19.33 19.33" />
      <path d="M 12.00 20.37 L 12.00 22.37" />
      <path d="M 6.08 17.92 L 4.67 19.33" />
      <path d="M 3.63 12.00 L 1.63 12.00" />
      <path d="M 6.08 6.08 L 4.67 4.67" />
      <path d="M 12.00 3.63 L 12.00 1.63" />
      <path d="M 17.92 6.08 L 19.33 4.67" />
      {children}
    </svg>
  );
});

export default EpiTiger;
