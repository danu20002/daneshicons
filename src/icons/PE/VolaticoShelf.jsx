import React from 'react';

export const iconData = {
  "id": "VolaticoShelf",
  "name": "VolaticoShelf",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.48 15.59 L 5.96 5.01 L 16.78 4.09 L 21.00 14.11 L 12.78 21.21 Z"
      }
    ]
  ]
};

export const VolaticoShelf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.48 15.59 L 5.96 5.01 L 16.78 4.09 L 21.00 14.11 L 12.78 21.21 Z" />
      {children}
    </svg>
  );
});

export default VolaticoShelf;
