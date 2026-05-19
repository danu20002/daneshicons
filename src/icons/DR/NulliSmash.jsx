import React from 'react';

export const iconData = {
  "id": "NulliSmash",
  "name": "NulliSmash",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.08 4.50 C 15.21 16.12, 15.38 15.61, 20.22 15.74"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 2.13 C 19.36 6.45, 12.54 14.94, 20.15 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 3.01 2.40 C 6.09 18.95, 7.91 4.90, 21.96 20.76"
      }
    ]
  ]
};

export const NulliSmash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.08 4.50 C 15.21 16.12, 15.38 15.61, 20.22 15.74" />
      <path d="M 3.56 2.13 C 19.36 6.45, 12.54 14.94, 20.15 18.58" />
      <path d="M 3.01 2.40 C 6.09 18.95, 7.91 4.90, 21.96 20.76" />
      {children}
    </svg>
  );
});

export default NulliSmash;
