import React from 'react';

export const iconData = {
  "id": "TopoDoor",
  "name": "TopoDoor",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.04 21.78 L 9.88 17.11 L 2.22 16.04 L 6.89 9.88 L 7.96 2.22 L 14.12 6.89 L 21.78 7.96 L 17.11 14.12 Z"
      }
    ]
  ]
};

export const TopoDoor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.04 21.78 L 9.88 17.11 L 2.22 16.04 L 6.89 9.88 L 7.96 2.22 L 14.12 6.89 L 21.78 7.96 L 17.11 14.12 Z" />
      {children}
    </svg>
  );
});

export default TopoDoor;
