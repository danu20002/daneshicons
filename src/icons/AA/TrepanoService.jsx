import React from 'react';

export const iconData = {
  "id": "TrepanoService",
  "name": "TrepanoService",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.27 3.14 C 14.84 12.16, 19.44 12.72, 15.79 16.05"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 2.89 C 12.41 18.39, 14.00 19.35, 14.05 21.76"
      }
    ],
    [
      "path",
      {
        "d": "M 9.56 6.55 C 19.27 4.89, 9.55 11.49, 20.46 21.17"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 8.62 C 17.62 8.84, 15.20 5.23, 16.89 19.49"
      }
    ]
  ]
};

export const TrepanoService = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.27 3.14 C 14.84 12.16, 19.44 12.72, 15.79 16.05" />
      <path d="M 5.98 2.89 C 12.41 18.39, 14.00 19.35, 14.05 21.76" />
      <path d="M 9.56 6.55 C 19.27 4.89, 9.55 11.49, 20.46 21.17" />
      <path d="M 3.46 8.62 C 17.62 8.84, 15.20 5.23, 16.89 19.49" />
      {children}
    </svg>
  );
});

export default TrepanoService;
