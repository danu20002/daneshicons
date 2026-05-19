import React from 'react';

export const iconData = {
  "id": "SottoForever",
  "name": "SottoForever",
  "category": "SS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.12 12.00 a 8.88 8.88 0 1 0 17.76 0 a 8.88 8.88 0 1 0 -17.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.65 12.00 a 7.35 7.35 0 1 1 14.70 0 a 7.35 7.35 0 1 1 -14.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.38 12.00 L 22.38 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.22 18.55 L 18.47 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 10.14 20.17 L 9.69 22.12"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 15.64 L 2.65 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 8.36 L 2.65 7.50"
      }
    ],
    [
      "path",
      {
        "d": "M 10.14 3.83 L 9.69 1.88"
      }
    ],
    [
      "path",
      {
        "d": "M 17.22 5.45 L 18.47 3.89"
      }
    ]
  ]
};

export const SottoForever = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.12 12.00 a 8.88 8.88 0 1 0 17.76 0 a 8.88 8.88 0 1 0 -17.76 0" />
      <path d="M 4.65 12.00 a 7.35 7.35 0 1 1 14.70 0 a 7.35 7.35 0 1 1 -14.70 0" />
      <path d="M 20.38 12.00 L 22.38 12.00" />
      <path d="M 17.22 18.55 L 18.47 20.11" />
      <path d="M 10.14 20.17 L 9.69 22.12" />
      <path d="M 4.45 15.64 L 2.65 16.50" />
      <path d="M 4.45 8.36 L 2.65 7.50" />
      <path d="M 10.14 3.83 L 9.69 1.88" />
      <path d="M 17.22 5.45 L 18.47 3.89" />
      {children}
    </svg>
  );
});

export default SottoForever;
