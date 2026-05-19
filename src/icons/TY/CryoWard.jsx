import React from 'react';

export const iconData = {
  "id": "CryoWard",
  "name": "CryoWard",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.17 2.94 C 7.71 3.07, 5.34 18.34, 17.42 18.08"
      }
    ],
    [
      "path",
      {
        "d": "M 15.74 20.98 C 7.83 15.19, 5.83 14.85, 17.65 5.87"
      }
    ]
  ]
};

export const CryoWard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.17 2.94 C 7.71 3.07, 5.34 18.34, 17.42 18.08" />
      <path d="M 15.74 20.98 C 7.83 15.19, 5.83 14.85, 17.65 5.87" />
      {children}
    </svg>
  );
});

export default CryoWard;
