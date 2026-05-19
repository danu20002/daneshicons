import React from 'react';

export const iconData = {
  "id": "TuffoRavine",
  "name": "TuffoRavine",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.77 6.84 L 10.72 9.24 L 14.06 1.62 L 14.23 9.93 L 22.50 10.75 L 14.66 13.48 L 16.44 21.60 L 11.41 14.98 L 4.24 19.19 L 8.98 12.36 Z"
      }
    ]
  ]
};

export const TuffoRavine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.77 6.84 L 10.72 9.24 L 14.06 1.62 L 14.23 9.93 L 22.50 10.75 L 14.66 13.48 L 16.44 21.60 L 11.41 14.98 L 4.24 19.19 L 8.98 12.36 Z" />
      {children}
    </svg>
  );
});

export default TuffoRavine;
