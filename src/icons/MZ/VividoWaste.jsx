import React from 'react';

export const iconData = {
  "id": "VividoWaste",
  "name": "VividoWaste",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.80 9.20 L 11.82 2.39 L 21.09 8.86 L 17.79 19.67 L 6.50 19.88 Z"
      }
    ]
  ]
};

export const VividoWaste = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.80 9.20 L 11.82 2.39 L 21.09 8.86 L 17.79 19.67 L 6.50 19.88 Z" />
      {children}
    </svg>
  );
});

export default VividoWaste;
