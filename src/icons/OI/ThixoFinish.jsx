import React from 'react';

export const iconData = {
  "id": "ThixoFinish",
  "name": "ThixoFinish",
  "category": "OI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.96 12.00 a 7.04 7.04 0 1 0 14.08 0 a 7.04 7.04 0 1 0 -14.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.35 12.00 a 4.65 4.65 0 1 1 9.29 0 a 4.65 4.65 0 1 1 -9.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.54 12.00 L 20.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.66 15.27 L 19.40 16.27"
      }
    ],
    [
      "path",
      {
        "d": "M 15.27 17.66 L 16.27 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.54 L 12.00 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 8.73 17.66 L 7.73 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 15.27 L 4.60 16.27"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 12.00 L 3.46 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 8.73 L 4.60 7.73"
      }
    ],
    [
      "path",
      {
        "d": "M 8.73 6.34 L 7.73 4.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.46 L 12.00 3.46"
      }
    ],
    [
      "path",
      {
        "d": "M 15.27 6.34 L 16.27 4.60"
      }
    ],
    [
      "path",
      {
        "d": "M 17.66 8.73 L 19.40 7.73"
      }
    ]
  ]
};

export const ThixoFinish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.96 12.00 a 7.04 7.04 0 1 0 14.08 0 a 7.04 7.04 0 1 0 -14.08 0" />
      <path d="M 7.35 12.00 a 4.65 4.65 0 1 1 9.29 0 a 4.65 4.65 0 1 1 -9.29 0" />
      <path d="M 18.54 12.00 L 20.54 12.00" />
      <path d="M 17.66 15.27 L 19.40 16.27" />
      <path d="M 15.27 17.66 L 16.27 19.40" />
      <path d="M 12.00 18.54 L 12.00 20.54" />
      <path d="M 8.73 17.66 L 7.73 19.40" />
      <path d="M 6.34 15.27 L 4.60 16.27" />
      <path d="M 5.46 12.00 L 3.46 12.00" />
      <path d="M 6.34 8.73 L 4.60 7.73" />
      <path d="M 8.73 6.34 L 7.73 4.60" />
      <path d="M 12.00 5.46 L 12.00 3.46" />
      <path d="M 15.27 6.34 L 16.27 4.60" />
      <path d="M 17.66 8.73 L 19.40 7.73" />
      {children}
    </svg>
  );
});

export default ThixoFinish;
