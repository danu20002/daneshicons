import React from 'react';

export const iconData = {
  "id": "XericoEvoke",
  "name": "XericoEvoke",
  "category": "JY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.20 12.00 a 8.80 8.80 0 1 0 17.61 0 a 8.80 8.80 0 1 0 -17.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 12.00 a 6.79 6.79 0 1 1 13.58 0 a 6.79 6.79 0 1 1 -13.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.30 12.00 L 22.30 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.98 16.49 L 20.67 17.57"
      }
    ],
    [
      "path",
      {
        "d": "M 15.45 19.55 L 16.28 21.37"
      }
    ],
    [
      "path",
      {
        "d": "M 10.82 20.22 L 10.53 22.20"
      }
    ],
    [
      "path",
      {
        "d": "M 6.56 18.27 L 5.25 19.79"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 14.34 L 2.11 14.90"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 9.66 L 2.11 9.10"
      }
    ],
    [
      "path",
      {
        "d": "M 6.56 5.73 L 5.25 4.21"
      }
    ],
    [
      "path",
      {
        "d": "M 10.82 3.78 L 10.53 1.80"
      }
    ],
    [
      "path",
      {
        "d": "M 15.45 4.45 L 16.28 2.63"
      }
    ],
    [
      "path",
      {
        "d": "M 18.98 7.51 L 20.67 6.43"
      }
    ]
  ]
};

export const XericoEvoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.20 12.00 a 8.80 8.80 0 1 0 17.61 0 a 8.80 8.80 0 1 0 -17.61 0" />
      <path d="M 5.21 12.00 a 6.79 6.79 0 1 1 13.58 0 a 6.79 6.79 0 1 1 -13.58 0" />
      <path d="M 20.30 12.00 L 22.30 12.00" />
      <path d="M 18.98 16.49 L 20.67 17.57" />
      <path d="M 15.45 19.55 L 16.28 21.37" />
      <path d="M 10.82 20.22 L 10.53 22.20" />
      <path d="M 6.56 18.27 L 5.25 19.79" />
      <path d="M 4.03 14.34 L 2.11 14.90" />
      <path d="M 4.03 9.66 L 2.11 9.10" />
      <path d="M 6.56 5.73 L 5.25 4.21" />
      <path d="M 10.82 3.78 L 10.53 1.80" />
      <path d="M 15.45 4.45 L 16.28 2.63" />
      <path d="M 18.98 7.51 L 20.67 6.43" />
      {children}
    </svg>
  );
});

export default XericoEvoke;
