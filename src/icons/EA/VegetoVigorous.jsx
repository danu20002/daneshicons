import React from 'react';

export const iconData = {
  "id": "VegetoVigorous",
  "name": "VegetoVigorous",
  "category": "EA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.75 12.00 a 9.25 9.25 0 1 0 18.50 0 a 9.25 9.25 0 1 0 -18.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 7.38 a 8.01 2.402943372964959 0 1 0 16.02 0 a 8.01 2.402943372964959 0 1 0 -16.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.75 12.00 a 9.25 2.774680006457493 0 1 0 18.50 0 a 9.25 2.774680006457493 0 1 0 -18.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 16.62 a 8.01 2.402943372964959 0 1 0 16.02 0 a 8.01 2.402943372964959 0 1 0 -16.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.75 A 2 2 0 0 0 12.00 21.25"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.75 A 2 2 0 0 1 12.00 21.25"
      }
    ]
  ]
};

export const VegetoVigorous = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.75 12.00 a 9.25 9.25 0 1 0 18.50 0 a 9.25 9.25 0 1 0 -18.50 0" />
      <path d="M 3.99 7.38 a 8.01 2.402943372964959 0 1 0 16.02 0 a 8.01 2.402943372964959 0 1 0 -16.02 0" />
      <path d="M 2.75 12.00 a 9.25 2.774680006457493 0 1 0 18.50 0 a 9.25 2.774680006457493 0 1 0 -18.50 0" />
      <path d="M 3.99 16.62 a 8.01 2.402943372964959 0 1 0 16.02 0 a 8.01 2.402943372964959 0 1 0 -16.02 0" />
      <path d="M 12.00 2.75 A 2 2 0 0 0 12.00 21.25" />
      <path d="M 12.00 2.75 A 2 2 0 0 1 12.00 21.25" />
      {children}
    </svg>
  );
});

export default VegetoVigorous;
