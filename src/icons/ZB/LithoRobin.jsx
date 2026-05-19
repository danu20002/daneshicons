import React from 'react';

export const iconData = {
  "id": "LithoRobin",
  "name": "LithoRobin",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.83 3.63 C 13.27 17.03, 4.16 8.55, 5.18 14.79"
      }
    ],
    [
      "path",
      {
        "d": "M 18.90 16.39 A 4.57 4.46 62 0 0 6.39 5.20"
      }
    ]
  ]
};

export const LithoRobin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.83 3.63 C 13.27 17.03, 4.16 8.55, 5.18 14.79" />
      <path d="M 18.90 16.39 A 4.57 4.46 62 0 0 6.39 5.20" />
      {children}
    </svg>
  );
});

export default LithoRobin;
