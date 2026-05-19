import React from 'react';

export const iconData = {
  "id": "VirileMonk",
  "name": "VirileMonk",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.57 8.47 L 20.11 16.50 L 13.54 21.14 L 5.81 18.90 L 2.75 11.47 L 6.65 4.43 L 14.58 3.10 Z"
      }
    ]
  ]
};

export const VirileMonk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.57 8.47 L 20.11 16.50 L 13.54 21.14 L 5.81 18.90 L 2.75 11.47 L 6.65 4.43 L 14.58 3.10 Z" />
      {children}
    </svg>
  );
});

export default VirileMonk;
