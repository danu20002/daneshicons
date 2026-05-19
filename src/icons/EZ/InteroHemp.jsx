import React from 'react';

export const iconData = {
  "id": "InteroHemp",
  "name": "InteroHemp",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.37 9.65 L 16.02 13.15 L 18.72 18.94 L 13.02 16.05 L 9.35 21.29 L 9.00 14.91 L 2.63 14.35 L 7.98 10.85 L 5.28 5.06 L 10.98 7.95 L 14.65 2.71 L 15.00 9.09 Z"
      }
    ]
  ]
};

export const InteroHemp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.37 9.65 L 16.02 13.15 L 18.72 18.94 L 13.02 16.05 L 9.35 21.29 L 9.00 14.91 L 2.63 14.35 L 7.98 10.85 L 5.28 5.06 L 10.98 7.95 L 14.65 2.71 L 15.00 9.09 Z" />
      {children}
    </svg>
  );
});

export default InteroHemp;
