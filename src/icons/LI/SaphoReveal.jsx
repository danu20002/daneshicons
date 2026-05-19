import React from 'react';

export const iconData = {
  "id": "SaphoReveal",
  "name": "SaphoReveal",
  "category": "LI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.36 12.00 a 8.64 8.64 0 1 0 17.28 0 a 8.64 8.64 0 1 0 -17.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 7.68 a 7.48 2.2448298762240286 0 1 0 14.97 0 a 7.48 2.2448298762240286 0 1 0 -14.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.36 12.00 a 8.64 2.5921062666457146 0 1 0 17.28 0 a 8.64 2.5921062666457146 0 1 0 -17.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 16.32 a 7.48 2.2448298762240286 0 1 0 14.97 0 a 7.48 2.2448298762240286 0 1 0 -14.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.11 5.89 A 2 2 0 0 0 18.11 18.11"
      }
    ],
    [
      "path",
      {
        "d": "M 18.11 5.89 A 2 2 0 0 1 18.11 18.11"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.36 A 2 2 0 0 0 12.00 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.36 A 2 2 0 0 1 12.00 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 5.89 5.89 A 2 2 0 0 0 5.89 18.11"
      }
    ],
    [
      "path",
      {
        "d": "M 5.89 5.89 A 2 2 0 0 1 5.89 18.11"
      }
    ]
  ]
};

export const SaphoReveal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.36 12.00 a 8.64 8.64 0 1 0 17.28 0 a 8.64 8.64 0 1 0 -17.28 0" />
      <path d="M 4.52 7.68 a 7.48 2.2448298762240286 0 1 0 14.97 0 a 7.48 2.2448298762240286 0 1 0 -14.97 0" />
      <path d="M 3.36 12.00 a 8.64 2.5921062666457146 0 1 0 17.28 0 a 8.64 2.5921062666457146 0 1 0 -17.28 0" />
      <path d="M 4.52 16.32 a 7.48 2.2448298762240286 0 1 0 14.97 0 a 7.48 2.2448298762240286 0 1 0 -14.97 0" />
      <path d="M 18.11 5.89 A 2 2 0 0 0 18.11 18.11" />
      <path d="M 18.11 5.89 A 2 2 0 0 1 18.11 18.11" />
      <path d="M 12.00 3.36 A 2 2 0 0 0 12.00 20.64" />
      <path d="M 12.00 3.36 A 2 2 0 0 1 12.00 20.64" />
      <path d="M 5.89 5.89 A 2 2 0 0 0 5.89 18.11" />
      <path d="M 5.89 5.89 A 2 2 0 0 1 5.89 18.11" />
      {children}
    </svg>
  );
});

export default SaphoReveal;
