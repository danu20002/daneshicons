import React from 'react';

export const iconData = {
  "id": "ModuHighway",
  "name": "ModuHighway",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.31 5.06 L 13.88 3.23 L 20.03 8.00 L 20.14 15.78 L 14.12 20.72 L 6.50 19.09 L 3.03 12.12 Z"
      }
    ]
  ]
};

export const ModuHighway = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.31 5.06 L 13.88 3.23 L 20.03 8.00 L 20.14 15.78 L 14.12 20.72 L 6.50 19.09 L 3.03 12.12 Z" />
      {children}
    </svg>
  );
});

export default ModuHighway;
