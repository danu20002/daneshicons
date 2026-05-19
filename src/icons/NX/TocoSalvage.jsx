import React from 'react';

export const iconData = {
  "id": "TocoSalvage",
  "name": "TocoSalvage",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.02 7.98 C 15.08 6.45, 7.10 15.02, 20.41 14.81"
      }
    ],
    [
      "path",
      {
        "d": "M 2.37 3.79 C 11.10 8.75, 15.86 10.71, 21.94 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 5.69 5.59 C 11.66 12.10, 9.73 14.22, 19.28 16.51"
      }
    ],
    [
      "path",
      {
        "d": "M 6.30 7.83 C 17.47 18.89, 9.88 7.12, 15.82 14.15"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 7.94 C 10.63 19.84, 11.68 7.17, 15.15 17.45"
      }
    ],
    [
      "path",
      {
        "d": "M 2.82 8.59 C 5.26 9.70, 7.32 14.27, 21.78 21.32"
      }
    ]
  ]
};

export const TocoSalvage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.02 7.98 C 15.08 6.45, 7.10 15.02, 20.41 14.81" />
      <path d="M 2.37 3.79 C 11.10 8.75, 15.86 10.71, 21.94 19.51" />
      <path d="M 5.69 5.59 C 11.66 12.10, 9.73 14.22, 19.28 16.51" />
      <path d="M 6.30 7.83 C 17.47 18.89, 9.88 7.12, 15.82 14.15" />
      <path d="M 8.00 7.94 C 10.63 19.84, 11.68 7.17, 15.15 17.45" />
      <path d="M 2.82 8.59 C 5.26 9.70, 7.32 14.27, 21.78 21.32" />
      {children}
    </svg>
  );
});

export default TocoSalvage;
