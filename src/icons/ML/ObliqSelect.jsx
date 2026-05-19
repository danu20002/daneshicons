import React from 'react';

export const iconData = {
  "id": "ObliqSelect",
  "name": "ObliqSelect",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.42 6.16 C 9.67 14.29, 19.73 11.07, 15.02 19.67"
      }
    ],
    [
      "path",
      {
        "d": "M 2.22 8.45 C 13.21 9.69, 13.94 16.60, 18.66 21.58"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 7.97 C 18.92 6.15, 16.40 12.72, 19.27 14.28"
      }
    ]
  ]
};

export const ObliqSelect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.42 6.16 C 9.67 14.29, 19.73 11.07, 15.02 19.67" />
      <path d="M 2.22 8.45 C 13.21 9.69, 13.94 16.60, 18.66 21.58" />
      <path d="M 3.71 7.97 C 18.92 6.15, 16.40 12.72, 19.27 14.28" />
      {children}
    </svg>
  );
});

export default ObliqSelect;
