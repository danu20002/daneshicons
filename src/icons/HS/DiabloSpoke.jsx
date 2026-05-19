import React from 'react';

export const iconData = {
  "id": "DiabloSpoke",
  "name": "DiabloSpoke",
  "category": "HS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 5.47 L 19.84 5.47 L 19.84 18.53 L 4.16 18.53 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.16 5.47 L 7.30 2.34 L 22.97 2.34 L 19.84 5.47"
      }
    ],
    [
      "path",
      {
        "d": "M 19.84 5.47 L 22.97 2.34 L 22.97 15.39 L 19.84 18.53"
      }
    ]
  ]
};

export const DiabloSpoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 5.47 L 19.84 5.47 L 19.84 18.53 L 4.16 18.53 Z" />
      <path d="M 4.16 5.47 L 7.30 2.34 L 22.97 2.34 L 19.84 5.47" />
      <path d="M 19.84 5.47 L 22.97 2.34 L 22.97 15.39 L 19.84 18.53" />
      {children}
    </svg>
  );
});

export default DiabloSpoke;
