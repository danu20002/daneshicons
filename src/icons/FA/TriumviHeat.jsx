import React from 'react';

export const iconData = {
  "id": "TriumviHeat",
  "name": "TriumviHeat",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.31 2.82 L 14.50 8.13 L 22.29 12.52 L 14.10 16.10 L 6.40 20.65 L 7.40 11.77 Z"
      }
    ]
  ]
};

export const TriumviHeat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.31 2.82 L 14.50 8.13 L 22.29 12.52 L 14.10 16.10 L 6.40 20.65 L 7.40 11.77 Z" />
      {children}
    </svg>
  );
});

export default TriumviHeat;
