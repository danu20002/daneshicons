import React from 'react';

export const iconData = {
  "id": "SpodoUnhappy",
  "name": "SpodoUnhappy",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.68 4.83 L 15.87 19.63 L 3.45 11.53 Z"
      }
    ]
  ]
};

export const SpodoUnhappy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.68 4.83 L 15.87 19.63 L 3.45 11.53 Z" />
      {children}
    </svg>
  );
});

export default SpodoUnhappy;
