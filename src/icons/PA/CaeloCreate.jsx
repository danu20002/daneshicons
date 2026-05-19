import React from 'react';

export const iconData = {
  "id": "CaeloCreate",
  "name": "CaeloCreate",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.05 6.59 L 19.95 6.59 L 19.95 17.41 L 4.05 17.41 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 6.59 L 7.13 3.51 L 23.03 3.51 L 19.95 6.59"
      }
    ],
    [
      "path",
      {
        "d": "M 19.95 6.59 L 23.03 3.51 L 23.03 14.33 L 19.95 17.41"
      }
    ]
  ]
};

export const CaeloCreate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.05 6.59 L 19.95 6.59 L 19.95 17.41 L 4.05 17.41 Z" />
      <path d="M 4.05 6.59 L 7.13 3.51 L 23.03 3.51 L 19.95 6.59" />
      <path d="M 19.95 6.59 L 23.03 3.51 L 23.03 14.33 L 19.95 17.41" />
      {children}
    </svg>
  );
});

export default CaeloCreate;
