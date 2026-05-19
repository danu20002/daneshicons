import React from 'react';

export const iconData = {
  "id": "YodelEdge",
  "name": "YodelEdge",
  "category": "QN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 12.00 a 8.13 8.13 0 1 0 16.25 0 a 8.13 8.13 0 1 0 -16.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.48 12.00 a 6.52 6.52 0 1 1 13.05 0 a 6.52 6.52 0 1 1 -13.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.63 12.00 L 21.63 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.39 17.39 L 18.81 18.81"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.63 L 12.00 21.63"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 17.39 L 5.19 18.81"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 12.00 L 2.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 6.61 L 5.19 5.19"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.37 L 12.00 2.37"
      }
    ],
    [
      "path",
      {
        "d": "M 17.39 6.61 L 18.81 5.19"
      }
    ]
  ]
};

export const YodelEdge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 12.00 a 8.13 8.13 0 1 0 16.25 0 a 8.13 8.13 0 1 0 -16.25 0" />
      <path d="M 5.48 12.00 a 6.52 6.52 0 1 1 13.05 0 a 6.52 6.52 0 1 1 -13.05 0" />
      <path d="M 19.63 12.00 L 21.63 12.00" />
      <path d="M 17.39 17.39 L 18.81 18.81" />
      <path d="M 12.00 19.63 L 12.00 21.63" />
      <path d="M 6.61 17.39 L 5.19 18.81" />
      <path d="M 4.37 12.00 L 2.37 12.00" />
      <path d="M 6.61 6.61 L 5.19 5.19" />
      <path d="M 12.00 4.37 L 12.00 2.37" />
      <path d="M 17.39 6.61 L 18.81 5.19" />
      {children}
    </svg>
  );
});

export default YodelEdge;
