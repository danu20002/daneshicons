import React from 'react';

export const iconData = {
  "id": "VirtuCritic",
  "name": "VirtuCritic",
  "category": "IL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 5.77 L 20.45 5.77 L 20.45 18.23 L 3.55 18.23 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 5.77 L 6.99 2.34 L 23.89 2.34 L 20.45 5.77"
      }
    ],
    [
      "path",
      {
        "d": "M 20.45 5.77 L 23.89 2.34 L 23.89 14.79 L 20.45 18.23"
      }
    ]
  ]
};

export const VirtuCritic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 5.77 L 20.45 5.77 L 20.45 18.23 L 3.55 18.23 Z" />
      <path d="M 3.55 5.77 L 6.99 2.34 L 23.89 2.34 L 20.45 5.77" />
      <path d="M 20.45 5.77 L 23.89 2.34 L 23.89 14.79 L 20.45 18.23" />
      {children}
    </svg>
  );
});

export default VirtuCritic;
