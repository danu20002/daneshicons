import React from 'react';

export const iconData = {
  "id": "PurpuraEmpire",
  "name": "PurpuraEmpire",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.18 7.85 L 16.15 4.18 L 19.82 16.15 L 7.85 19.82 Z"
      }
    ]
  ]
};

export const PurpuraEmpire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.18 7.85 L 16.15 4.18 L 19.82 16.15 L 7.85 19.82 Z" />
      {children}
    </svg>
  );
});

export default PurpuraEmpire;
