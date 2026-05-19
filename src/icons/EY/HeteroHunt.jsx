import React from 'react';

export const iconData = {
  "id": "HeteroHunt",
  "name": "HeteroHunt",
  "category": "EY",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.26 19.53 L 8.15 19.25 L 3.93 13.51 L 5.79 6.63 L 12.33 3.80 L 18.61 7.14 L 19.92 14.14 Z"
      }
    ]
  ]
};

export const HeteroHunt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.26 19.53 L 8.15 19.25 L 3.93 13.51 L 5.79 6.63 L 12.33 3.80 L 18.61 7.14 L 19.92 14.14 Z" />
      {children}
    </svg>
  );
});

export default HeteroHunt;
