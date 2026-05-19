import React from 'react';

export const iconData = {
  "id": "VolutoHistory",
  "name": "VolutoHistory",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.22 10.82 Q 18.19 4.64 7.88 12.93"
      }
    ],
    [
      "path",
      {
        "d": "M 20.89 3.84 L 20.64 14.23 L 20.39 5.86"
      }
    ],
    [
      "path",
      {
        "d": "M 2.65 14.38 L 2.38 13.21 L 14.99 18.57 L 11.34 7.25 L 21.68 7.15 L 10.25 8.87 L 9.07 17.08"
      }
    ],
    [
      "path",
      {
        "d": "M 3.12 8.93 L 9.72 2.76"
      }
    ],
    [
      "path",
      {
        "d": "M 15.66 3.22 L 11.80 13.53"
      }
    ],
    [
      "path",
      {
        "d": "M 16.49 7.67 L 16.97 12.59"
      }
    ]
  ]
};

export const VolutoHistory = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.22 10.82 Q 18.19 4.64 7.88 12.93" />
      <path d="M 20.89 3.84 L 20.64 14.23 L 20.39 5.86" />
      <path d="M 2.65 14.38 L 2.38 13.21 L 14.99 18.57 L 11.34 7.25 L 21.68 7.15 L 10.25 8.87 L 9.07 17.08" />
      <path d="M 3.12 8.93 L 9.72 2.76" />
      <path d="M 15.66 3.22 L 11.80 13.53" />
      <path d="M 16.49 7.67 L 16.97 12.59" />
      {children}
    </svg>
  );
});

export default VolutoHistory;
