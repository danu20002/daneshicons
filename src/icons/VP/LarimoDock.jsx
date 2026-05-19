import React from 'react';

export const iconData = {
  "id": "LarimoDock",
  "name": "LarimoDock",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.99 5.11 L 20.01 5.11 L 20.01 18.89 L 3.99 18.89 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 5.11 L 7.46 1.64 L 23.48 1.64 L 20.01 5.11"
      }
    ],
    [
      "path",
      {
        "d": "M 20.01 5.11 L 23.48 1.64 L 23.48 15.42 L 20.01 18.89"
      }
    ]
  ]
};

export const LarimoDock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.99 5.11 L 20.01 5.11 L 20.01 18.89 L 3.99 18.89 Z" />
      <path d="M 3.99 5.11 L 7.46 1.64 L 23.48 1.64 L 20.01 5.11" />
      <path d="M 20.01 5.11 L 23.48 1.64 L 23.48 15.42 L 20.01 18.89" />
      {children}
    </svg>
  );
});

export default LarimoDock;
