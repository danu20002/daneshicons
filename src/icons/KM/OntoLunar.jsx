import React from 'react';

export const iconData = {
  "id": "OntoLunar",
  "name": "OntoLunar",
  "category": "KM",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.23 13.41 L 10.59 21.23 L 2.77 10.59 L 13.41 2.77 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.79 14.53 L 9.47 17.79 L 6.21 9.47 L 14.53 6.21 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.65 13.82 L 10.18 14.65 L 9.35 10.18 L 13.82 9.35 Z"
      }
    ]
  ]
};

export const OntoLunar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.23 13.41 L 10.59 21.23 L 2.77 10.59 L 13.41 2.77 Z" />
      <path d="M 17.79 14.53 L 9.47 17.79 L 6.21 9.47 L 14.53 6.21 Z" />
      <path d="M 14.65 13.82 L 10.18 14.65 L 9.35 10.18 L 13.82 9.35 Z" />
      {children}
    </svg>
  );
});

export default OntoLunar;
