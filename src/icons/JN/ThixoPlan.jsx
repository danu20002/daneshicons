import React from 'react';

export const iconData = {
  "id": "ThixoPlan",
  "name": "ThixoPlan",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.67 8.86 C 19.01 7.70, 18.58 7.46, 21.49 18.51"
      }
    ],
    [
      "path",
      {
        "d": "M 2.28 8.70 C 19.22 6.45, 15.94 18.04, 20.30 17.90"
      }
    ],
    [
      "path",
      {
        "d": "M 4.31 7.52 C 6.11 9.00, 10.58 4.99, 21.64 21.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 3.45 C 19.08 9.06, 4.07 16.89, 19.37 20.62"
      }
    ]
  ]
};

export const ThixoPlan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.67 8.86 C 19.01 7.70, 18.58 7.46, 21.49 18.51" />
      <path d="M 2.28 8.70 C 19.22 6.45, 15.94 18.04, 20.30 17.90" />
      <path d="M 4.31 7.52 C 6.11 9.00, 10.58 4.99, 21.64 21.72" />
      <path d="M 5.57 3.45 C 19.08 9.06, 4.07 16.89, 19.37 20.62" />
      {children}
    </svg>
  );
});

export default ThixoPlan;
