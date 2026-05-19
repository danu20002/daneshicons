import React from 'react';

export const iconData = {
  "id": "SplenoRipple",
  "name": "SplenoRipple",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 12.00 a 8.23 8.23 0 1 0 16.45 0 a 8.23 8.23 0 1 0 -16.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 12.00 a 5.61 5.61 0 1 1 11.21 0 a 5.61 5.61 0 1 1 -11.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.73 12.00 L 21.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.82 18.04 L 18.06 19.60"
      }
    ],
    [
      "path",
      {
        "d": "M 10.28 19.53 L 9.84 21.48"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 15.35 L 3.24 16.22"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 8.65 L 3.24 7.78"
      }
    ],
    [
      "path",
      {
        "d": "M 10.28 4.47 L 9.84 2.52"
      }
    ],
    [
      "path",
      {
        "d": "M 16.82 5.96 L 18.06 4.40"
      }
    ]
  ]
};

export const SplenoRipple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 12.00 a 8.23 8.23 0 1 0 16.45 0 a 8.23 8.23 0 1 0 -16.45 0" />
      <path d="M 6.39 12.00 a 5.61 5.61 0 1 1 11.21 0 a 5.61 5.61 0 1 1 -11.21 0" />
      <path d="M 19.73 12.00 L 21.73 12.00" />
      <path d="M 16.82 18.04 L 18.06 19.60" />
      <path d="M 10.28 19.53 L 9.84 21.48" />
      <path d="M 5.04 15.35 L 3.24 16.22" />
      <path d="M 5.04 8.65 L 3.24 7.78" />
      <path d="M 10.28 4.47 L 9.84 2.52" />
      <path d="M 16.82 5.96 L 18.06 4.40" />
      {children}
    </svg>
  );
});

export default SplenoRipple;
