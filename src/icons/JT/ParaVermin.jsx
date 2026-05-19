import React from 'react';

export const iconData = {
  "id": "ParaVermin",
  "name": "ParaVermin",
  "category": "JT",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.11 13.84 L 13.07 21.23 L 3.55 15.87 L 5.71 5.16 L 16.56 3.91 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.60 15.03 L 10.84 18.26 L 5.69 12.84 L 9.25 6.25 L 16.62 7.61 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.47 13.93 L 10.93 14.94 L 8.87 11.89 L 11.14 8.99 L 14.60 10.25 Z"
      }
    ]
  ]
};

export const ParaVermin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.11 13.84 L 13.07 21.23 L 3.55 15.87 L 5.71 5.16 L 16.56 3.91 Z" />
      <path d="M 17.60 15.03 L 10.84 18.26 L 5.69 12.84 L 9.25 6.25 L 16.62 7.61 Z" />
      <path d="M 14.47 13.93 L 10.93 14.94 L 8.87 11.89 L 11.14 8.99 L 14.60 10.25 Z" />
      {children}
    </svg>
  );
});

export default ParaVermin;
