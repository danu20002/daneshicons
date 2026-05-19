import React from 'react';

export const iconData = {
  "id": "YogurtQuip",
  "name": "YogurtQuip",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.37 5.38 C 8.93 10.48, 5.76 12.39, 20.28 20.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 7.81 C 18.49 5.94, 13.73 6.11, 19.42 16.35"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 3.32 C 18.51 8.00, 19.18 8.56, 15.35 19.79"
      }
    ]
  ]
};

export const YogurtQuip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.37 5.38 C 8.93 10.48, 5.76 12.39, 20.28 20.61" />
      <path d="M 8.04 7.81 C 18.49 5.94, 13.73 6.11, 19.42 16.35" />
      <path d="M 3.98 3.32 C 18.51 8.00, 19.18 8.56, 15.35 19.79" />
      {children}
    </svg>
  );
});

export default YogurtQuip;
