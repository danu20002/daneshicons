import React from 'react';

export const iconData = {
  "id": "GamaNip",
  "name": "GamaNip",
  "category": "QN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 12.00 a 8.03 8.03 0 1 0 16.06 0 a 8.03 8.03 0 1 0 -16.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 12.00 a 6.45 6.45 0 1 1 12.91 0 a 6.45 6.45 0 1 1 -12.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.53 12.00 L 21.53 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.77 16.84 L 19.30 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 13.31 19.42 L 13.66 21.39"
      }
    ],
    [
      "path",
      {
        "d": "M 8.23 18.52 L 7.23 20.25"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 14.58 L 3.04 15.26"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 9.42 L 3.04 8.74"
      }
    ],
    [
      "path",
      {
        "d": "M 8.23 5.48 L 7.23 3.75"
      }
    ],
    [
      "path",
      {
        "d": "M 13.31 4.58 L 13.66 2.61"
      }
    ],
    [
      "path",
      {
        "d": "M 17.77 7.16 L 19.30 5.87"
      }
    ]
  ]
};

export const GamaNip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 12.00 a 8.03 8.03 0 1 0 16.06 0 a 8.03 8.03 0 1 0 -16.06 0" />
      <path d="M 5.55 12.00 a 6.45 6.45 0 1 1 12.91 0 a 6.45 6.45 0 1 1 -12.91 0" />
      <path d="M 19.53 12.00 L 21.53 12.00" />
      <path d="M 17.77 16.84 L 19.30 18.13" />
      <path d="M 13.31 19.42 L 13.66 21.39" />
      <path d="M 8.23 18.52 L 7.23 20.25" />
      <path d="M 4.92 14.58 L 3.04 15.26" />
      <path d="M 4.92 9.42 L 3.04 8.74" />
      <path d="M 8.23 5.48 L 7.23 3.75" />
      <path d="M 13.31 4.58 L 13.66 2.61" />
      <path d="M 17.77 7.16 L 19.30 5.87" />
      {children}
    </svg>
  );
});

export default GamaNip;
