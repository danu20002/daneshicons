import React from 'react';

export const iconData = {
  "id": "RefleGarrison",
  "name": "RefleGarrison",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.31 14.57 A 3.04 3.54 15 0 1 18.27 3.86"
      }
    ],
    [
      "path",
      {
        "d": "M 12.35 5.52 Q 13.13 14.86 13.44 2.64"
      }
    ],
    [
      "path",
      {
        "d": "M 6.76 10.98 A 5.79 5.55 37 0 1 5.41 11.68"
      }
    ]
  ]
};

export const RefleGarrison = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.31 14.57 A 3.04 3.54 15 0 1 18.27 3.86" />
      <path d="M 12.35 5.52 Q 13.13 14.86 13.44 2.64" />
      <path d="M 6.76 10.98 A 5.79 5.55 37 0 1 5.41 11.68" />
      {children}
    </svg>
  );
});

export default RefleGarrison;
