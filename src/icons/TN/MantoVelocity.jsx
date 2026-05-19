import React from 'react';

export const iconData = {
  "id": "MantoVelocity",
  "name": "MantoVelocity",
  "category": "TN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 7.94 L 19.82 6.58 L 12.79 21.48 Z"
      }
    ]
  ]
};

export const MantoVelocity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 7.94 L 19.82 6.58 L 12.79 21.48 Z" />
      {children}
    </svg>
  );
});

export default MantoVelocity;
