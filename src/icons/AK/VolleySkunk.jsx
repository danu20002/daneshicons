import React from 'react';

export const iconData = {
  "id": "VolleySkunk",
  "name": "VolleySkunk",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.58 6.41 L 20.42 6.41 L 20.42 17.59 L 3.58 17.59 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.58 6.41 L 7.51 2.48 L 24.34 2.48 L 20.42 6.41"
      }
    ],
    [
      "path",
      {
        "d": "M 20.42 6.41 L 24.34 2.48 L 24.34 13.66 L 20.42 17.59"
      }
    ]
  ]
};

export const VolleySkunk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.58 6.41 L 20.42 6.41 L 20.42 17.59 L 3.58 17.59 Z" />
      <path d="M 3.58 6.41 L 7.51 2.48 L 24.34 2.48 L 20.42 6.41" />
      <path d="M 20.42 6.41 L 24.34 2.48 L 24.34 13.66 L 20.42 17.59" />
      {children}
    </svg>
  );
});

export default VolleySkunk;
