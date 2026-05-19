import React from 'react';

export const iconData = {
  "id": "VignaThief",
  "name": "VignaThief",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 18.90 L 8.26 11.89 L 5.10 4.66 L 12.11 8.26 L 19.34 5.10 L 15.74 12.11 L 18.90 19.34 L 11.89 15.74 Z"
      }
    ]
  ]
};

export const VignaThief = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 18.90 L 8.26 11.89 L 5.10 4.66 L 12.11 8.26 L 19.34 5.10 L 15.74 12.11 L 18.90 19.34 L 11.89 15.74 Z" />
      {children}
    </svg>
  );
});

export default VignaThief;
