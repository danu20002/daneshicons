import React from 'react';

export const iconData = {
  "id": "StructoHaul",
  "name": "StructoHaul",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.02 20.94 L 11.42 17.71 L 6.26 19.95 L 6.76 14.35 L 2.25 11.01 L 7.34 8.64 L 7.98 3.06 L 12.58 6.29 L 17.74 4.05 L 17.24 9.65 L 21.75 12.99 L 16.66 15.36 Z"
      }
    ]
  ]
};

export const StructoHaul = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.02 20.94 L 11.42 17.71 L 6.26 19.95 L 6.76 14.35 L 2.25 11.01 L 7.34 8.64 L 7.98 3.06 L 12.58 6.29 L 17.74 4.05 L 17.24 9.65 L 21.75 12.99 L 16.66 15.36 Z" />
      {children}
    </svg>
  );
});

export default StructoHaul;
