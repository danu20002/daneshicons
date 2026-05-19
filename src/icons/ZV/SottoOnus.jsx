import React from 'react';

export const iconData = {
  "id": "SottoOnus",
  "name": "SottoOnus",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.32 12.09 L 14.79 20.89 L 4.41 17.40 L 4.52 6.45 L 14.97 3.17 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 14.92 L 10.92 18.14 L 5.82 12.87 L 9.26 6.40 L 16.48 7.66 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.50 14.24 L 10.64 15.07 L 8.66 11.65 L 11.30 8.71 L 14.91 10.32 Z"
      }
    ]
  ]
};

export const SottoOnus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.32 12.09 L 14.79 20.89 L 4.41 17.40 L 4.52 6.45 L 14.97 3.17 Z" />
      <path d="M 17.51 14.92 L 10.92 18.14 L 5.82 12.87 L 9.26 6.40 L 16.48 7.66 Z" />
      <path d="M 14.50 14.24 L 10.64 15.07 L 8.66 11.65 L 11.30 8.71 L 14.91 10.32 Z" />
      {children}
    </svg>
  );
});

export default SottoOnus;
