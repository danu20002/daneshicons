import React from 'react';

export const iconData = {
  "id": "VerucoGiant",
  "name": "VerucoGiant",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.66 7.74 C 14.01 17.40, 19.62 17.94, 21.86 17.47"
      }
    ],
    [
      "path",
      {
        "d": "M 8.55 6.08 C 17.56 11.78, 14.09 11.38, 14.81 15.53"
      }
    ],
    [
      "path",
      {
        "d": "M 3.15 8.54 C 16.86 16.02, 18.63 15.60, 15.64 21.05"
      }
    ]
  ]
};

export const VerucoGiant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.66 7.74 C 14.01 17.40, 19.62 17.94, 21.86 17.47" />
      <path d="M 8.55 6.08 C 17.56 11.78, 14.09 11.38, 14.81 15.53" />
      <path d="M 3.15 8.54 C 16.86 16.02, 18.63 15.60, 15.64 21.05" />
      {children}
    </svg>
  );
});

export default VerucoGiant;
