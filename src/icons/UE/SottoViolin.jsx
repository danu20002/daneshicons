import React from 'react';

export const iconData = {
  "id": "SottoViolin",
  "name": "SottoViolin",
  "category": "UE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 12.00 a 6.01 6.01 0 1 1 12.02 0 a 6.01 6.01 0 1 1 -12.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.12 12.00 L 22.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.22 17.22 L 19.75 18.50"
      }
    ],
    [
      "path",
      {
        "d": "M 13.41 20.00 L 13.76 21.97"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 19.03 L 6.94 20.76"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 14.78 L 2.49 15.46"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 9.22 L 2.49 8.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 4.97 L 6.94 3.24"
      }
    ],
    [
      "path",
      {
        "d": "M 13.41 4.00 L 13.76 2.03"
      }
    ],
    [
      "path",
      {
        "d": "M 18.22 6.78 L 19.75 5.50"
      }
    ]
  ]
};

export const SottoViolin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0" />
      <path d="M 5.99 12.00 a 6.01 6.01 0 1 1 12.02 0 a 6.01 6.01 0 1 1 -12.02 0" />
      <path d="M 20.12 12.00 L 22.12 12.00" />
      <path d="M 18.22 17.22 L 19.75 18.50" />
      <path d="M 13.41 20.00 L 13.76 21.97" />
      <path d="M 7.94 19.03 L 6.94 20.76" />
      <path d="M 4.37 14.78 L 2.49 15.46" />
      <path d="M 4.37 9.22 L 2.49 8.54" />
      <path d="M 7.94 4.97 L 6.94 3.24" />
      <path d="M 13.41 4.00 L 13.76 2.03" />
      <path d="M 18.22 6.78 L 19.75 5.50" />
      {children}
    </svg>
  );
});

export default SottoViolin;
