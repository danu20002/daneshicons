import React from 'react';

export const iconData = {
  "id": "TriploNorth",
  "name": "TriploNorth",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.80 2.04 L 12.54 7.65 L 18.52 3.38 L 16.04 10.29 L 22.72 13.34 L 15.50 14.65 L 16.20 21.96 L 11.46 16.35 L 5.48 20.62 L 7.96 13.71 L 1.28 10.66 L 8.50 9.35 Z"
      }
    ]
  ]
};

export const TriploNorth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.80 2.04 L 12.54 7.65 L 18.52 3.38 L 16.04 10.29 L 22.72 13.34 L 15.50 14.65 L 16.20 21.96 L 11.46 16.35 L 5.48 20.62 L 7.96 13.71 L 1.28 10.66 L 8.50 9.35 Z" />
      {children}
    </svg>
  );
});

export default TriploNorth;
