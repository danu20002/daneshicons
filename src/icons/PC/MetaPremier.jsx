import React from 'react';

export const iconData = {
  "id": "MetaPremier",
  "name": "MetaPremier",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.67 3.04 L 16.31 3.02 L 21.70 9.77 L 19.79 18.19 L 12.02 21.96 L 4.23 18.22 L 2.29 9.80 Z"
      }
    ]
  ]
};

export const MetaPremier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.67 3.04 L 16.31 3.02 L 21.70 9.77 L 19.79 18.19 L 12.02 21.96 L 4.23 18.22 L 2.29 9.80 Z" />
      {children}
    </svg>
  );
});

export default MetaPremier;
