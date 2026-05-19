import React from 'react';

export const iconData = {
  "id": "VivandeDerby",
  "name": "VivandeDerby",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.81 4.38 L 8.77 11.60"
      }
    ],
    [
      "path",
      {
        "d": "M 2.98 9.74 C 2.45 12.93, 16.25 14.71, 18.87 7.41"
      }
    ],
    [
      "path",
      {
        "d": "M 15.77 19.82 Q 20.05 12.69 16.09 2.56"
      }
    ]
  ]
};

export const VivandeDerby = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.81 4.38 L 8.77 11.60" />
      <path d="M 2.98 9.74 C 2.45 12.93, 16.25 14.71, 18.87 7.41" />
      <path d="M 15.77 19.82 Q 20.05 12.69 16.09 2.56" />
      {children}
    </svg>
  );
});

export default VivandeDerby;
