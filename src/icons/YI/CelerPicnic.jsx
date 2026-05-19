import React from 'react';

export const iconData = {
  "id": "CelerPicnic",
  "name": "CelerPicnic",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.90 4.15 L 20.86 11.62"
      }
    ],
    [
      "path",
      {
        "d": "M 4.02 10.89 A 6.52 4.20 101 0 0 3.87 8.96"
      }
    ],
    [
      "path",
      {
        "d": "M 21.23 8.12 L 21.56 15.89 L 17.72 3.39 L 7.52 6.35"
      }
    ]
  ]
};

export const CelerPicnic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.90 4.15 L 20.86 11.62" />
      <path d="M 4.02 10.89 A 6.52 4.20 101 0 0 3.87 8.96" />
      <path d="M 21.23 8.12 L 21.56 15.89 L 17.72 3.39 L 7.52 6.35" />
      {children}
    </svg>
  );
});

export default CelerPicnic;
