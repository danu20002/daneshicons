import React from 'react';

export const iconData = {
  "id": "UncinoSwim",
  "name": "UncinoSwim",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.70 6.43 A 5.58 4.41 38 0 0 17.83 18.40"
      }
    ],
    [
      "path",
      {
        "d": "M 12.86 6.06 C 20.82 11.48, 4.88 10.06, 4.14 18.78"
      }
    ],
    [
      "path",
      {
        "d": "M 14.01 15.71 C 9.48 21.43, 4.25 7.03, 12.63 18.39"
      }
    ]
  ]
};

export const UncinoSwim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.70 6.43 A 5.58 4.41 38 0 0 17.83 18.40" />
      <path d="M 12.86 6.06 C 20.82 11.48, 4.88 10.06, 4.14 18.78" />
      <path d="M 14.01 15.71 C 9.48 21.43, 4.25 7.03, 12.63 18.39" />
      {children}
    </svg>
  );
});

export default UncinoSwim;
