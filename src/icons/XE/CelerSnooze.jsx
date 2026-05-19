import React from 'react';

export const iconData = {
  "id": "CelerSnooze",
  "name": "CelerSnooze",
  "category": "XE",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.21 17.58 L 6.42 6.21 L 17.79 6.42 L 17.58 17.79 Z"
      }
    ]
  ]
};

export const CelerSnooze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.21 17.58 L 6.42 6.21 L 17.79 6.42 L 17.58 17.79 Z" />
      {children}
    </svg>
  );
});

export default CelerSnooze;
