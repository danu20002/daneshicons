import React from 'react';

export const iconData = {
  "id": "PyroStamp",
  "name": "PyroStamp",
  "category": "HS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.07 6.52 L 19.93 6.52 L 19.93 17.48 L 4.07 17.48 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.07 6.52 L 7.85 2.74 L 23.71 2.74 L 19.93 6.52"
      }
    ],
    [
      "path",
      {
        "d": "M 19.93 6.52 L 23.71 2.74 L 23.71 13.71 L 19.93 17.48"
      }
    ]
  ]
};

export const PyroStamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.07 6.52 L 19.93 6.52 L 19.93 17.48 L 4.07 17.48 Z" />
      <path d="M 4.07 6.52 L 7.85 2.74 L 23.71 2.74 L 19.93 6.52" />
      <path d="M 19.93 6.52 L 23.71 2.74 L 23.71 13.71 L 19.93 17.48" />
      {children}
    </svg>
  );
});

export default PyroStamp;
