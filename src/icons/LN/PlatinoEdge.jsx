import React from 'react';

export const iconData = {
  "id": "PlatinoEdge",
  "name": "PlatinoEdge",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.85 14.91 L 16.15 19.28 L 10.50 20.24 L 5.55 17.35 L 3.62 11.95 L 5.61 6.58 L 10.59 3.74 L 16.23 4.77 L 19.89 9.18 Z"
      }
    ]
  ]
};

export const PlatinoEdge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.85 14.91 L 16.15 19.28 L 10.50 20.24 L 5.55 17.35 L 3.62 11.95 L 5.61 6.58 L 10.59 3.74 L 16.23 4.77 L 19.89 9.18 Z" />
      {children}
    </svg>
  );
});

export default PlatinoEdge;
