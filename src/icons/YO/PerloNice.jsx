import React from 'react';

export const iconData = {
  "id": "PerloNice",
  "name": "PerloNice",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 12.00 a 8.16 8.16 0 1 0 16.31 0 a 8.16 8.16 0 1 0 -16.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.56 12.00 a 5.44 5.44 0 1 1 10.88 0 a 5.44 5.44 0 1 1 -10.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.66 12.00 L 21.66 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.86 16.92 L 19.40 18.21"
      }
    ],
    [
      "path",
      {
        "d": "M 13.33 19.54 L 13.68 21.51"
      }
    ],
    [
      "path",
      {
        "d": "M 8.17 18.63 L 7.17 20.36"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 14.62 L 2.93 15.30"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 9.38 L 2.93 8.70"
      }
    ],
    [
      "path",
      {
        "d": "M 8.17 5.37 L 7.17 3.64"
      }
    ],
    [
      "path",
      {
        "d": "M 13.33 4.46 L 13.68 2.49"
      }
    ],
    [
      "path",
      {
        "d": "M 17.86 7.08 L 19.40 5.79"
      }
    ]
  ]
};

export const PerloNice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 12.00 a 8.16 8.16 0 1 0 16.31 0 a 8.16 8.16 0 1 0 -16.31 0" />
      <path d="M 6.56 12.00 a 5.44 5.44 0 1 1 10.88 0 a 5.44 5.44 0 1 1 -10.88 0" />
      <path d="M 19.66 12.00 L 21.66 12.00" />
      <path d="M 17.86 16.92 L 19.40 18.21" />
      <path d="M 13.33 19.54 L 13.68 21.51" />
      <path d="M 8.17 18.63 L 7.17 20.36" />
      <path d="M 4.81 14.62 L 2.93 15.30" />
      <path d="M 4.81 9.38 L 2.93 8.70" />
      <path d="M 8.17 5.37 L 7.17 3.64" />
      <path d="M 13.33 4.46 L 13.68 2.49" />
      <path d="M 17.86 7.08 L 19.40 5.79" />
      {children}
    </svg>
  );
});

export default PerloNice;
