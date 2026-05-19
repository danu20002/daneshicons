import React from 'react';

export const iconData = {
  "id": "PsychoJade",
  "name": "PsychoJade",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.02 2.93 C 7.86 9.14, 19.80 16.37, 15.35 18.91"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 4.64 C 13.92 10.99, 17.34 18.19, 19.19 15.96"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 7.48 C 13.58 6.76, 9.71 9.04, 19.71 16.20"
      }
    ]
  ]
};

export const PsychoJade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.02 2.93 C 7.86 9.14, 19.80 16.37, 15.35 18.91" />
      <path d="M 6.38 4.64 C 13.92 10.99, 17.34 18.19, 19.19 15.96" />
      <path d="M 3.79 7.48 C 13.58 6.76, 9.71 9.04, 19.71 16.20" />
      {children}
    </svg>
  );
});

export default PsychoJade;
