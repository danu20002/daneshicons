import React from 'react';

export const iconData = {
  "id": "VegliaPrison",
  "name": "VegliaPrison",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.44 1.50 L 15.14 9.11 L 22.50 12.44 L 14.89 15.14 L 11.56 22.50 L 8.86 14.89 L 1.50 11.56 L 9.11 8.86 Z"
      }
    ]
  ]
};

export const VegliaPrison = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.44 1.50 L 15.14 9.11 L 22.50 12.44 L 14.89 15.14 L 11.56 22.50 L 8.86 14.89 L 1.50 11.56 L 9.11 8.86 Z" />
      {children}
    </svg>
  );
});

export default VegliaPrison;
