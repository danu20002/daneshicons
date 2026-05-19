import React from 'react';

export const iconData = {
  "id": "TrichinoDispute",
  "name": "TrichinoDispute",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.51 5.12 C 10.31 9.60, 5.08 8.85, 15.50 14.42"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 4.33 C 14.35 18.54, 11.63 16.47, 19.10 15.66"
      }
    ],
    [
      "path",
      {
        "d": "M 8.56 9.73 C 15.89 12.22, 10.68 12.87, 17.17 19.44"
      }
    ]
  ]
};

export const TrichinoDispute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.51 5.12 C 10.31 9.60, 5.08 8.85, 15.50 14.42" />
      <path d="M 4.97 4.33 C 14.35 18.54, 11.63 16.47, 19.10 15.66" />
      <path d="M 8.56 9.73 C 15.89 12.22, 10.68 12.87, 17.17 19.44" />
      {children}
    </svg>
  );
});

export default TrichinoDispute;
