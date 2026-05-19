import React from 'react';

export const iconData = {
  "id": "SalviPanic",
  "name": "SalviPanic",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.72 6.95 C 10.09 8.62, 16.56 11.29, 21.83 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 8.22 9.41 C 15.55 12.97, 18.63 14.15, 20.86 17.06"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 4.99 C 19.06 7.43, 12.93 6.28, 14.85 16.09"
      }
    ],
    [
      "path",
      {
        "d": "M 2.48 7.54 C 16.54 19.53, 16.89 18.62, 19.20 14.56"
      }
    ]
  ]
};

export const SalviPanic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.72 6.95 C 10.09 8.62, 16.56 11.29, 21.83 17.04" />
      <path d="M 8.22 9.41 C 15.55 12.97, 18.63 14.15, 20.86 17.06" />
      <path d="M 5.06 4.99 C 19.06 7.43, 12.93 6.28, 14.85 16.09" />
      <path d="M 2.48 7.54 C 16.54 19.53, 16.89 18.62, 19.20 14.56" />
      {children}
    </svg>
  );
});

export default SalviPanic;
