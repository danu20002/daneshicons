import React from 'react';

export const iconData = {
  "id": "SottoGrudge",
  "name": "SottoGrudge",
  "category": "JD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.55 12.00 a 9.45 9.45 0 1 0 18.89 0 a 9.45 9.45 0 1 0 -18.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.09 8.85 a 8.91 2.672050834520441 0 1 0 17.81 0 a 8.91 2.672050834520441 0 1 0 -17.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.09 15.15 a 8.91 2.672050834520441 0 1 0 17.81 0 a 8.91 2.672050834520441 0 1 0 -17.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 5.32 A 2 2 0 0 0 18.68 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 5.32 A 2 2 0 0 1 18.68 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.55 A 2 2 0 0 0 12.00 21.45"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.55 A 2 2 0 0 1 12.00 21.45"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 5.32 A 2 2 0 0 0 5.32 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 5.32 A 2 2 0 0 1 5.32 18.68"
      }
    ]
  ]
};

export const SottoGrudge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.55 12.00 a 9.45 9.45 0 1 0 18.89 0 a 9.45 9.45 0 1 0 -18.89 0" />
      <path d="M 3.09 8.85 a 8.91 2.672050834520441 0 1 0 17.81 0 a 8.91 2.672050834520441 0 1 0 -17.81 0" />
      <path d="M 3.09 15.15 a 8.91 2.672050834520441 0 1 0 17.81 0 a 8.91 2.672050834520441 0 1 0 -17.81 0" />
      <path d="M 18.68 5.32 A 2 2 0 0 0 18.68 18.68" />
      <path d="M 18.68 5.32 A 2 2 0 0 1 18.68 18.68" />
      <path d="M 12.00 2.55 A 2 2 0 0 0 12.00 21.45" />
      <path d="M 12.00 2.55 A 2 2 0 0 1 12.00 21.45" />
      <path d="M 5.32 5.32 A 2 2 0 0 0 5.32 18.68" />
      <path d="M 5.32 5.32 A 2 2 0 0 1 5.32 18.68" />
      {children}
    </svg>
  );
});

export default SottoGrudge;
