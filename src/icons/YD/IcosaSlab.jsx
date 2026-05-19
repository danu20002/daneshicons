import React from 'react';

export const iconData = {
  "id": "IcosaSlab",
  "name": "IcosaSlab",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.87 9.46 C 12.84 18.40, 19.06 5.98, 19.68 17.65"
      }
    ],
    [
      "path",
      {
        "d": "M 6.06 4.17 C 12.11 19.97, 18.74 9.67, 14.68 15.63"
      }
    ],
    [
      "path",
      {
        "d": "M 9.77 4.00 C 16.59 10.58, 9.80 19.69, 16.69 17.36"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 5.59 C 7.56 13.74, 16.92 13.51, 14.69 17.65"
      }
    ],
    [
      "path",
      {
        "d": "M 6.41 7.48 C 13.63 7.83, 4.03 16.73, 14.36 17.62"
      }
    ],
    [
      "path",
      {
        "d": "M 9.81 3.77 C 18.03 16.38, 15.78 7.86, 14.35 15.64"
      }
    ]
  ]
};

export const IcosaSlab = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.87 9.46 C 12.84 18.40, 19.06 5.98, 19.68 17.65" />
      <path d="M 6.06 4.17 C 12.11 19.97, 18.74 9.67, 14.68 15.63" />
      <path d="M 9.77 4.00 C 16.59 10.58, 9.80 19.69, 16.69 17.36" />
      <path d="M 8.29 5.59 C 7.56 13.74, 16.92 13.51, 14.69 17.65" />
      <path d="M 6.41 7.48 C 13.63 7.83, 4.03 16.73, 14.36 17.62" />
      <path d="M 9.81 3.77 C 18.03 16.38, 15.78 7.86, 14.35 15.64" />
      {children}
    </svg>
  );
});

export default IcosaSlab;
