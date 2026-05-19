import React from 'react';

export const iconData = {
  "id": "TheoLens",
  "name": "TheoLens",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 6.54 L 20.25 6.54 L 20.25 17.46 L 3.75 17.46 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 6.54 L 6.99 3.29 L 23.49 3.29 L 20.25 6.54"
      }
    ],
    [
      "path",
      {
        "d": "M 20.25 6.54 L 23.49 3.29 L 23.49 14.22 L 20.25 17.46"
      }
    ]
  ]
};

export const TheoLens = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 6.54 L 20.25 6.54 L 20.25 17.46 L 3.75 17.46 Z" />
      <path d="M 3.75 6.54 L 6.99 3.29 L 23.49 3.29 L 20.25 6.54" />
      <path d="M 20.25 6.54 L 23.49 3.29 L 23.49 14.22 L 20.25 17.46" />
      {children}
    </svg>
  );
});

export default TheoLens;
