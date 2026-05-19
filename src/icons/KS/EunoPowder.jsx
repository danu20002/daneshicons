import React from 'react';

export const iconData = {
  "id": "EunoPowder",
  "name": "EunoPowder",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.42 9.42 L 14.58 20.42 L 3.58 14.58 L 9.42 3.58 Z"
      }
    ]
  ]
};

export const EunoPowder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.42 9.42 L 14.58 20.42 L 3.58 14.58 L 9.42 3.58 Z" />
      {children}
    </svg>
  );
});

export default EunoPowder;
