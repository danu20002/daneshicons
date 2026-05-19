import React from 'react';

export const iconData = {
  "id": "ReactoLogic",
  "name": "ReactoLogic",
  "category": "KR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.31 12.00 a 7.69 7.69 0 1 0 15.37 0 a 7.69 7.69 0 1 0 -15.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 12.00 a 5.96 5.96 0 1 1 11.91 0 a 5.96 5.96 0 1 1 -11.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.19 12.00 L 21.19 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.05 15.89 L 19.73 16.97"
      }
    ],
    [
      "path",
      {
        "d": "M 14.99 18.54 L 15.82 20.36"
      }
    ],
    [
      "path",
      {
        "d": "M 10.98 19.11 L 10.69 21.09"
      }
    ],
    [
      "path",
      {
        "d": "M 7.29 17.43 L 5.98 18.94"
      }
    ],
    [
      "path",
      {
        "d": "M 5.10 14.02 L 3.19 14.59"
      }
    ],
    [
      "path",
      {
        "d": "M 5.10 9.98 L 3.19 9.41"
      }
    ],
    [
      "path",
      {
        "d": "M 7.29 6.57 L 5.98 5.06"
      }
    ],
    [
      "path",
      {
        "d": "M 10.98 4.89 L 10.69 2.91"
      }
    ],
    [
      "path",
      {
        "d": "M 14.99 5.46 L 15.82 3.64"
      }
    ],
    [
      "path",
      {
        "d": "M 18.05 8.11 L 19.73 7.03"
      }
    ]
  ]
};

export const ReactoLogic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.31 12.00 a 7.69 7.69 0 1 0 15.37 0 a 7.69 7.69 0 1 0 -15.37 0" />
      <path d="M 6.04 12.00 a 5.96 5.96 0 1 1 11.91 0 a 5.96 5.96 0 1 1 -11.91 0" />
      <path d="M 19.19 12.00 L 21.19 12.00" />
      <path d="M 18.05 15.89 L 19.73 16.97" />
      <path d="M 14.99 18.54 L 15.82 20.36" />
      <path d="M 10.98 19.11 L 10.69 21.09" />
      <path d="M 7.29 17.43 L 5.98 18.94" />
      <path d="M 5.10 14.02 L 3.19 14.59" />
      <path d="M 5.10 9.98 L 3.19 9.41" />
      <path d="M 7.29 6.57 L 5.98 5.06" />
      <path d="M 10.98 4.89 L 10.69 2.91" />
      <path d="M 14.99 5.46 L 15.82 3.64" />
      <path d="M 18.05 8.11 L 19.73 7.03" />
      {children}
    </svg>
  );
});

export default ReactoLogic;
