import React from 'react';

export const iconData = {
  "id": "SottoPillar",
  "name": "SottoPillar",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.40 2.04 L 15.64 15.18 L 4.62 16.46 L 11.54 16.83 L 6.75 9.74 L 14.21 11.49 L 5.86 5.29 L 20.16 17.58"
      }
    ],
    [
      "path",
      {
        "d": "M 6.80 14.59 C 5.87 13.19, 21.45 6.10, 17.42 3.42"
      }
    ],
    [
      "path",
      {
        "d": "M 11.48 4.01 A 6.08 4.53 46 0 0 14.49 10.16"
      }
    ],
    [
      "path",
      {
        "d": "M 15.52 7.14 L 4.09 4.76 L 4.41 3.44 L 18.06 5.00 L 9.73 10.21 L 9.80 9.47 L 10.54 18.99"
      }
    ],
    [
      "path",
      {
        "d": "M 18.05 18.04 A 6.59 6.81 128 0 0 11.39 4.65"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 20.37 C 15.88 21.89, 3.63 8.13, 11.05 2.81"
      }
    ]
  ]
};

export const SottoPillar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.40 2.04 L 15.64 15.18 L 4.62 16.46 L 11.54 16.83 L 6.75 9.74 L 14.21 11.49 L 5.86 5.29 L 20.16 17.58" />
      <path d="M 6.80 14.59 C 5.87 13.19, 21.45 6.10, 17.42 3.42" />
      <path d="M 11.48 4.01 A 6.08 4.53 46 0 0 14.49 10.16" />
      <path d="M 15.52 7.14 L 4.09 4.76 L 4.41 3.44 L 18.06 5.00 L 9.73 10.21 L 9.80 9.47 L 10.54 18.99" />
      <path d="M 18.05 18.04 A 6.59 6.81 128 0 0 11.39 4.65" />
      <path d="M 4.98 20.37 C 15.88 21.89, 3.63 8.13, 11.05 2.81" />
      {children}
    </svg>
  );
});

export default SottoPillar;
