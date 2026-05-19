import React from 'react';

export const iconData = {
  "id": "QuebraRuler",
  "name": "QuebraRuler",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.43 4.47 C 5.46 17.76, 10.34 8.52, 14.90 20.49"
      }
    ],
    [
      "path",
      {
        "d": "M 7.28 9.57 C 16.73 9.66, 17.32 17.52, 19.96 16.64"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 3.29 C 18.08 7.51, 17.74 5.32, 14.09 14.29"
      }
    ]
  ]
};

export const QuebraRuler = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.43 4.47 C 5.46 17.76, 10.34 8.52, 14.90 20.49" />
      <path d="M 7.28 9.57 C 16.73 9.66, 17.32 17.52, 19.96 16.64" />
      <path d="M 7.13 3.29 C 18.08 7.51, 17.74 5.32, 14.09 14.29" />
      {children}
    </svg>
  );
});

export default QuebraRuler;
