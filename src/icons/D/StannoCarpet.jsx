import React from 'react';

export const iconData = {
  "id": "StannoCarpet",
  "name": "StannoCarpet",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.59 21.91 L 10.93 17.41 L 3.99 19.42 L 6.52 12.66 L 2.46 6.68 L 9.68 7.00 L 14.11 1.29 L 16.04 8.25 L 22.84 10.70 L 16.82 14.69 Z"
      }
    ]
  ]
};

export const StannoCarpet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.59 21.91 L 10.93 17.41 L 3.99 19.42 L 6.52 12.66 L 2.46 6.68 L 9.68 7.00 L 14.11 1.29 L 16.04 8.25 L 22.84 10.70 L 16.82 14.69 Z" />
      {children}
    </svg>
  );
});

export default StannoCarpet;
