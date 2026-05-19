import React from 'react';

export const iconData = {
  "id": "ZanzaraDove",
  "name": "ZanzaraDove",
  "category": "OU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.08 8.11 L 10.08 8.11"
      }
    ],
    [
      "path",
      {
        "d": "M 12.41 4.93 L 14.41 8.39"
      }
    ],
    [
      "path",
      {
        "d": "M 18.33 8.82 L 16.33 12.28"
      }
    ],
    [
      "path",
      {
        "d": "M 17.92 15.89 L 13.92 15.89"
      }
    ],
    [
      "path",
      {
        "d": "M 11.59 19.07 L 9.59 15.61"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 15.18 L 7.67 11.72"
      }
    ]
  ]
};

export const ZanzaraDove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.08 8.11 L 10.08 8.11" />
      <path d="M 12.41 4.93 L 14.41 8.39" />
      <path d="M 18.33 8.82 L 16.33 12.28" />
      <path d="M 17.92 15.89 L 13.92 15.89" />
      <path d="M 11.59 19.07 L 9.59 15.61" />
      <path d="M 5.67 15.18 L 7.67 11.72" />
      {children}
    </svg>
  );
});

export default ZanzaraDove;
